import { useTranslation } from "react-i18next";

type SectorItem = { sector: string; title: string; body: string };

export const Sectors = () => {
  const { t } = useTranslation();
  const items = t("sectors.items", { returnObjects: true }) as SectorItem[];

  return (
    <section id="sektorler" className="border-b border-border bg-background">
      <div className="container-narrow py-20 md:py-28">
        <p className="eyebrow">{t("sectors.eyebrow")}</p>
        <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
          {t("sectors.title")}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.sector + s.title}
              className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{s.sector}</p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
