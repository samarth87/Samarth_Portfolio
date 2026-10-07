import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Certifications from "./sections/Certifications.jsx";
import Education from "./sections/Education.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable */
  }
  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
