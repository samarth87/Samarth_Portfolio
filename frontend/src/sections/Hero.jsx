import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio.js";
import { GithubIcon, LinkedinIcon } from "../components/Icons.jsx";
import photo from "../assets/samarth.jpg";

export default function Hero() {
  const social =
    "grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20";

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="orb absolute -top-56 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/20 via-accent2/10 to-transparent blur-[140px]" />
        <div className="orb-2 absolute -bottom-40 right-0 h-[400px] w-[500px] rounded-full bg-accent2/10 blur-[120px]" />

        {/* Dot grid */}
        <div
          className="dot-grid absolute inset-0 opacity-[0.45]"
          style={{
            maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 72%)",
          }}
        />
      </div>

      <div className="container-x grid items-center gap-14 pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:pb-32">
        {/* Text content */}
        <div className="order-1">
          {/* Status badge */}
          <div className="section-label w-fit">
            <Sparkles size={12} />
            AI Engineer · Python Developer · Full-Stack AI Developer
          </div>

          <h1
            id="hero-title"
            className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-[4.5rem]"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-4 font-display text-xl font-medium text-ink/80 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary shadow-lg shadow-accent/25">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resume}
              download="Samarth_Sehdev_Resume.pdf"
              className="btn btn-ghost"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="mt-9 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className={social}
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className={social}
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className={social}
            >
              <Mail size={18} />
            </a>
            <span className="ml-3 h-px w-10 bg-line" />
            <span className="text-xs text-muted">Let's build something</span>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-2 mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:ml-auto lg:mr-0">
          <div className="portrait-float relative">
            {/* Glow ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-accent/35 via-accent2/20 to-transparent blur-3xl"
            />
            {/* Gradient border frame */}
            <div className="relative rounded-[2.2rem] bg-gradient-to-br from-accent via-accent2/70 to-line p-[2.5px] shadow-2xl shadow-accent/20">
              <div className="overflow-hidden rounded-[calc(2.2rem-2.5px)] bg-surface">
                <img
                  src={photo}
                  alt="Portrait of Samarth Sehdev, wearing glasses and a white shirt"
                  width="640"
                  height="800"
                  className="aspect-[4/5] w-full object-cover object-[50%_20%]"
                  fetchpriority="high"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-line bg-surface/90 px-4 py-2.5 backdrop-blur-sm shadow-lg">
              <p className="text-xs text-muted">LeetCode</p>
              <p className="font-display text-xl font-bold gradient-text">642+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-line to-transparent" />
      </div>
    </section>
  );
}
