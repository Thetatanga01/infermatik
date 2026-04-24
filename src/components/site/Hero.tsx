import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  const tags = t("hero.tags", { returnObjects: true }) as string[];

  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, hsl(var(--primary) / 0.08), transparent 60%), radial-gradient(700px 400px at 0% 100%, hsl(var(--primary) / 0.05), transparent 60%)",
        }}
      />
      <div className="container-narrow relative py-20 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {t("hero.badge")}
        </span>

        <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.05] tracking-tight text-foreground md:text-[68px]">
          {t("hero.headline1")}
          <br />
          <span className="text-primary">{t("hero.headline2")}</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{t("hero.sub")}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#iletisim" className="group">
              {t("hero.ctaDemo")}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#yetenekler">{t("hero.ctaFeatures")}</a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
