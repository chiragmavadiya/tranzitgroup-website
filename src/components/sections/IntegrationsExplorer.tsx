"use client";

import { useMemo, useState } from "react";
import { Search, Link2, Clock } from "lucide-react";
import { BrandBadge } from "@/components/illustrations/BrandBadge";
import { categoryLabels, statusLabels, type Integration, type IntegrationCategory, type IntegrationStatus } from "@/content/integrations";

const categories: IntegrationCategory[] = ["courier", "ecommerce", "marketplace"];
const statuses: IntegrationStatus[] = ["available", "coming-soon"];

export function IntegrationsExplorer({ items }: { items: Integration[] }) {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState<IntegrationCategory[]>([]);
  const [stats, setStats] = useState<IntegrationStatus[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (i) =>
        (!q || i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q) || categoryLabels[i.category].toLowerCase().includes(q)) &&
        (cats.length === 0 || cats.includes(i.category)) &&
        (stats.length === 0 || stats.includes(i.status)),
    );
  }, [items, query, cats, stats]);

  function toggle<T>(list: T[], v: T, set: (l: T[]) => void) {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  }

  return (
    <div>
      <form
        role="search"
        className="mx-auto mb-10 flex max-w-[760px] items-center gap-2 border border-line bg-white p-1.5 pl-5 shadow-card transition-[border-color,box-shadow] duration-[260ms] ease-smooth focus-within:border-navy focus-within:shadow-[0_0_0_3px_rgba(233,147,34,0.25)]"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="integration-search" className="sr-only">
          Search integrations
        </label>
        <input
          id="integration-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search couriers, platforms or category"
          className="h-10 flex-1 bg-transparent text-[15px] text-navy-900 outline-none placeholder:text-muted"
        />
        <button type="submit" className="inline-flex h-10 items-center gap-2 bg-orange px-5 text-[14px] font-bold text-navy-900 transition-[color,background-color,box-shadow,translate,scale] duration-[260ms] ease-smooth hover:-translate-y-px hover:bg-navy hover:text-white hover:shadow-button active:translate-y-0 active:scale-[0.98]">
          <span className="btn-label">Search</span> <Search className="size-3.5" aria-hidden />
        </button>
      </form>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside aria-label="Filters" className="text-[14px] text-navy-900">
          <fieldset className="mb-6">
            <legend className="mb-3 font-heading text-[17px] font-semibold text-navy">Integrations</legend>
            {categories.map((c) => (
              <label key={c} className="mb-2 flex cursor-pointer items-center gap-2.5">
                <input type="checkbox" className="size-4 accent-navy" checked={cats.includes(c)} onChange={() => toggle(cats, c, setCats)} />
                {categoryLabels[c]}
              </label>
            ))}
          </fieldset>
          <fieldset className="mb-6">
            <legend className="mb-3 font-heading text-[17px] font-semibold text-navy">Status</legend>
            {statuses.map((s) => (
              <label key={s} className="mb-2 flex cursor-pointer items-center gap-2.5">
                <input type="checkbox" className="size-4 accent-navy" checked={stats.includes(s)} onChange={() => toggle(stats, s, setStats)} />
                {s === "available" ? "Available now" : "Coming soon"}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-heading text-[17px] font-semibold text-navy">Countries</legend>
            <label className="flex items-center gap-2.5">
              <input type="checkbox" className="size-4 accent-navy" checked readOnly aria-label="Australia" />
              Australia
            </label>
          </fieldset>
        </aside>

        <div>
          <p className="mb-4 text-[13px] text-muted" aria-live="polite">
            Showing {filtered.length} of {items.length} integrations
          </p>
          {filtered.length === 0 ? (
            <p className="rounded border border-line bg-white p-8 text-center text-[15px] text-ink">
              No integrations match that search. Try a courier or platform name.
            </p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
              {filtered.map((i) => (
                <li key={i.slug} id={i.slug} className="flex flex-col border-b-8 border-orange bg-white p-7 shadow-card">
                  <div className="mb-6 flex h-12 items-center justify-center">
                    <BrandBadge integration={i} size="lg" />
                  </div>
                  <h3 className="mb-2 text-[20px]">{i.name}</h3>
                  <p className="mb-5 flex-1 text-[14.5px] leading-relaxed text-muted">{i.description}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 text-[11px] font-bold ${
                        i.status === "available" ? "bg-surface text-navy" : "bg-sand text-muted"
                      }`}
                    >
                      {i.status === "available" ? <Link2 className="size-3" aria-hidden /> : <Clock className="size-3" aria-hidden />}
                      {statusLabels[i.status]}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">{categoryLabels[i.category]}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div id="couriers" className="sr-only" />
          <div id="platforms" className="sr-only" />
        </div>
      </div>
    </div>
  );
}
