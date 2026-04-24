import { useTranslation } from "react-i18next";

type ProblemItem = { title: string; body: string };
type StepItem = { n: string; title: string; body: string };

export const Problem = () => {
  const { t } = useTranslation();
  const problems = t("problem.problems", { returnObjects: true }) as ProblemItem[];
  const steps = t("problem.steps", { returnObjects: true }) as StepItem[];

  return (
    <section id="problem" className="border-b border-border bg-background">
      <div className="container-narrow py-20 md:py-28">
        <p className="eyebrow">{t("problem.eyebrow")}</p>
        <h2 className="mt-4 max-w-3xl text-[32px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
          {t("problem.title")}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{t("problem.intro")}</p>

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
            {t("problem.approachEyebrow")}
          </p>
          <h3 className="mt-3 text-[26px] font-bold tracking-tight text-ink-foreground md:text-[34px]">
            {t("problem.approachLine1")}{" "}
            <span className="text-primary brightness-150">{t("problem.approachLine2")}</span>
          </h3>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{s.n}</p>
              <h4 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
