import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Code,
  Database,
  Cloud,
  Layers,
  Briefcase,
  BookOpen,
  Award,
  Send,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "snowflake", label: "Snowflake Work" },
    { id: "research", label: "Research" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileNavOpen(false);
  };

  const handleContactSubmit = () => {
    const mailtoLink = `mailto:bodakuntlarakshith1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.email
    )}`;
    window.location.href = mailtoLink;
  };

  // DATA
  const skills = {
    "Languages & Core": ["Python", "SQL", "Java", "C"],
    "Data Engineering": [
      "Snowflake",
      "Azure Data Factory",
      "ETL Pipelines",
      "Data Warehousing",
    ],
    "Snowflake Tools": [
      "Snowpipe",
      "Streams & Tasks",
      "Time Travel",
      "Secure Data Sharing",
      "Streamlit",
    ],
    "Cloud & Analytics": ["Azure", "Power BI", "Tableau", "REST APIs"],
    "ML / AI": ["TensorFlow", "Scikit-learn", "Deep Learning Pipelines"],
    Databases: ["MySQL", "Oracle", "PostgreSQL"],
  };

  const projects = [
    {
      title: "Self-Driving Car Rental System",
      stack: "Java · MySQL · Figma",
      desc: "Built a platform that enables users to rent vehicles remotely from owners. Designed UI in Figma and implemented secure CRUD flows with Java & MySQL.",
    },
    {
      title: "Digital Farming using IoT",
      stack: "IoT · Real-time Monitoring",
      desc: "Designed an IoT-based smart farming system to monitor soil, humidity and temperature, with real-time alerts for precision agriculture.",
    },
    {
      title: "DL Experiments (NLP, CNN, GAN)",
      stack: "TensorFlow · PyTorch · HuggingFace",
      desc: "Created multiple learning repos: tensor operations, CNN-based classification, GAN experiments, and transformer-based NLP.",
      link: "https://github.com/Rakshithbodakuntla",
    },
  ];

  const snowflakeProjects = [
    {
      title: "Cloud Data Pipeline Automation",
      tags: "Snowflake · ADF · Python · SQL",
      desc: "Designed a Snowflake-based ELT flow integrating API data and Azure Blob via Snowpipe, Streams & Tasks. Enabled automated ingestion and analytics-ready tables.",
    },
    {
      title: "Performance Tuning & Cost Visibility",
      tags: "Snowflake · Power BI",
      desc: "Used Snowflake query profiling, clustering, and caching patterns to improve query performance. Built monitoring dashboards in Power BI to track credit usage.",
    },
  ];

  const researches = [
    {
      title:
        "A CNN-LSTM Based Deep Learning Pipeline for ECG Signal Analysis and Cardiac Arrhythmia Detection",
      desc: "Built a hybrid CNN-LSTM model (TensorFlow + Streamlit) to classify ECG signals and support healthcare decision systems.",
    },
    {
      title:
        "Face-Recognition System Analysis using Deep Reinforcement Learning",
      desc: "Review + implementation work on scalable face recognition with RL-based adaptation for large user bases.",
    },
    {
      title:
        "Adversarial Machine Learning: Mitigating Attacks and Improving Robustness",
      desc: "Explored adversarial attacks on neural networks and evaluated defense mechanisms to improve model reliability.",
    },
  ];

  const certifications = [
    "Snowflake Hands-On Data Warehouse Training",
    "Snowflake Essentials: Collaboration, Marketplace & Cost Estimation",
    "Microsoft Azure AI Fundamentals",
    "CISCO CCNA & Cybersecurity Essentials",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            RB
          </div>
          <span className="font-semibold text-slate-800 text-sm">
            Rakshith Bodakuntla
          </span>
        </div>
        <button
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          className="p-2 rounded-md border border-slate-200"
        >
          {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileNavOpen && (
        <div className="md:hidden fixed inset-x-0 top-14 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex flex-col">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-4 py-3 text-left ${
                  activeSection === sec.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "hover:bg-slate-50"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className="max-w-7xl mx-auto md:pt-6 py-16 md:py-8 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
        {/* LEFT: Sidebar */}
        <aside className="md:w-1/3 lg:w-1/4 md:sticky md:top-6 md:h-fit bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hidden md:block">
          {/* Avatar */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              RB
            </div>
            <h1 className="mt-4 text-lg font-semibold text-slate-900">
              Rakshith Bodakuntla
            </h1>
            <p className="text-sm text-slate-500">
              MS CS @ UCM • Data Engineer • Snowflake
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Mail size={16} className="text-blue-500" />
              <a
                href="mailto:bodakuntlarakshith1@gmail.com"
                className="hover:text-blue-600"
              >
                bodakuntlarakshith1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Phone size={16} className="text-blue-500" />
              <a
                href="tel:+14694871318"
                className="hover:text-blue-600"
              >
                +1 (469) 487-1318
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin size={16} className="text-blue-500" />
              <span>Kansas / Missouri, USA</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <a
              href="/Rakshith_Bodakuntla_Snowflake_Solutions_Architect.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium py-2 rounded-lg hover:shadow-md"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/rakshithbodakuntla"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              <Linkedin size={18} className="text-blue-600" />
            </a>
            <a
              href="https://github.com/Rakshithbodakuntla"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Nav */}
          <nav className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
              Sections
            </p>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  activeSection === sec.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          {/* Education quick */}
          <div className="mt-6 border-t border-slate-100 pt-4">
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
              Education
            </p>
            <p className="text-sm font-semibold text-slate-800">
              MS Computer Science
            </p>
            <p className="text-xs text-slate-500">University of Central Missouri</p>
            <p className="text-xs text-slate-400">2024 – Present | CGPA: 3.85</p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              BTech Computer Science
            </p>
            <p className="text-xs text-slate-500">Vaagdevi College of Engineering</p>
          </div>
        </aside>

        {/* RIGHT: Content */}
        <main className="flex-1 space-y-10 md:space-y-12">
          {/* About */}
          <section
            id="about"
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I’m a data-focused Computer Science graduate student with experience in{" "}
              <strong>Snowflake, Azure Data Factory, Python, and SQL</strong>. I’ve built
              data pipelines for large insurance datasets, developed workflow automation
              in ServiceNow, and contributed to AI research in healthcare.
            </p>
            <p className="text-slate-700 leading-relaxed">
              I enjoy working on problems where <strong>data engineering</strong> meets{" "}
              <strong>AI/ML</strong> — especially building pipelines that make data
              usable for analytics, reporting, or intelligent systems.
            </p>
          </section>

          {/* Skills */}
          <section
            id="skills"
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group} className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3">
                    {group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {list.map((item) => (
                      <span
                        key={item}
                        className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-5 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-700 mb-3">
                    {proj.stack}
                  </p>
                  <p className="text-sm text-slate-700 mb-3">{proj.desc}</p>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Snowflake */}
          <section
            id="snowflake"
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">Snowflake Work</h2>
            </div>
            <p className="text-slate-700 mb-6">
              Hands-on experience with the Snowflake Data Cloud — data ingestion,
              automation with Streams & Tasks, and analytics enablement. Below are
              sample solution-style projects you can mention in job applications.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {snowflakeProjects.map((sf, idx) => (
                <div key={idx} className="border border-slate-100 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-1">{sf.title}</h3>
                  <p className="text-xs text-blue-600 font-medium mb-3">
                    {sf.tags}
                  </p>
                  <p className="text-sm text-slate-700">{sf.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research */}
          <section
            id="research"
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">
                Research & Publications
              </h2>
            </div>
            <div className="space-y-4">
              {researches.map((paper, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-slate-600">{paper.desc}</p>
                </div>
              ))}
            </div>

            {/* certs */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-purple-500" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Certifications
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-3"
                  >
                    <Award size={18} />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-slate-600">
                  I’m open to roles in <strong>Data Engineering</strong>,{" "}
                  <strong>Snowflake / Cloud Data</strong>, and{" "}
                  <strong>AI-driven analytics</strong>.
                </p>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                  <Mail className="text-blue-500" />
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <a
                      href="mailto:bodakuntlarakshith1@gmail.com"
                      className="text-sm text-blue-600"
                    >
                      bodakuntlarakshith1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3">
                  <Linkedin className="text-blue-500" />
                  <div>
                    <p className="text-sm font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/rakshithbodakuntla"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-600"
                    >
                      linkedin.com/in/rakshithbodakuntla
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none"
                />
                <button
                  onClick={handleContactSubmit}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-md"
                >
                  <Send size={16} /> Send
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Rakshith Bodakuntla. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
