export type AnchorKey = "problem" | "capabilities" | "sectors" | "value" | "contact";

const anchors = {
  tr: {
    problem: "problem",
    capabilities: "yetenekler",
    sectors: "sektorler",
    value: "deger",
    contact: "iletisim",
  },
  en: {
    problem: "problem",
    capabilities: "capabilities",
    sectors: "sectors",
    value: "value",
    contact: "contact",
  },
  de: {
    problem: "problem",
    capabilities: "funktionen",
    sectors: "branchen",
    value: "nutzen",
    contact: "kontakt",
  },
} as const;

type SupportedLanguage = keyof typeof anchors;

const normalizeLanguage = (language?: string): SupportedLanguage => {
  const base = language?.split("-")[0];
  if (base === "en" || base === "de" || base === "tr") return base;
  return "tr";
};

export const getAnchorId = (language: string | undefined, key: AnchorKey) => anchors[normalizeLanguage(language)][key];

export const getAnchorKeyById = (id: string): AnchorKey | undefined => {
  for (const languageAnchors of Object.values(anchors)) {
    const match = Object.entries(languageAnchors).find(([, value]) => value === id);
    if (match) return match[0] as AnchorKey;
  }

  return undefined;
};
