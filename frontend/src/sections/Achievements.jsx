import { Languages, Trophy, Code2 } from "lucide-react";
import { additional } from "../data/portfolio.js";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="ach-title" className="section">
      <div className="container-x">
        <SectionHeading id="ach-title" label="More about me" title="Additional information" />
        <div className="grid gap-5 md:grid-cols-5">
          {/* LeetCode card */}
          <Reveal className="md:col-span-3">
            <article className="card relative h-full overflow-hidden p-8 sm:p-10">
              {/* Orb glow */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent2/15 blur-3xl"
              />

              {/* Top gradient strip */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-accent2 to-transparent" />

              <div className="relative">
                <div className="flex items-center gap-3 text-muted">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Code2 size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-ink">LeetCode problems solved</h3>
                </div>

                <p className="relative mt-6 font-display text-[5.5rem] font-bold leading-none gradient-text sm:text-[7rem]">
                  {additional.leetcode}
                  <span className="text-4xl text-accent/60">+</span>
                </p>

                <p className="mt-4 text-sm text-muted">
                  Active problem solving across algorithms, data structures and system design.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Languages card */}
          <Reveal delay={110} className="md:col-span-2">
            <article className="card card-hover h-full overflow-hidden p-8 sm:p-9">
              {/* Top gradient strip */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent2 via-accent to-transparent" />

              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent2/10 text-accent2">
                  <Languages size={18} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold">Languages</h3>
              </div>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {additional.languages.map((l) => (
                  <li
                    key={l}
                    className="rounded-xl border border-line bg-bg/70 px-5 py-2.5 text-sm font-medium"
                  >
                    {l}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-muted">
                Comfortable working in multilingual professional environments.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
