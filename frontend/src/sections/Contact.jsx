import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio.js";
import { GithubIcon, LinkedinIcon } from "../components/Icons.jsx";
import { sendContactMessage } from "../api.js";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const empty = { name: "", email: "", subject: "", message: "" };
const field =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-muted/60 focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/15";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      const res = await sendContactMessage(form);
      setStatus({ state: "success", message: res.message });
      setForm(empty);
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  const rows = [
    { icon: <Mail size={18} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={18} />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
    { icon: <LinkedinIcon />, label: "LinkedIn", value: "samarth-sehdev", href: profile.linkedin, external: true },
    { icon: <GithubIcon />, label: "GitHub", value: "samarth87", href: profile.github, external: true },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section relative overflow-hidden border-t border-line bg-surface/30"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <SectionHeading
          id="contact-title"
          label="Get in touch"
          title="Let's connect"
          subtitle="Open to AI engineering and software roles and internships. Send a message or reach out directly."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <ul className="space-y-3">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="card card-hover group flex items-center gap-4 p-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      {r.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-muted">{r.label}</span>
                      <span className="block truncate text-sm font-semibold">{r.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability badge */}
            <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-sm font-medium text-emerald-500">Available for opportunities</p>
              </div>
              <p className="mt-1.5 pl-5 text-xs text-muted">
                Open to AI engineering roles, internships and freelance projects.
              </p>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8" noValidate={false}>
              {/* Top gradient strip */}
              <div className="-mx-6 -mt-6 mb-2 h-[3px] rounded-t-2xl bg-gradient-to-r from-accent via-accent2 to-transparent sm:-mx-8 sm:-mt-8" />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs font-medium text-muted">Full Name</span>
                  <input
                    className={field}
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-xs font-medium text-muted">Email address</span>
                  <input
                    className={field}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-1.5 block text-xs font-medium text-muted">Subject</span>
                <input
                  className={field}
                  name="subject"
                  value={form.subject}
                  onChange={update}
                  required
                  minLength={3}
                  maxLength={150}
                  placeholder="What's this about?"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
                <textarea
                  className={`${field} min-h-36 resize-y`}
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  minLength={10}
                  maxLength={3000}
                  placeholder="Write your message here…"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={15} />
                  {status.state === "sending" ? "Sending…" : "Send Message"}
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2 text-sm ${
                    status.state === "error" ? "text-red-400" : "text-emerald-500"
                  }`}
                >
                  {status.state === "success" && (
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  )}
                  {status.state === "error" && (
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
