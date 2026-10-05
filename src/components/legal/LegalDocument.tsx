import type { LegalBlock, LegalDoc } from "@/content/legal-docs";
import { LegalIndex } from "./LegalIndex";

/*
 * Renders a legal document (intro + numbered sections) with a section index.
 * Server Component; only the index search box runs on the client.
 * Inline html comes from the trusted content file and is limited to <a>, <strong>, <em>.
 */

const sectionId = (n: number) => `section-${n}`;

function Html({ html, className = "" }: { html: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.t) {
    case "p":
      return (
        <p>
          <Html html={block.html} />
        </p>
      );
    case "ul":
      return (
        <ul className="legal-list">
          {block.items.map((item, i) => (
            <li key={i}>
              <Html html={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="legal-olist">
          {block.items.map((item, i) => (
            <li key={i}>
              <Html html={item} />
            </li>
          ))}
        </ol>
      );
    case "labelled":
      return (
        <ul className="my-5 grid gap-3 sm:grid-cols-2" role="list">
          {block.items.map((item) => (
            <li key={item.label} className="border-l-4 border-orange bg-surface p-4">
              <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-orange-deep">{item.label}</p>
              <p className="!mb-0 text-[14.5px] leading-relaxed">
                <Html html={item.html} />
              </p>
            </li>
          ))}
        </ul>
      );
    case "defs":
      return (
        <dl className="my-5 divide-y divide-line-soft border-y border-line-soft">
          {block.items.map((item) => (
            <div key={item.term} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="font-heading text-[15px] font-semibold text-navy">{item.term}</dt>
              <dd className="text-[15px] leading-relaxed text-muted">
                <Html html={item.html} />
              </dd>
            </div>
          ))}
        </dl>
      );
    case "contact":
      return (
        <ul className="my-5 grid gap-4 sm:grid-cols-3" role="list">
          {block.items.map((item) => (
            <li key={item.label} className="border-b-4 border-orange bg-surface p-5">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-orange-deep">{item.label}</p>
              {item.lines.map((line, i) => (
                <p key={i} className={`!mb-0 text-[14.5px] ${i === 0 ? "font-semibold text-navy" : "text-muted"}`}>
                  <Html html={line} />
                </p>
              ))}
            </li>
          ))}
        </ul>
      );
  }
}

/** Plain text of a section, used by the index search. */
function plainText(blocks: LegalBlock[]) {
  const strip = (s: string) => s.replace(/<[^>]+>/g, " ");
  return blocks
    .map((b) => {
      if (b.t === "p") return strip(b.html);
      if (b.t === "ul" || b.t === "ol") return b.items.map(strip).join(" ");
      if (b.t === "labelled") return b.items.map((i) => `${i.label} ${strip(i.html)}`).join(" ");
      if (b.t === "defs") return b.items.map((i) => `${i.term} ${strip(i.html)}`).join(" ");
      if (b.t === "contact") return b.items.map((i) => `${i.label} ${i.lines.map(strip).join(" ")}`).join(" ");
      return "";
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function LegalDocument({ doc, searchLabel }: { doc: LegalDoc; searchLabel: string }) {
  const index = doc.sections.map((s) => ({ id: sectionId(s.n), n: s.n, title: s.title, text: `${s.title.toLowerCase()} ${plainText(s.blocks)}` }));
  return (
    <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
      <LegalIndex sections={index} searchLabel={searchLabel} />
      <article className="prose-legal min-w-0 max-w-[820px] text-[15.5px]">
        {doc.intro.map((p, i) => (
          <p key={i} className={i === 0 ? "text-[17px] !text-navy-900" : ""}>
            <Html html={p.html} />
          </p>
        ))}
        {doc.sections.map((s) => (
          <section key={s.n} id={sectionId(s.n)} className="scroll-mt-6 border-t border-line-soft pt-8 first-of-type:mt-10">
            <h2 className="!mt-0 flex items-baseline gap-3">
              <span className="font-mono text-[14px] font-bold text-orange-deep">{String(s.n).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </h2>
            {s.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
