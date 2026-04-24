import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

/** Syncs document title and meta description with the active locale. */
export const DocumentMeta = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";

  useEffect(() => {
    const title = isLogin ? t("loginPage.metaTitle") : t("meta.title");
    const description = isLogin ? t("loginPage.metaDescription") : t("meta.description");
    document.title = title;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", description);
  }, [i18n.language, t, isLogin]);

  return null;
};
