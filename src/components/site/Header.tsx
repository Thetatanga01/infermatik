import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { InfermatikLogo } from "@/components/InfermatikLogo";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { Button } from "@/components/ui/button";

const linkDefs = [
  { hash: "problem", k: "nav.problem" },
  { hash: "yetenekler", k: "nav.capabilities" },
  { hash: "sektorler", k: "nav.sectors" },
  { hash: "deger", k: "nav.value" },
] as const;

export const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="container-narrow flex h-16 items-center gap-3">
        <Link to="/" className="shrink-0" aria-label={t("a11y.logo")}>
          <InfermatikLogo />
        </Link>

        <nav className="hidden min-w-0 flex-1 justify-center gap-6 md:flex lg:gap-8">
          {linkDefs.map((l) => (
            <Link
              key={l.hash}
              to={{ pathname: "/", hash: l.hash }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.k)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <Button asChild variant="ghost" className="inline-flex">
            <Link to="/login">{t("nav.login")}</Link>
          </Button>
          <Button asChild>
            <Link to={{ pathname: "/", hash: "iletisim" }}>{t("nav.requestDemo")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
