const before = [
  "Saatler süren manuel veri girişi",
  "Kişiye bağlı, tutarsız doğruluk",
  "Ses ve video kayıtları arşivde ölü bilgi",
  "Her yeni belge tipi yeni iş yükü",
  "Denetim izi dağınık veya eksik",
];

const after = [
  "Saniyeler içinde yapılandırılmış veri",
  "AI destekli, denetlenebilir doğruluk",
  "Her içerik türünden anlamlı çıkarım",
  "Şablon tanımla, sınırsız ölçekle",
  "Uçtan uca tam denetim kaydı",
];

const pillars = [
  {
    title: "Kurumsal güvenlik",
    body: "Rol bazlı erişim, birim izolasyonu, merkezî kimlik doğrulama.",
  },
  {
    title: "Esnek kurulum",
    body: "Bulut veya kurum içi (on-prem) kurulum, veriniz sizin kontrolünüzde.",
  },
  {
    title: "Tam denetim izi",
    body: "Her işlem, her değişiklik — sürüm ve geri dönüş desteğiyle kaydedilir.",
  },
];

export const Value = () => (
  <section id="deger" className="border-b border-border bg-surface">
    <div className="container-narrow py-20 md:py-28">
      <p className="eyebrow">Sağladığı Değer</p>
      <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
        Öncesi ve sonrası. Fark ölçülebilir.
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Infermatik'in değeri yalnızca hız değil; izlenebilir, denetlenebilir ve güvenle ölçeklenebilir
        bir süreçtir.
      </p>

      <div className="mt-12 grid overflow-hidden rounded-2xl border border-border md:grid-cols-2">
        <div className="bg-background p-8 md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Öncesi
          </p>
          <ul className="mt-6 divide-y divide-border">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 py-3.5 text-sm text-foreground">
                <span className="mt-2 h-px w-3 flex-shrink-0 bg-muted-foreground/50" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ink p-8 text-ink-foreground md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary brightness-150">
            Infermatik ile
          </p>
          <ul className="mt-6 divide-y divide-white/10">
            {after.map((a) => (
              <li key={a} className="flex items-start gap-3 py-3.5 text-sm">
                <span className="mt-2 h-px w-3 flex-shrink-0 bg-primary brightness-150" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title}>
            <h4 className="text-base font-semibold text-foreground">{p.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
