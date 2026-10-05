"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/faqs";

/**
 * Transp accordion: navy bars with white text, the open item turns accent with dark text
 * and its answer sits on white beneath it.
 *
 * Panels animate height with a grid-row transition (0fr → 1fr), so expansion is fluid
 * without measuring heights in JS. Closed panels are `inert`, which keeps their content
 * out of the tab order and the accessibility tree.
 */
export function FaqAccordion({ items, defaultOpen = 0 }: { items: Faq[]; columns?: 1 | 2; defaultOpen?: number | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.q}>
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className={`flex w-full items-center justify-between gap-4 px-6 py-[18px] text-left font-heading text-[17px] font-semibold leading-snug transition-colors duration-[260ms] ease-smooth active:brightness-95 ${
                  open ? "bg-orange text-navy-900" : "bg-navy text-white hover:bg-navy-700"
                }`}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`size-4 shrink-0 transition-transform duration-[400ms] ease-smooth ${open ? "rotate-180 text-navy-900" : "text-orange"}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-smooth ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 py-5 text-[15px] leading-relaxed text-navy-900">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
