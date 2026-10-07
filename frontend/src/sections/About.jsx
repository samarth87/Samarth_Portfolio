import { about } from "../data/portfolio.js";
import { Icon } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x">
        <SectionHeading
          id="about-title"
          label="Who I am"
          title="About me"
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio text */}
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {/* Quick facts row */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              {[
                { value: "3 months", label: "Professional XP" },
                { value: "642+", label: "LeetCode problems" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-line bg-surface/60 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-bold gradient-text">{value}</p>
                  <p className="mt-1 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <article className="card card-hover h-full p-6 group">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon name={h.icon} size={22} />
                  </div>
                  <h3 className="text-base font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
