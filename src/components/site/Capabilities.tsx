const capabilities = [
  {
    n: "01",
    title: "Şablon Yönetimi",
    body: "Her içerik tipi için bir kez şablon tanımlayın; Infermatik aynı çıkarımı sürekli, tutarlı şekilde uygular.",
  },
  {
    n: "02",
    title: "Otomatik Çıkarım",
    body: "Metin, tablo, el yazısı, ses ve video içeriğinden saniyeler içinde yapılandırılmış veri.",
  },
  {
    n: "03",
    title: "Toplu İşleme",
    body: "Yüzlerce içerik eşzamanlı yüklenir ve işlenir; başarısızları tek tıkla tekrar deneyin.",
  },
  {
    n: "04",
    title: "İnsan Onayı",
    body: "AI yardımcıdır, karar verici değil. Her sonuç ekibinizin onayından geçer, tam denetim kaydıyla.",
  },
  {
    n: "05",
    title: "Sistem Entegrasyonu",
    body: "SAP, CRM ve iş akışı sistemlerine temiz veri akışı; webhook ve API ile anlık bağlantı.",
  },
  {
    n: "06",
    title: "Raporlama",
    body: "Şablon performansı, doğruluk oranları, STP oranı ve ekip üretkenliği tek panelde.",
  },
];

export const Capabilities = () => (
  <section id="yetenekler" className="border-b border-border bg-surface">
    <div className="container-narrow py-20 md:py-28">
      <p className="eyebrow">Yetenekler</p>
      <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
        Bir platform, tam kapsamlı içerik zekâsı.
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Infermatik, içerik türü fark etmeksizin aynı şablon, onay ve raporlama mantığıyla çalışır.
        Bir kez kurun, her departmanda kullanın.
      </p>

      <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-border pt-10 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.n}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {c.n}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
