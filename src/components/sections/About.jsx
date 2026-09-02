import SafeImage from "../SafeImage";
import SectionHeading from "../SectionHeading";
import { usePortfolio } from "../../lib/portfolio-store";

export default function About() {
  const { data } = usePortfolio();
  const about = data.about;

  return (
    <section id="about" className="section-pad bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div
            className="absolute -bottom-5 -left-5 h-32 w-32 rounded-2xl border-2 border-electric/25"
            aria-hidden="true"
          />
          <div className="absolute -top-5 -right-5 hidden h-24 w-24 dot-pattern rounded-xl sm:block" aria-hidden="true" />
          <SafeImage
            src={about.image}
            alt="Developer workspace with laptop, notebook and plant seen from above"
            loading="lazy"
            width={1200}
            height={1200}
            fallbackLabel="About visual"
            className="relative aspect-square w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="relative mx-4 -mt-10 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-electric">const</span> approach ={" "}
              <span className="text-cyan">&quot;clean, responsive, maintainable&quot;</span>
            </p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="About" title={about.heading} description={about.description} />

          <ul className="mt-7 space-y-3">
            {about.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-3 text-sm text-foreground/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-electric/12 text-[0.7rem] font-bold text-royal">
                  ✓
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <dl className="mt-9 grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.id} className="rounded-xl border border-border bg-surface p-4">
                <dt className="font-display text-2xl font-bold text-navy">{stat.value}</dt>
                <dd className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
