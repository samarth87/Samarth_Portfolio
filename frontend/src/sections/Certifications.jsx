import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio.js";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const issuerColors = {
  IBM: "bg-blue-500/10 text-blue-400 border-blue-400/20",
  LearnQuest: "bg-purple-500/10 text-purple-400 border-purple-400/20",
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="cert-title"
      className="section"
    >
      <div className="container-x">
        <SectionHeading
          id="cert-title"
          label="Credentials"
          title="Certifications"
          subtitle="Courses and specializations in AI, machine learning and data science."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <article className="card card-hover group flex h-full flex-col gap-4 p-5">
                  {/* Icon + issuer badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Award size={20} aria-hidden="true" />
                    </div>
                    {c.issuer && (
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                          issuerColors[c.issuer] ??
                          "bg-accent/10 text-accent border-accent/20"
                        }`}
                      >
                        {c.issuer}
                      </span>
                    )}
                  </div>

                  <h3 className="flex-1 text-sm font-semibold leading-snug">{c.title}</h3>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
