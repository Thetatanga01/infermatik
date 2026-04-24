import { useEffect, useState } from "react";
import { InfermatikLogo } from "@/components/InfermatikLogo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#sektorler", label: "Sektörler" },
  { href: "#deger", label: "Değer" },
];

export const Header = () => {
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
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" aria-label="Infermatik">
          <InfermatikLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#iletisim">Giriş</a>
          </Button>
          <Button asChild>
            <a href="#iletisim">Demo Talep Et</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
