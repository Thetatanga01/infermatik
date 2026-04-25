import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "@/locales/de.json";
import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import tr from "@/locales/tr.json";

const STORAGE_KEY = "infermatik.lang";

function getStoredLang(): "tr" | "en" | "de" | "nl" {
  if (typeof localStorage === "undefined") return "tr";
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "en" || v === "de" || v === "nl" || v === "tr") return v;
  return "tr";
}

const lng = getStoredLang();

/** Resolve only after i18n has loaded resources; app should render after this. */
export const i18nReady = i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
    de: { translation: de },
    nl: { translation: nl },
  },
  lng,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

i18n.on("languageChanged", (l) => {
  localStorage.setItem(STORAGE_KEY, l);
  if (typeof document !== "undefined") {
    document.documentElement.lang = l;
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = lng;
}

export default i18n;
