import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";


function GithubMark({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.2c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.16 1.18a10.96 10.96 0 0 1 5.74 0c2.18-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinMark({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.37 3.16a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.47 8.9h3.8v11.65h-3.8V8.9Zm6.15 0h3.64v1.6h.05c.51-.96 1.75-1.98 3.61-1.98 3.86 0 4.57 2.54 4.57 5.84v6.19h-3.8v-5.49c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.59h-3.8V8.9Z" />
    </svg>
  );
}

const NAV_ITEMS = [
  ["home", "Home"],
  ["about", "About"],
  ["expertise", "Expertise"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["credentials", "Credentials"],
  ["contact", "Contact"],
];

const METRICS = [
  { value: "150K+", label: "Monthly enterprise users" },
  { value: "32%", label: "Response accuracy improvement" },
  { value: "41%", label: "Lower average AI latency" },
  { value: "28%", label: "Inference cost reduction" },
];

const EXPERTISE = [
  {
    icon: BrainCircuit,
    title: "Generative AI & Agents",
    description:
      "Production RAG, multi-agent orchestration, prompt and context engineering, tool calling, guardrails, evaluation, and model routing.",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "LangGraph",
      "OpenAI APIs",
      "RAGAS",
      "DeepEval",
      "LoRA / PEFT",
    ],
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    description:
      "Forecasting and predictive systems built with strong experimentation, statistical analysis, feature engineering, and measurable business outcomes.",
    skills: [
      "XGBoost",
      "Transformers",
      "LSTM",
      "PyTorch",
      "Scikit-learn",
      "Bayesian Modeling",
      "A/B Testing",
      "XAI",
    ],
  },
  {
    icon: Database,
    title: "Data & Distributed Systems",
    description:
      "High-volume batch and streaming pipelines, lakehouse architecture, enterprise search, and distributed processing for production AI.",
    skills: [
      "Apache Spark",
      "Kafka",
      "Delta Lake",
      "Databricks",
      "SQL",
      "ETL / ELT",
      "Vector Search",
      "Airflow",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud, MLOps & Platforms",
    description:
      "Cloud-native model services and microservices with containerized deployment, CI/CD, observability, governance, and reliable operations.",
    skills: [
      "AWS",
      "Kubernetes",
      "Docker",
      "MLflow",
      "FastAPI",
      "Spring Boot",
      "Terraform",
      "Unity Catalog",
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Databricks",
    role: "AI/ML Engineer",
    location: "San Francisco, CA",
    period: "Apr 2025 — Present",
    summary:
      "Building production-scale enterprise AI agents, governed RAG platforms, and cloud-native AI services across structured and unstructured data.",
    bullets: [
      "Developed Python-based enterprise AI agents using RAG, LLM orchestration, and vector retrieval, serving more than 150,000 monthly users.",
      "Improved response accuracy by 32% through retrieval tuning, prompt optimization, synthetic data generation, and automated evaluation pipelines.",
      "Reduced inference cost by 28% and average response latency by 41% through model selection, context optimization, caching, and efficient vector search.",
      "Designed multi-agent workflows with LangGraph, OpenAI APIs, MLflow, and Python for research, reasoning, and tool execution scenarios.",
      "Deployed scalable AI microservices with FastAPI, Docker, AWS ECS, Kubernetes, CI/CD, and production observability.",
    ],
    stack: [
      "Python",
      "Databricks",
      "LangGraph",
      "MLflow",
      "Vector Search",
      "Unity Catalog",
      "FastAPI",
      "AWS",
    ],
  },
  {
    company: "Amazon",
    role: "Machine Learning Engineer",
    location: "India",
    period: "Jun 2020 — Jun 2024",
    summary:
      "Developed demand forecasting, inventory optimization, distributed data processing, and cloud-native ML services for large-scale supply-chain operations.",
    bullets: [
      "Built demand forecasting pipelines using XGBoost and Transformer models across millions of sales records, improving forecast accuracy by 22%.",
      "Developed real-time inventory optimization services that reduced inventory holding costs by 18% and improved warehouse utilization.",
      "Designed forecasting APIs serving more than 50,000 daily business users and reduced decision latency by 35%.",
      "Engineered distributed pipelines with Spark, Kafka, Python, and SQL to create production-ready forecasting and optimization features.",
      "Deployed resilient services on AWS using SageMaker, EKS, EC2, Lambda, S3, Docker, Kubernetes, CloudWatch, Redis, and PostgreSQL.",
    ],
    stack: [
      "Python",
      "XGBoost",
      "Transformers",
      "Spark",
      "Kafka",
      "SageMaker",
      "Spring Boot",
      "Kubernetes",
    ],
  },
];

const PROJECTS = [
  {
    icon: Network,
    type: "Production AI Case Study",
    title: "Enterprise RAG & Multi-Agent Platform",
    description:
      "A governed AI-agent platform that retrieves from structured and unstructured enterprise sources, orchestrates specialized agents, and measures groundedness, relevance, latency, and quality in production.",
    outcome: "150K+ monthly users · +32% accuracy · −41% latency · −28% cost",
    stack: ["LangGraph", "Databricks Vector Search", "MLflow", "Unity Catalog", "OpenAI", "FastAPI"],
  },
  {
    icon: Layers3,
    type: "Machine Learning Case Study",
    title: "Demand Forecasting & Inventory Optimization",
    description:
      "A distributed forecasting platform using time-series features, XGBoost, Transformers, probabilistic methods, and real-time services to support regional inventory planning.",
    outcome: "+22% forecast accuracy · −18% holding cost · −35% decision latency",
    stack: ["XGBoost", "Transformers", "Spark", "Kafka", "SageMaker", "Spring Boot"],
  },
  {
    icon: Sparkles,
    type: "Open-Source Project",
    title: "AI-Powered Text-to-Story Video Generator",
    description:
      "Transforms written prompts into narrated, AI-illustrated short videos using NLP, image generation, and automated media composition.",
    outcome: "End-to-end multimodal generation workflow",
    stack: ["Python", "Transformers", "Stable Diffusion", "MoviePy"],
    link: "https://github.com/Rakshithbodakuntla/Text_to_Video_Generator",
  },
  {
    icon: Zap,
    type: "Deep Learning Project",
    title: "ECG Signal Analysis & Classification",
    description:
      "An end-to-end pipeline that preprocesses ECG signals and applies CNN and CNN-LSTM architectures to classify cardiac abnormalities.",
    outcome: "Healthcare-focused signal classification pipeline",
    stack: ["Python", "TensorFlow", "Keras", "WFDB", "Scikit-learn"],
    link: "https://github.com/Rakshithbodakuntla/Arrhythmia_Classification",
  },
];

const CERTIFICATIONS = [
  "Databricks Certified Generative AI Engineer Associate",
  "AWS Certified Machine Learning Engineer",
  "Certified Kubernetes Application Developer (CKAD)",
  "AWS Certified Solutions Architect",
];

const EDUCATION = [
  {
    degree: "Master’s in Computer Science",
    school: "University of Central Missouri",
  },
  {
    degree: "Bachelor’s in Computer Science",
    school: "Jawaharlal Nehru Technological University",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const onMouseMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const submitContact = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
    );
    window.location.href = `mailto:bodakuntlarakshith@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <header className="topbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollToSection("home")} aria-label="Go to home">
            <span className="brand-mark">RB</span>
            <span className="brand-copy">
              <strong>Rakshith</strong>
              <small>AI/ML Engineer</small>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map(([id, label]) => (
              <button
                key={id}
                className={activeSection === id ? "nav-link active" : "nav-link"}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <a className="nav-cta" href="mailto:bodakuntlarakshith@gmail.com">
            Let’s connect <ArrowRight size={16} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map(([id, label]) => (
              <button key={id} onClick={() => scrollToSection(id)}>
                {label} <ChevronRight size={17} />
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="status-dot" /> Production AI · Agentic Systems · MLOps
              </div>
              <h1>
                Building <span>intelligent systems</span> that perform at enterprise scale.
              </h1>
              <p className="hero-lead">
                I’m Rakshith Bodakuntla, an AI/ML Engineer with 5+ years of experience designing
                production-grade Generative AI, RAG, forecasting, and distributed data platforms.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="/Rakshith_Bodakuntla_Resume.pdf" download>
                  <Download size={18} /> Download resume
                </a>
                <button className="button secondary" onClick={() => scrollToSection("experience")}>
                  Explore my work <ArrowRight size={18} />
                </button>
              </div>

              <div className="social-row">
                <a
                  href="https://linkedin.com/in/bodakuntlarakshith1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinMark size={19} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Rakshithbodakuntla"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <GithubMark size={19} /> GitHub
                </a>
                <span>
                  <MapPin size={18} /> San Francisco, CA
                </span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Professional profile summary">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="profile-card">
                <div className="profile-topline">
                  <span>AI SYSTEM PROFILE</span>
                  <span className="online-pill">AVAILABLE</span>
                </div>
                <div className="monogram">RB</div>
                <h2>Rakshith Bodakuntla</h2>
                <p>AI/ML Engineer</p>
                <div className="profile-divider" />
                <div className="profile-stack">
                  <span>Generative AI</span>
                  <span>RAG & Agents</span>
                  <span>Distributed ML</span>
                  <span>Cloud MLOps</span>
                </div>
                <div className="profile-code">
                  <span>focus</span>
                  <strong>reliable_ai_at_scale()</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="container metrics-grid">
            {METRICS.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section muted-section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">About me</p>
              <h2 className="section-title">From ML experimentation to dependable production systems.</h2>
            </div>
            <div className="about-copy">
              <p>
                My work sits at the intersection of machine learning, software engineering, and
                distributed systems. I design the full path from data and experimentation to APIs,
                deployment, evaluation, monitoring, governance, and business adoption.
              </p>
              <p>
                At Databricks, I build enterprise AI agents and RAG platforms. Previously at Amazon,
                I developed forecasting, inventory optimization, and high-volume ML services for
                supply-chain operations.
              </p>
              <div className="principles">
                {["Quality before scale", "Measurable business impact", "Reliable cloud-native delivery"].map(
                  (principle) => (
                    <span key={principle}>
                      <CheckCircle2 size={17} /> {principle}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Core expertise</p>
                <h2 className="section-title">An end-to-end AI engineering toolkit.</h2>
              </div>
              <p>
                Strong depth across intelligent applications, data platforms, production software,
                and cloud operations.
              </p>
            </div>

            <div className="expertise-grid">
              {EXPERTISE.map(({ icon: Icon, title, description, skills }) => (
                <article className="expertise-card" key={title}>
                  <div className="icon-box">
                    <Icon size={24} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tag-list">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section muted-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Professional experience</p>
                <h2 className="section-title">Building high-impact ML and GenAI platforms.</h2>
              </div>
              <BriefcaseBusiness className="section-watermark" size={66} />
            </div>

            <div className="timeline">
              {EXPERIENCE.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.role}`}>
                  <div className="timeline-marker" />
                  <div className="experience-card">
                    <div className="experience-header">
                      <div>
                        <span className="company-chip">{job.company}</span>
                        <h3>{job.role}</h3>
                        <p>{job.location}</p>
                      </div>
                      <time>{job.period}</time>
                    </div>
                    <p className="experience-summary">{job.summary}</p>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>
                          <ChevronRight size={17} /> <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="tag-list compact">
                      {job.stack.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Selected work</p>
                <h2 className="section-title">Case studies and hands-on projects.</h2>
              </div>
              <p>
                A mix of enterprise systems and open-source builds spanning agentic AI, forecasting,
                multimodal generation, and deep learning.
              </p>
            </div>

            <div className="projects-grid">
              {PROJECTS.map(({ icon: Icon, ...project }) => (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <div className="icon-box small">
                      <Icon size={21} />
                    </div>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-outcome">{project.outcome}</div>
                  <div className="tag-list compact">
                    {project.stack.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-link">
                      View repository <ExternalLink size={16} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="section muted-section">
          <div className="container credentials-grid">
            <article className="credential-panel">
              <div className="panel-heading">
                <Award size={25} />
                <div>
                  <p className="section-kicker">Certifications</p>
                  <h2>Validated cloud and AI expertise</h2>
                </div>
              </div>
              <div className="credential-list">
                {CERTIFICATIONS.map((certification) => (
                  <div key={certification}>
                    <CheckCircle2 size={19} />
                    <span>{certification}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="credential-panel">
              <div className="panel-heading">
                <GraduationCap size={28} />
                <div>
                  <p className="section-kicker">Education</p>
                  <h2>Computer science foundation</h2>
                </div>
              </div>
              <div className="education-list">
                {EDUCATION.map((item) => (
                  <div key={item.degree}>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="section-kicker">Get in touch</p>
              <h2 className="section-title">Let’s build something intelligent, reliable, and useful.</h2>
              <p>
                Reach out to discuss AI/ML engineering, Generative AI platforms, RAG systems,
                distributed ML, or cloud-native product development.
              </p>

              <div className="contact-details">
                <a href="mailto:bodakuntlarakshith@gmail.com">
                  <Mail size={20} />
                  <span>
                    <small>Email</small>
                    bodakuntlarakshith@gmail.com
                  </span>
                </a>
                <a href="tel:+14694871318">
                  <Phone size={20} />
                  <span>
                    <small>Phone</small>
                    +1 (469) 487-1318
                  </span>
                </a>
                <div>
                  <MapPin size={20} />
                  <span>
                    <small>Location</small>
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitContact}>
              <label>
                Name
                <input
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder="Tell me about the opportunity or project..."
                />
              </label>
              <button className="button primary full" type="submit">
                Send message <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>Rakshith Bodakuntla</strong>
            <span>AI/ML Engineer · Generative AI · RAG · MLOps</span>
          </div>
          <p>© {currentYear} Rakshith Bodakuntla. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
