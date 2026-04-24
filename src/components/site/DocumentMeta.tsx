import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/** Syncs document title and meta description with the active locale. */
export const DocumentMeta = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", t("meta.description"));
  }, [i18n.language, t]);

  return null;
};
