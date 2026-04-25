export type AnchorKey = "problem" | "capabilities" | "sectors" | "value" | "contact";

const anchors: Record<AnchorKey, string> = {
  problem: "problem",
  capabilities: "funktionen",
  sectors: "branchen",
  value: "nutzen",
  contact: "kontakt",
} as const;

const legacyAnchors: Record<AnchorKey, string[]> = {
  problem: ["problem"],
  capabilities: ["yetenekler", "capabilities"],
  sectors: ["sektorler", "sectors"],
  value: ["deger", "value"],
  contact: ["iletisim", "contact"],
};

export const getAnchorId = (_language: string | undefined, key: AnchorKey) => anchors[key];

export const getAnchorKeyById = (id: string): AnchorKey | undefined => {
  const anchorMatch = Object.entries(anchors).find(([, value]) => value === id);
  if (anchorMatch) return anchorMatch[0] as AnchorKey;

  for (const [key, values] of Object.entries(legacyAnchors)) {
    if (values.includes(id)) return key as AnchorKey;
  }

  return undefined;
};
