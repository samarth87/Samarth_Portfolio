import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/portfolio.js";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container-x">
        <SectionHeading id="experience-title" label="Career" title="Experience" />

        <ol className="relative ml-4 sm:ml-6">
          {/* Gradient timeline line */}
          <div
            aria-hidden="true"
            className="timeline-line absolute left-0 top-0 h-full w-[2px] rounded-full"
          />

          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-12 pl-10 last:pb-0 sm:pl-12">
              {/* Timeline dot */}
              <span className="absolute -left-[19px] top-0 grid h-9 w-9 place-items-center rounded-full border-2 border-accent/50 bg-bg text-accent shadow-md shadow-accent/10">
                <Briefcase size={15} aria-hidden="true" />
              </span>

              <Reveal delay={i * 100}>
                <article className="card card-hover overflow-hidden">
                  {/* Card top gradient strip */}
                  <div className="h-[3px] bg-gradient-to-r from-accent via-accent2 to-transparent" />

                  <div className="p-6 sm:p-7">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="mt-0.5 font-medium text-accent">{job.company}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-bg/60 px-3 py-1 text-xs text-muted">
                        <MapPin size={11} />
                        {job.period}
                      </span>
                    </div>

                    {job.projects.length > 0 && (
                      <>
                        <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                        <div className="mt-5 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                            Projects delivered
                          </p>
                          <ul className="flex flex-wrap gap-2">
                            {job.projects.map((p) => (
                              <li key={p} className="chip-accent">{p}</li>
                            ))}
                          </ul>
                        </div>

                        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                          {job.tech.map((t) => (
                            <li
                              key={t}
                              className="rounded-md bg-surface border border-line px-2.5 py-1 text-xs text-muted"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
