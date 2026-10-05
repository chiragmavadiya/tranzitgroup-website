"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export const enquiryTypes = ["General enquiry", "Book a demo", "Pricing / sales", "Support", "Partnership"] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

type Errors = Partial<Record<"name" | "email" | "message" | "type", string>>;
type Status = { state: "idle" } | { state: "submitting" } | { state: "success" } | { state: "unconfigured" } | { state: "error"; message: string };

export function ContactForm({ initialType = "General enquiry" }: { initialType?: EnquiryType }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", type: initialType as string, message: "", website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Please enter a valid email address.";
    if (!enquiryTypes.includes(values.type as EnquiryType)) e.type = "Please choose an enquiry type.";
    if (values.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
    return e;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.status === 501) {
        setStatus({ state: "unconfigured" });
        return;
      }
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus({ state: "error", message: data.error ?? "Something went wrong. Please try again or email us directly." });
        return;
      }
      setStatus({ state: "success" });
    } catch {
      setStatus({ state: "error", message: "We couldn't reach the server. Please try again or email us directly." });
    }
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`${values.type} - ${values.name}`)}&body=${encodeURIComponent(
    `${values.message}\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "-"}`,
  )}`;

  if (status.state === "success") {
    return (
      <div role="status" className="rounded bg-surface p-6 text-[15px] text-navy-900">
        <p className="mb-1 font-bold">Thanks, your enquiry has been sent.</p>
        <p>We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  const field = "w-full border border-line bg-white px-3.5 py-2.5 text-[15px] text-navy-900 transition-[border-color,box-shadow] duration-[260ms] ease-smooth placeholder:text-muted-light hover:border-navy/40 focus:border-navy focus:shadow-[0_0_0_3px_rgba(233,147,34,0.25)]";
  const label = "mb-1.5 block text-[14px] font-bold text-navy-900";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => setValues({ ...values, website: e.target.value })} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Full name <span className="text-orange-deep">*</span>
          </label>
          <input id="name" name="name" autoComplete="name" required className={field} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && (
            <p id="name-error" className="mt-1 text-[13px] text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email <span className="text-orange-deep">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && (
            <p id="email-error" className="mt-1 text-[13px] text-red-600">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} />
        </div>
        <div>
          <label htmlFor="type" className={label}>
            Enquiry type <span className="text-orange-deep">*</span>
          </label>
          <select id="type" name="type" required className={field} value={values.type} onChange={(e) => setValues({ ...values, type: e.target.value })}>
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message <span className="text-orange-deep">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required className={field} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && (
          <p id="message-error" className="mt-1 text-[13px] text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status.state === "unconfigured" && (
        <div role="alert" className="rounded border border-orange bg-orange/10 p-4 text-[14px] text-navy-900">
          <p className="mb-1 font-bold">Online submissions aren&apos;t connected yet.</p>
          <p>
            Your message was not sent. Please{" "}
            <a href={mailto} className="font-semibold underline underline-offset-2">
              email it to {site.email}
            </a>{" "}
            instead. Your details are pre-filled in the link.
          </p>
        </div>
      )}
      {status.state === "error" && (
        <div role="alert" className="rounded border border-red-300 bg-red-50 p-4 text-[14px] text-navy-900">
          {status.message}{" "}
          <a href={mailto} className="font-semibold underline underline-offset-2">
            Email us instead.
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="inline-flex h-12 items-center justify-center bg-orange px-7 text-[15px] font-bold text-navy-900 transition-[color,background-color,box-shadow,translate,scale] duration-[260ms] ease-smooth hover:-translate-y-px hover:bg-navy hover:text-white hover:shadow-button active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
        >
          <span className="btn-label">{status.state === "submitting" ? "Sending…" : "Send enquiry"}</span>
        </button>
        <p className="text-[12.5px] leading-relaxed text-muted">By submitting this form you agree we may contact you about your enquiry. We never share your details with third parties.</p>
      </div>
    </form>
  );
}
