const sectors = [
  {
    sector: "Finans",
    title: "Kredi & sözleşme",
    body: "Başvuru belgelerinden müşteri verisi çıkarımı, görüşme kayıtlarından uyum (compliance) kontrolü.",
  },
  {
    sector: "Telekom",
    title: "Bayi & çağrı merkezi",
    body: "Bayi evrakları, stok formları ve çağrı kayıtlarından niyet ve aksiyon çıkarımı.",
  },
  {
    sector: "Sigorta",
    title: "Hasar dosyaları",
    body: "Fotoğraf, video ve eksper raporlarından hasar tespiti; süreci hızlandırır, tutarlılık getirir.",
  },
];

export const Sectors = () => (
  <section id="sektorler" className="border-b border-border bg-background">
    <div className="container-narrow py-20 md:py-28">
      <p className="eyebrow">Sektörler</p>
      <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
        Her sektörde, farklı içerik — aynı platform.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {sectors.map((s) => (
          <div
            key={s.sector}
            className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {s.sector}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
