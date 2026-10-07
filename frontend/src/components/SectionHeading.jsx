import Reveal from "./Reveal.jsx";

export default function SectionHeading({ id, title, subtitle, label }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      {label && (
        <span className="section-label">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </span>
      )}
      <h2
        id={id}
        className="text-3xl font-bold sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent2" />
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
