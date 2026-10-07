// Single source of truth for site content. Everything here comes from the resume.
export const profile = {
  name: "Samarth Sehdev",
  title: "AI Engineer · Data Analyst · Full-Stack AI Developer",
  email: "samarthsehdev502@gmail.com",
  phone: "+91-8727969159",
  linkedin: "https://linkedin.com/in/samarth-sehdev-36039726a/",
  github: "https://github.com/samarth87",
  resume: "/Samarth_Sehdev_Resume.pdf",
  intro:
    "I build AI-powered applications and intelligent automation: LLM integration, RAG and AI agents connected to FastAPI backends, databases and modern React interfaces.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm an AI Engineer with 3 months of hands-on professional experience developing AI-powered applications and intelligent automation solutions.",
    "I work across the stack: Python and FastAPI on the backend, React on the frontend, and LLM integration, RAG, prompt engineering and AI agents in between. I have built end-to-end applications that connect AI models with backend systems, databases and modern web interfaces to solve real-world problems.",
    "I'm passionate about emerging AI technologies and continuous learning, and I'm looking to contribute to a forward-thinking AI/technology team building scalable, user-centric solutions.",
  ],
  highlights: [
    { icon: "brain", title: "AI Engineering", text: "AI-powered applications and intelligent automation solutions." },
    { icon: "layers", title: "Full-Stack Development", text: "Python, FastAPI, REST APIs and React interfaces." },
    { icon: "sparkles", title: "LLM & RAG", text: "LLM integration, RAG and prompt engineering with Groq and OpenAI." },
    { icon: "puzzle", title: "Problem Solving", text: "Active on LeetCode with 642 problems solved." },
  ],
};

export const skillGroups = [
  { icon: "brain", title: "AI & Machine Learning", items: ["AI/ML", "Machine Learning", "Deep Learning", "Generative AI", "LLM", "RAG", "Prompt Engineering", "AI Agents"] },
  { icon: "server", title: "Programming & Backend", items: ["Python", "FastAPI", "REST APIs", "Node.js", "Express.js", "JWT Authentication"] },
  { icon: "globe", title: "Frontend", items: ["React", "Vite", "Tailwind CSS", "EJS"] },
  { icon: "database", title: "Databases & AI Providers", items: ["SQLite", "MongoDB / Mongoose", "Groq", "OpenAI"] },
];

export const experience = [
  {
    company: "KindleBIt Solutions Pvt. Ltd",
    role: "AIML Engineer",
    period: "June 2026 – September 2026",
    summary:
      "Built AI-powered full-stack applications, covering LLM integration, RAG, AI agents and the web interfaces around them.",
    projects: ["AI_Insurance Chatbot", "AI ChatBot", "AI_Task_Agent"],
    tech: ["Python", "FastAPI", "React", "Groq", "OpenAI", "RAG"],
  },
  {
    company: "BLUESTOCK.in",
    role: "Data Analyst",
    period: "May 2026 – July 2026",
    summary: "Data Analyst role.",
    projects: [],
    tech: [],
  },
];

export const projects = [
  {
    title: "AI_Insurance Chatbot",
    org: "KindleBit Solutions",
    date: "August 2026",
    description:
      "An AI-powered full-stack insurance platform that works like a digital insurance agent. Customers talk to the AI naturally, get insurance guidance, buy and manage policies, and start claims in the same place.",
    features: ["Conversational insurance guidance", "Customer authentication", "Policy management and purchasing", "AI-assisted claims processing"],
    tech: ["React", "Python", "FastAPI", "Groq LLM", "RAG"],
  },
  {
    title: "AI ChatBot",
    org: "KindleBit Solutions",
    date: "July 2026",
    description:
      "A full-stack AI chatbot (AI Info Generator) that delivers a complete ChatGPT-style experience rather than a simple API chat box.",
    features: ["Persistent chat history", "Multi-provider AI support", "Voice input", "File analysis", "Image generation", "JWT authentication", "Responsive modern UI"],
    tech: ["React 19", "Vite", "Tailwind CSS", "FastAPI", "SQLite", "Groq", "OpenAI"],
  },
  {
    title: "AI_Task_Agent",
    org: "KindleBit Solutions",
    date: "September 2026",
    description:
      "An AI-powered productivity platform that executes business and administrative tasks from plain-English instructions, so users don't have to click through multiple screens.",
    features: ["Natural-language task execution", "Approved backend tools only", "Parameter validation before execution"],
    tech: ["AI Agents", "LLM", "FastAPI", "React"],
    flow: ["User instruction", "AI analysis", "Tool selection", "Parameter validation", "Backend execution", "Result"],
  },
  {
    title: "Everyone Can Write Blog",
    org: "Chitkara University",
    date: "June 2025",
    description:
      "A full-stack blog application where authenticated users create, manage, explore and interact with posts, built as a server-rendered app on the Node.js ecosystem.",
    features: ["User authentication", "Blog creation and management", "Server-rendered dynamic pages"],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
  },
];

export const certifications = [
  { title: "Generative AI for Data Analysts", issuer: "IBM" },
  { title: "Introduction to Data Science and scikit-learn in Python", issuer: "LearnQuest" },
  { title: "AI Workflow: Data Analyst and Hypothesis Testing", issuer: "IBM" },
  { title: "AI for Scientific Research Specialization", issuer: "LearnQuest" },
  { title: "Deep Learning with PyTorch, Keras and TensorFlow", issuer: "IBM" },
  { title: "Generative AI: Prompt Engineering Basics", issuer: "IBM" },
  { title: "Introduction to Artificial Intelligence (AI)", issuer: "IBM" },
  { title: "Generative AI: Introduction and Applications", issuer: "" },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    school: "Chitkara Institute of Engineering and Technology, Patiala",
    period: "August 2022 – August 2026",
  },
  {
    degree: "Senior Secondary Education",
    field: "Central Board of Secondary Education",
    school: "RIMT World School, Manimajra, Chandigarh",
    period: "April 2021 – June 2022",
  },
];

export const additional = {
  leetcode: 642,
  languages: ["English", "Hindi", "Punjabi"],
};
