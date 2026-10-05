"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, Rocket, X } from "lucide-react";
import type { NavItem } from "@/lib/site";

type Props = { items: NavItem[]; loginHref: string; trialHref: string };

export function HeaderNav({ items, loginHref, trialHref }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const openedByHover = useRef(false);
  const pathname = usePathname();
  const menuId = useId();

  // Close everything on route change (state reset during render, no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      // If focus is inside a menu that is about to hide, hand it back to the control that opened it.
      const active = document.activeElement as HTMLElement | null;
      const dropdown = active?.closest<HTMLElement>("[data-dropdown]");
      if (dropdown) {
        navRef.current?.querySelector<HTMLButtonElement>(`[data-dropdown-trigger="${dropdown.dataset.dropdown}"]`)?.focus();
      } else if (active?.closest("[data-mobile-panel]")) {
        mobileToggleRef.current?.focus();
      }
      setOpen(null);
      setMobileOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    // While the panel covers the page, keep keyboard and screen-reader focus out of what it hides.
    const behind = document.querySelectorAll<HTMLElement>("#main, body > footer");
    behind.forEach((el) => (el.inert = mobileOpen));
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => (el.inert = false));
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0].split("?")[0]));

  // Sliding underline: grows from the left on hover/focus, stays for the active page.
  const linkCls = (active: boolean) =>
    `relative flex h-[78px] items-center gap-1 px-3.5 text-[16px] font-medium transition-colors duration-[260ms] ease-smooth hover:text-orange-deep after:absolute after:inset-x-3.5 after:bottom-[22px] after:h-0.5 after:origin-left after:bg-orange after:transition-transform after:duration-[320ms] after:ease-smooth focus-visible:after:scale-x-100 ${
      active ? "text-orange-deep after:scale-x-100" : "text-navy-900 after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <>
      {/* Desktop */}
      <div ref={navRef} className="hidden flex-1 items-center justify-between lg:flex">
        <ul className="flex items-center gap-1" role="list">
          {items.map((item) => {
            const hasChildren = !!item.children?.length;
            const expanded = open === item.label;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (hasChildren) {
                    openedByHover.current = true;
                    setOpen(item.label);
                  }
                }}
                onMouseLeave={(e) => {
                  // Keep the menu open while it holds keyboard focus.
                  if (!hasChildren || e.currentTarget.querySelector(":focus-visible")) return;
                  setOpen((o) => (o === item.label ? null : o));
                }}
                onBlur={(e) => {
                  if (hasChildren && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen((o) => (o === item.label ? null : o));
                }}
              >
                {hasChildren ? (
                  <button
                    type="button"
                    className={linkCls(isActive(item.href))}
                    aria-expanded={expanded}
                    data-dropdown-trigger={item.label}
                    aria-controls={`${menuId}-${item.label}`}
                    onClick={() => {
                      if (expanded && openedByHover.current) {
                        openedByHover.current = false;
                        return;
                      }
                      openedByHover.current = false;
                      setOpen(expanded ? null : item.label);
                    }}
                  >
                    {item.label}
                    <ChevronDown className={`size-3.5 transition-transform duration-[320ms] ease-smooth ${expanded ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                ) : (
                  <Link href={item.href} className={linkCls(isActive(item.href))}>
                    {item.label}
                  </Link>
                )}
                {hasChildren && (
                  <div
                    id={`${menuId}-${item.label}`}
                    data-dropdown={item.label}
                    className={`absolute left-0 top-full transition-[opacity,translate,visibility] ease-smooth ${
                      expanded
                        ? "visible translate-y-0 opacity-100 [transition-delay:0ms,0ms,0ms] [transition-duration:320ms,320ms,0ms]"
                        : "pointer-events-none invisible -translate-y-1.5 opacity-0 [transition-delay:0ms,0ms,320ms] [transition-duration:320ms,320ms,0ms]"
                    }`}
                  >
                    <ul className="min-w-[290px] border-t-[3px] border-orange bg-white py-2 shadow-card" role="list">
                      {item.children!.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} className="block border-l-[3px] border-transparent px-5 py-2.5 transition-[background-color,border-color,padding] duration-[260ms] ease-smooth hover:border-orange hover:bg-surface hover:pl-6 focus-visible:border-orange focus-visible:bg-surface" onClick={() => setOpen(null)}>
                            <span className="block text-[15px] font-medium text-navy-900">{child.label}</span>
                            {child.description && <span className="block text-[12.5px] text-muted">{child.description}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a href={loginHref} className="inline-flex h-9 items-center bg-surface-2 px-4 text-[14px] font-medium text-navy-900 transition-[background-color,color,scale] duration-[260ms] ease-smooth hover:bg-navy hover:text-white active:scale-[0.97]" target="_blank" rel="noopener noreferrer">
            <span className="btn-label">Login</span>
          </a>
          <a
            href={trialHref}
            className="inline-flex h-9 items-center gap-2 bg-orange px-4 text-[14px] font-medium text-navy-900 transition-[background-color,color,translate,box-shadow,scale] duration-[260ms] ease-smooth hover:-translate-y-px hover:bg-navy hover:text-white hover:shadow-button active:translate-y-0 active:scale-[0.97]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Rocket className="size-4" aria-hidden />
            <span className="btn-label">Start free trial</span>
          </a>
        </div>
      </div>

      {/* Mobile toggle */}
      <div className="flex items-center gap-3 lg:hidden">
        <a href={trialHref} className="inline-flex h-10 items-center bg-orange px-4 text-[14px] font-medium text-navy-900 transition-[scale,background-color] duration-[260ms] ease-smooth active:scale-[0.97]" target="_blank" rel="noopener noreferrer">
          <span className="btn-label">Start free trial</span>
        </a>
        <button
          ref={mobileToggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded text-navy-900 transition-[background-color,scale] duration-[260ms] ease-smooth active:scale-95 active:bg-surface"
          aria-expanded={mobileOpen}
          aria-controls={`${menuId}-mobile`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id={`${menuId}-mobile`}
        data-mobile-panel
        className={`fixed inset-x-0 bottom-0 top-[114px] z-50 overflow-y-auto bg-white transition-[opacity,translate,visibility] ease-smooth lg:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100 [transition-delay:0ms,0ms,0ms] [transition-duration:400ms,400ms,0ms]"
            : "pointer-events-none invisible -translate-y-2 opacity-0 [transition-delay:0ms,0ms,400ms] [transition-duration:400ms,400ms,0ms]"
        }`}
      >
        <nav aria-label="Mobile" className="px-4 py-4">
          <ul role="list" className="divide-y divide-line">
            {items.map((item) => {
              const hasChildren = !!item.children?.length;
              const expanded = mobileExpanded === item.label;
              return (
                <li key={item.label}>
                  <div className="flex items-center">
                    <Link href={item.href} className="flex h-12 flex-1 items-center text-[17px] font-medium text-navy-900 transition-colors duration-[260ms] active:text-orange-deep" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        className="inline-flex size-12 items-center justify-center text-navy-900 transition-[background-color] duration-[260ms] active:bg-surface"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      >
                        <ChevronDown className={`size-5 transition-transform duration-[400ms] ease-smooth ${expanded ? "rotate-180" : ""}`} aria-hidden />
                      </button>
                    )}
                  </div>
                  {hasChildren && (
                    <div
                      inert={!expanded}
                      className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-smooth ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <ul role="list" className="mb-3 space-y-1 border-l-2 border-orange pl-3">
                          {item.children!.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block px-2 py-2.5 text-[15px] text-navy-900 transition-colors duration-[260ms] active:bg-surface-2 hover:bg-surface"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a href={trialHref} className="inline-flex h-12 items-center justify-center bg-orange text-[15px] font-medium text-navy-900 transition-[scale,background-color] duration-[260ms] ease-smooth active:scale-[0.98]" target="_blank" rel="noopener noreferrer">
              <span className="btn-label">Start free trial</span>
            </a>
            <a href={loginHref} className="inline-flex h-12 items-center justify-center border border-navy text-[15px] font-medium text-navy transition-[scale,background-color] duration-[260ms] ease-smooth active:scale-[0.98] active:bg-surface" target="_blank" rel="noopener noreferrer">
              <span className="btn-label">Portal login</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
