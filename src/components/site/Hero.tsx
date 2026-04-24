import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tags = ["Belge Anlama", "Ses & Video Çıkarımı", "Karar Otomasyonu"];

export const Hero = () => (
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
        Kurumsal İçerik Anlama Platformu
      </span>

      <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.05] tracking-tight text-foreground md:text-[68px]">
        İçerik anlaşılır hâle gelir,
        <br />
        <span className="text-primary">kararlar hızlanır.</span>
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Belgeleriniz, ses kayıtlarınız ve videolarınız; yapay zekâ ile okunur, anlamlandırılır
        ve karar süreçlerinize doğrudan veri olarak akar.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <a href="#iletisim" className="group">
            Demo Planlayın
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#yetenekler">Yetenekleri Gör</a>
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);
