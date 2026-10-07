import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data/portfolio.js";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="edu-title"
      className="section border-y border-line bg-surface/30"
    >
      <div className="container-x">
        <SectionHeading id="edu-title" label="Academic" title="Education" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 110}>
              <article className="card card-hover group h-full overflow-hidden">
                {/* Top gradient strip */}
                <div className="h-[3px] bg-gradient-to-r from-accent2 via-accent to-transparent" />

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent2/20 to-accent/10 text-accent2 transition-transform duration-300 group-hover:scale-110">
                      <GraduationCap size={22} aria-hidden="true" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/60 px-3 py-1 text-[11px] text-muted">
                      <Calendar size={10} />
                      {e.period}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold">{e.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{e.field}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{e.school}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
