import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../data/portfolio.js";

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-surface/85 shadow-xl shadow-ink/5 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className={`flex items-center justify-between px-4 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight"
            onClick={close}
            aria-label="Samarth Sehdev, home"
          >
            <span className="gradient-text">Samarth</span>
            <span className="text-muted">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                    active === l.id
                      ? "text-accent"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 rounded-full bg-accent/10" />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-muted transition hover:border-accent hover:text-accent"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="#contact" className="btn btn-primary hidden !py-2 !px-4 text-xs sm:inline-flex">
              Let's Connect
            </a>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-muted lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`mobile-menu lg:hidden ${open ? "open" : ""}`}>
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1 px-3 pb-4 pt-1">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active === l.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  className="btn btn-primary w-full"
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
