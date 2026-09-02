import { Link } from "@tanstack/react-router";
import SafeImage from "../SafeImage";
import { usePortfolio } from "../../lib/portfolio-store";

export default function Hero() {
  const { data } = usePortfolio();
  const hero = data.hero;

  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1.5 text-[0.7rem] font-bold tracking-[0.16em] text-cyan uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
            {hero.heading}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-navy-foreground/70 sm:text-base">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-base btn-primary">
              {hero.primaryButton}
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/contact" className="btn-base btn-outline-light">
              {hero.secondaryButton}
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl border border-navy-foreground/10 bg-navy-soft/70 p-4 transition-colors hover:border-cyan/40"
              >
                <dt className="font-display text-sm font-semibold text-navy-foreground">{stat.label}</dt>
                <dd className="mt-1 text-xs text-navy-foreground/60">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl border border-navy-foreground/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-navy-foreground/15 bg-navy-soft shadow-2xl shadow-navy/50">
            <div className="flex items-center gap-1.5 border-b border-navy-foreground/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-electric/70" aria-hidden="true" />
              <span className="ml-3 font-mono text-[0.7rem] text-navy-foreground/45">portfolio / hero-banner</span>
            </div>
            <SafeImage
              src={hero.image}
              alt="Abstract visual of a modern web development environment with layered interface panels"
              width={1600}
              height={1008}
              fallbackLabel="Hero banner image"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[0.7rem] text-navy-foreground/50">
            <span className="rounded-md border border-navy-foreground/15 px-2 py-1">React</span>
            <span className="rounded-md border border-navy-foreground/15 px-2 py-1">Vite</span>
            <span className="rounded-md border border-navy-foreground/15 px-2 py-1">Tailwind CSS</span>
            <span className="rounded-md border border-navy-foreground/15 px-2 py-1">Accessible UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
