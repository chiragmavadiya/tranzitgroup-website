"use client";

import { useId, useMemo, useState } from "react";
import { Search, X } from "lucide-react";

type Entry = { id: string; n: number; title: string; text: string };

/**
 * Section index with keyword search (like the portal's legal pages).
 * Desktop: sticky beside the document. Phones: a collapsible "Contents" panel.
 * Search filters the index only; the document itself is never hidden.
 */
export function LegalIndex({ sections, searchLabel }: { sections: Entry[]; searchLabel: string }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = useMemo(() => (q ? sections.filter((s) => s.text.includes(q)) : sections), [q, sections]);
  const baseId = useId();

  const list = (variant: "mobile" | "desktop") => (
    <>
      <div className="relative mb-3">
        <label htmlFor={`${baseId}-${variant}`} className="sr-only">
          {searchLabel}
        </label>
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
        <input
          id={`${baseId}-${variant}`}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchLabel}
          className="h-11 w-full border border-line bg-white pl-9 pr-9 text-[14px] text-navy-900 transition-[border-color,box-shadow] duration-[260ms] placeholder:text-muted-light focus:border-navy focus:shadow-[0_0_0_3px_rgba(233,147,34,0.25)] focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center text-muted hover:text-navy"
            aria-label="Clear search"
          >
            <X className="size-4" aria-hidden />
          </button>
        )}
      </div>
      <p className="mb-2 text-[12px] text-muted" aria-live="polite">
        {q ? `${shown.length} of ${sections.length} sections match` : `${sections.length} sections`}
      </p>
      <ol className="max-h-[60vh] space-y-0.5 overflow-y-auto overscroll-contain pb-2 pr-1 lg:max-h-[calc(100vh-260px)]">
        {shown.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="flex gap-2.5 border-l-2 border-transparent px-3 py-1.5 text-[13.5px] leading-snug text-navy-900 transition-colors duration-[260ms] hover:border-orange hover:bg-surface"
            >
              <span className="w-6 shrink-0 font-mono text-[12px] text-orange-deep">{String(s.n).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </a>
          </li>
        ))}
        {shown.length === 0 && <li className="px-3 py-2 text-[13.5px] text-muted">No sections match. Try another word.</li>}
      </ol>
    </>
  );

  return (
    <>
      {/* Phones and tablets */}
      <details className="border border-line bg-surface p-4 lg:hidden">
        <summary className="cursor-pointer font-heading text-[16px] font-semibold text-navy">Contents</summary>
        <div className="mt-4">{list("mobile")}</div>
      </details>
      {/* Desktop */}
      <nav aria-label="Sections" className="hidden lg:block">
        <div className="sticky top-6 border-t-4 border-orange bg-surface p-5">
          <p className="mb-3 font-heading text-[16px] font-semibold text-navy">Contents</p>
          {list("desktop")}
        </div>
      </nav>
    </>
  );
}
