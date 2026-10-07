import { skillGroups } from "../data/portfolio.js";
import { Icon } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section relative overflow-hidden border-y border-line bg-surface/30"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent2/10 blur-[100px]"
      />

      <div className="container-x">
        <SectionHeading
          id="skills-title"
          label="Expertise"
          title="Technical skills"
          subtitle="The tools and technologies I've used in my projects and coursework."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <article className="card card-hover group h-full p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={g.icon} size={20} />
                  </div>
                  <h3 className="text-base font-semibold">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-line bg-bg/70 px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:border-accent hover:bg-accent/8 hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
