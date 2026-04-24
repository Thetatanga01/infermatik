import { useTranslation } from "react-i18next";

type CapItem = { n: string; title: string; body: string };

export const Capabilities = () => {
  const { t } = useTranslation();
  const items = t("capabilities.items", { returnObjects: true }) as CapItem[];

  return (
    <section id="yetenekler" className="border-b border-border bg-surface">
      <div className="container-narrow py-20 md:py-28">
        <p className="eyebrow">{t("capabilities.eyebrow")}</p>
        <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
          {t("capabilities.title")}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{t("capabilities.intro")}</p>

        <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-border pt-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.n}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{c.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
