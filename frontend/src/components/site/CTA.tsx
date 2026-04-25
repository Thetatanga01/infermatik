import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { DemoRequestDialog } from "@/components/site/DemoRequestDialog";
import { getAnchorId } from "@/lib/anchors";
import { ArrowRight, Download } from "lucide-react";

const brochureByLanguage: Record<string, { href: string; fileName: string }> = {
  tr: { href: "/brochures/infermatik-tr.pdf", fileName: "Infermatik_tr.pdf" },
  en: { href: "/brochures/infermatik-en.pdf", fileName: "Infermatik_Brochure_EN.pdf" },
};

const getBrochure = (language: string | undefined) => {
  const baseLanguage = language?.split("-")[0] ?? "";
  return brochureByLanguage[baseLanguage];
};

export const CTA = () => {
  const { t, i18n } = useTranslation();
  const brochure = getBrochure(i18n.language);

  return (
    <section id={getAnchorId(i18n.language, "contact")} className="bg-background">
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
              <DemoRequestDialog>
                <Button type="button" size="lg" variant="secondary" className="group">
                  {t("cta.button")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </DemoRequestDialog>
              {brochure ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
                >
                  <a href={brochure.href} download={brochure.fileName}>
                    {t("cta.brochureButton")}
                    <Download className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              ) : null}
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
