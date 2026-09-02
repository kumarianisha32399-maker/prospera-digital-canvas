import SectionHeading from "../SectionHeading";
import { usePortfolio } from "../../lib/portfolio-store";

export default function Skills() {
  const { data } = usePortfolio();

  return (
    <section id="skills" className="section-pad bg-surface">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Capabilities Behind Every Interface"
          description="A focused frontend skill set applied across portfolios, dashboards, storefronts and experimental interface concepts."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.skills.map((skill, index) => (
            <li key={skill.id} className="card-surface group p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-navy">{skill.title}</h3>
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
              <span className="mt-4 block h-0.5 w-8 rounded-full bg-electric transition-all duration-300 group-hover:w-16" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
