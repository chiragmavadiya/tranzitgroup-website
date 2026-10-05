import { NextResponse } from "next/server";

const enquiryTypes = ["General enquiry", "Book a demo", "Pricing / sales", "Support", "Partnership"];

type Payload = { name?: string; email?: string; phone?: string; type?: string; message?: string; website?: string };

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without forwarding.
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const type = body.type ?? "";
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 || !enquiryTypes.includes(type)) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 422 });
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    // No verified submission endpoint is configured. Tell the client honestly.
    return NextResponse.json({ error: "Contact form endpoint is not configured." }, { status: 501 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, phone: body.phone?.trim() ?? "", type, message, source: "tranzitgroup.com.au" }),
    });
    if (!res.ok) return NextResponse.json({ error: "The enquiry service rejected the message. Please email us instead." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not reach the enquiry service. Please email us instead." }, { status: 502 });
  }
}
