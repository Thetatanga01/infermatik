const problems = [
  {
    title: "Manuel veri girişi",
    body: "Binlerce belge, kayıt ve video manuel olarak okunuyor ve elle sisteme giriliyor.",
  },
  {
    title: "Tutarsız doğruluk",
    body: "Yorgunluk, dikkat ve kişi farkları nedeniyle hata oranı yüksek, süreç öngörülemez.",
  },
  {
    title: "Ölçeklenemeyen süreç",
    body: "Hacim artıyor, insan kaynağı sabit. Her yeni belge tipi yeni iş yükü demek.",
  },
  {
    title: "Karanlık içerik",
    body: "Ses kayıtları ve videolar arşivde duruyor; içlerindeki bilgi hiç kullanılmıyor.",
  },
  {
    title: "Denetim eksikliği",
    body: "Hangi karar, hangi içeriğe dayanarak verildi — izlenebilirlik yok.",
  },
  {
    title: "Karmaşık yapılar",
    body: "El yazısı, mühür, tablolar, çok konuşmacılı kayıtlar — mevcut araçlar yetersiz.",
  },
];

const steps = [
  {
    n: "01 · AL",
    title: "İçeriği alın",
    body: "Belge, ses veya video — tekli ya da toplu. Sürükle-bırak, API, e-posta veya sistem entegrasyonu ile.",
  },
  {
    n: "02 · ANLA",
    title: "AI anlamlandırsın",
    body: "Metin çıkarılır, transkripte edilir, özetlenir. Yapı, niyet ve önemli veriler otomatik tanınır.",
  },
  {
    n: "03 · KARAR",
    title: "Sürece aktarın",
    body: "Ekipleriniz inceler, onaylar; veri ERP, CRM veya iş akışına temiz şekilde akar.",
  },
];

export const Problem = () => (
  <section id="problem" className="border-b border-border bg-background">
    <div className="container-narrow py-20 md:py-28">
      <p className="eyebrow">Problem & Çözüm</p>
      <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
        Kurumsal içerik, kurumsal yük hâline geldi.
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Sözleşmeler, faturalar, müşteri görüşmeleri, saha videoları — her gün üretilen içerik
        büyüyor. Ama içindeki değerli veri hâlâ insan gücüyle çıkarılıyor. Bu yavaş, pahalı ve
        ölçeklenemez.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-xl border border-border bg-surface p-6"
          >
            <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r bg-primary" />
            <h3 className="pl-3 text-[15px] font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 pl-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-ink p-8 md:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary brightness-150">
          Infermatik Yaklaşımı
        </p>
        <h3 className="mt-3 text-[26px] font-bold tracking-tight text-ink-foreground md:text-[34px]">
          Al. Anla. <span className="text-primary brightness-150">Karara bağla.</span>
        </h3>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl border border-border p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {s.n}
            </p>
            <h4 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
