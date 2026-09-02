import SectionHeading from "../SectionHeading";
import { usePortfolio } from "../../lib/portfolio-store";

export default function Technologies() {
  const { data } = usePortfolio();

  return (
    <section id="technologies" className="section-pad bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Technologies"
          title="The Stack Powering This Portfolio"
          description="Deliberately lightweight: no heavy dependencies, no backend, no database — just a modern frontend toolchain."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.technologies.map((tech) => (
            <li
              key={tech.id}
              className="rounded-xl border border-navy-foreground/12 bg-navy-soft/60 p-5 transition-colors hover:border-cyan/45"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-base font-semibold">{tech.name}</h3>
                <span className="rounded-full border border-cyan/35 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-cyan uppercase">
                  {tech.category}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-foreground/60">{tech.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
