import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getAnchorId, getAnchorKeyById } from "@/lib/anchors";

const SCROLL_DELAY_MS = 200;

/**
 * When the URL has a hash (e.g. /#problem), scrolls to the matching element id.
 * Defers slightly so in-page hash updates work with React Router, and so mobile
 * sheet close animations can finish.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (pathname !== "/") return;
    const id = hash?.replace(/^#/, "").trim();
    if (!id) return;

    const scrollToId = () => {
      const anchorKey = getAnchorKeyById(id);
      const localizedId = anchorKey ? getAnchorId(i18n.language, anchorKey) : id;
      const el = document.getElementById(localizedId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = window.setTimeout(scrollToId, SCROLL_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash, i18n.language]);
}
