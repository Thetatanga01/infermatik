import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StpTooltipText } from "@/components/site/StpTooltipText";
import { cn } from "@/lib/utils";
import { getAnchorId } from "@/lib/anchors";

type SectorItem = {
  id: string;
  sector: string;
  title: string;
  body: string;
  problem: string;
  useCases: string[];
  decision: string;
  metrics: string[];
};

export const Sectors = () => {
  const { t, i18n } = useTranslation();
  const items = t("sectors.items", { returnObjects: true }) as SectorItem[];
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const selected = items.find((s) => s.id === selectedId) ?? items[0];

  return (
    <section id={getAnchorId(i18n.language, "sectors")} className="border-b border-border bg-background">
      <div className="container-narrow py-20 md:py-28">
        <p className="eyebrow">{t("sectors.eyebrow")}</p>
        <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
          {t("sectors.title")}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={selected?.id === s.id}
              aria-label={`${t("sectors.selectSector")}: ${s.sector}`}
              onClick={() => setSelectedId(s.id)}
              className={cn(
                "rounded-xl border bg-surface p-6 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                selected?.id === s.id ? "border-primary shadow-sm" : "border-border",
              )}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{s.sector}</p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </button>
          ))}
        </div>

        {selected ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-border bg-ink p-8 text-ink-foreground lg:border-b-0 lg:border-r">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary brightness-150">
                  {selected.sector}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{selected.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-foreground/75">{selected.problem}</p>
              </div>

              <div className="grid gap-8 p-8 md:grid-cols-3">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t("sectors.detailUseCases")}</h4>
                  <ul className="mt-4 space-y-3">
                    {selected.useCases.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-primary" />
                        <span>
                          <StpTooltipText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t("sectors.detailDecision")}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selected.decision}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t("sectors.detailMetrics")}</h4>
                  <ul className="mt-4 space-y-3">
                    {selected.metrics.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-primary" />
                        <span>
                          <StpTooltipText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
