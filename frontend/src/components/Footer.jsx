import { profile } from "../data/portfolio.js";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";
import { Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/4 to-transparent"
      />

      <div className="container-x relative py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand + credit */}
          <div className="text-center sm:text-left">
            <a href="#home" className="font-display text-base font-bold gradient-text">
              Samarth Sehdev
            </a>
            <p className="mt-1 flex flex-wrap items-center gap-1 text-xs text-muted">
              Built with React, Vite, Tailwind CSS &amp; FastAPI
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                Made with <Heart size={10} className="text-red-400" fill="currentColor" />
              </span>
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <p className="mt-6 border-t border-line pt-6 text-center text-[11px] text-muted/60">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
