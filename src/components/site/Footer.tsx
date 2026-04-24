import { useTranslation } from "react-i18next";
import { InfermatikLogo } from "@/components/InfermatikLogo";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <InfermatikLogo />
          <p className="text-xs text-muted-foreground">
            {t("footer.tagline", { year })}
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#yetenekler" className="hover:text-foreground">
            {t("footer.capabilities")}
          </a>
          <a href="#sektorler" className="hover:text-foreground">
            {t("footer.sectors")}
          </a>
          <a href="mailto:info@infermatik.com" className="hover:text-foreground">
            {t("footer.contact")}
          </a>
        </div>
      </div>
    </footer>
  );
};
