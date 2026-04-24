import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <section id="iletisim" className="bg-background">
      <div className="container-narrow py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl bg-ink p-10 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(700px 350px at 100% 0%, hsl(var(--primary) / 0.28), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary brightness-150">
              {t("cta.eyebrow")}
            </p>
            <h3 className="mt-4 max-w-2xl text-[28px] font-bold leading-tight tracking-tight text-ink-foreground md:text-[40px]">
              {t("cta.title")}
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-foreground/70 md:text-base">{t("cta.body")}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:info@infermatik.com" className="group">
                  {t("cta.button")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <a
                href="mailto:info@infermatik.com"
                className="text-sm font-medium text-ink-foreground/80 underline-offset-4 hover:text-ink-foreground hover:underline"
              >
                info@infermatik.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
