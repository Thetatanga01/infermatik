import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { type AnchorKey, getAnchorId } from "@/lib/anchors";
import { Menu } from "lucide-react";
import { InfermatikLogo } from "@/components/InfermatikLogo";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const linkDefs = [
  { anchor: "problem", k: "nav.problem" },
  { anchor: "capabilities", k: "nav.capabilities" },
  { anchor: "sectors", k: "nav.sectors" },
  { anchor: "value", k: "nav.value" },
] as const;

const navLinkClass =
  "rounded-md px-3 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-muted";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="container-narrow flex h-16 items-center gap-2 md:gap-3">
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 shrink-0"
                aria-label={t("a11y.openMainMenu")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[min(20rem,88vw)] p-0 sm:max-w-sm">
              <SheetHeader className="space-y-1 border-b border-border p-4 text-left">
                <SheetTitle className="text-left">{t("nav.mainMenu")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-2" aria-label={t("nav.mainMenu")}>
                {linkDefs.map((l) => {
                  const hash = getAnchorId(i18n.language, l.anchor as AnchorKey);

                  return (
                    <button
                      key={l.anchor}
                      type="button"
                      className={cn(navLinkClass, "w-full")}
                      onClick={() => {
                        setMenuOpen(false);
                        navigate({ pathname: "/", hash });
                      }}
                    >
                      {t(l.k)}
                    </button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link to="/" className="shrink-0" aria-label={t("a11y.logo")}>
          <InfermatikLogo />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 justify-center gap-6 md:flex lg:gap-8"
          aria-label={t("nav.mainMenu")}
        >
          {linkDefs.map((l) => {
            const hash = getAnchorId(i18n.language, l.anchor as AnchorKey);

            return (
              <Link
                key={l.anchor}
                to={{ pathname: "/", hash }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(l.k)}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <Button asChild variant="ghost" className="inline-flex">
            <Link to="/login">{t("nav.login")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
