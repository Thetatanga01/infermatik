import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCROLL_DELAY_MS = 200;

/**
 * When the URL has a hash (e.g. /#problem), scrolls to the matching element id.
 * Defers slightly so in-page hash updates work with React Router, and so mobile
 * sheet close animations can finish.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;
    const id = hash?.replace(/^#/, "").trim();
    if (!id) return;

    const scrollToId = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = window.setTimeout(scrollToId, SCROLL_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);
}
