import { ChevronRight, ExternalLink } from "lucide-react";
import { projects, profile } from "../data/portfolio.js";
import { GithubIcon } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function Flow({ steps }) {
  return (
    <div className="mt-5 rounded-xl border border-line bg-bg/70 p-4">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted/70">
        Request pipeline
      </p>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 text-xs">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1">
            <span className="rounded-md bg-accent/12 px-2.5 py-1 font-medium text-accent">
              {s}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight size={11} className="text-muted/60" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section relative overflow-hidden border-y border-line bg-surface/30"
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[80px]"
      />

      <div className="container-x">
        <SectionHeading
          id="projects-title"
          label="Portfolio"
          title="Projects"
          subtitle="AI products built at KindleBit Solutions, plus a full-stack project from university."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                {/* Top accent strip */}
                <div className="h-[3px] bg-gradient-to-r from-accent via-accent2 to-transparent" />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">{p.org}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-line bg-bg/60 px-2.5 py-1 text-[11px] text-muted">
                      {p.date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {p.description}
                  </p>

                  {p.flow && <Flow steps={p.flow} />}

                  <ul className="mt-5 space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips pushed to bottom */}
                  <ul
                    className="mt-auto flex flex-wrap gap-1.5 pt-6"
                    aria-label={`${p.title} technologies`}
                  >
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line bg-bg/60 px-2.5 py-1 text-[11px] font-medium text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* GitHub link */}
        <Reveal className="mt-10">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon size={16} />
            More on GitHub
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
