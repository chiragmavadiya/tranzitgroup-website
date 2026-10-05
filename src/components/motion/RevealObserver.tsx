"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal],[data-reveal-group]";

/**
 * One shared IntersectionObserver for every scroll reveal on the page.
 *
 * - Nothing is touched before React hydrates (no hydration mismatches). On first load,
 *   content already on screen is marked revealed with no entrance animation, and only then
 *   is the `motion` class enabled, so on-screen content never disappears or flashes.
 * - On client-side navigation (motion already enabled) on-screen content plays its entrance.
 * - Elements are revealed once per page visit and stay visible afterwards.
 * - Reveals trigger slightly before an element enters the viewport.
 * - The observed area extends without limit above the viewport, so anything scrolled or
 *   jumped past is revealed at once: scrolling back up never shows empty space.
 * - When an element reveals, every reveal earlier in the document is revealed too.
 * - Keyboard focus inside a hidden element reveals it immediately.
 * - Reduced motion: motion is never enabled, so nothing is hidden.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motionReady = "1";
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const firstLoad = !root.classList.contains("motion");
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter((el) => !el.classList.contains("is-in"));

    if (firstLoad) {
      // Anything visible (or already scrolled past) stays exactly as painted.
      const h = window.innerHeight;
      for (const el of els) {
        if (el.getBoundingClientRect().top < h) el.classList.add("is-in", "is-static");
      }
      root.classList.add("motion");
    }

    const pending = els.filter((el) => !el.classList.contains("is-in"));
    if (!pending.length) return;
    if (!("IntersectionObserver" in window)) {
      pending.forEach((el) => el.classList.add("is-in"));
      return;
    }

    let revealedUpTo = -1;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) revealThrough(pending.indexOf(entry.target as HTMLElement));
        }
      },
      { rootMargin: "100000px 0px 12% 0px", threshold: 0 },
    );

    function revealThrough(index: number) {
      if (index < 0) return;
      for (let i = revealedUpTo + 1; i <= index; i++) {
        pending[i].classList.add("is-in");
        io.unobserve(pending[i]);
      }
      if (index <= revealedUpTo) {
        pending[index].classList.add("is-in");
        io.unobserve(pending[index]);
      }
      revealedUpTo = Math.max(revealedUpTo, index);
    }

    function onFocusIn(e: FocusEvent) {
      const target = (e.target as Element | null)?.closest<HTMLElement>(SELECTOR);
      if (target && !target.classList.contains("is-in")) revealThrough(pending.indexOf(target));
    }

    pending.forEach((el) => io.observe(el));
    document.addEventListener("focusin", onFocusIn);

    return () => {
      io.disconnect();
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [pathname]);

  return null;
}
