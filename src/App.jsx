import React, { useState } from "react";
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award,
  BookOpen, Code, Briefcase, User, Send
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const sections = ["home", "about", "experience", "skills", "projects", "research", "contact"];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = () => {
    const mailtoLink = `mailto:bodakuntlarakshith1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailtoLink;
  };

  // ================= CONTENT ==================
  const skills = {
    languages: ["Python", "Java", "SQL", "C"],
    dataEngineering: ["Snowflake", "Azure Data Factory", "ETL Pipelines", "Data Warehousing"],
    analytics: ["Power BI", "Streamlit", "Tableau", "REST APIs"],
    machineLearning: ["TensorFlow", "Scikit-learn", "Deep Learning", "Reinforcement Learning"],
    tools: ["Git", "ServiceNow", "IoT Systems", "Figma"]
  };

  const experience = [
    {
      title: "Graduate Research Assistant",
      company: "University of Central Missouri – Overland Park, KS",
      period: "Aug 2025 – Present",
      description: [
        "Developed a deep learning pipeline for ECG signal analysis using TensorFlow and Streamlit.",
        "Implemented CNN and LSTM models to classify cardiac arrhythmias with improved detection accuracy.",
        "Contributed to AI research supporting healthcare diagnosis and intelligent decision systems."
      ]
    },
    {
      title: "Software Engineer",
      company: "HDFC ERGO General Insurance – Remote, India",
      period: "Sep 2023 – Aug 2024",
      description: [
        "Built scalable ETL pipelines using Python and SQL for high-volume insurance data.",
        "Integrated APIs and automated workflows using Azure Data Factory and Power BI.",
        "Optimized SQL queries, reducing execution time by 30% and enhancing analytics performance."
      ]
    },
    {
      title: "ServiceNow Intern",
      company: "Kaptius – Hyderabad, India",
      period: "Jan 2023 – Aug 2023",
      description: [
        "Assisted in custom ServiceNow app development and workflow automation using Flow Designer.",
        "Created JavaScripts and dashboards for process optimization.",
        "Integrated REST APIs and supported CMDB data migration for client projects."
      ]
    },
  ];

  const projects = [
    {
      title: "AI-Powered Text-to-Story Video Generator",
      tech: "Python, Transformers, spaCy, Stable Diffusion, Diffusers, Torch, MoviePy, Text-to-Speech, NLP, AI Video Synthesis",
      description: "Built an AI-driven Text-to-Story Video Generator that converts user-written statements into narrated, AI-illustrated short films using NLP and Stable Diffusion."
    },
    {
      title: "Real-Time Smart Farm IoT Data Pipeline and Analytics",
      tech: "IoT Sensors, Real-Time Alerts, Python, SQLite, Streamlit",
      description: "Designed an IoT solution for humidity and soil monitoring with real-time alerts and Streamlit dashboards."
    },
    {
      title: "Customer Churn Prediction",
      tech: "Python, Streamlit, Pandas, Scikit-learn",
      description: "Developed a machine learning pipeline that predicts customer churn through data analytics and visualization dashboards."
    },
    {
      title: "ECG Signal Analysis & Classification Pipeline",
      tech: "Python, TensorFlow, Keras, WFDB, Scikit-learn, Pandas, NumPy",
      description: "Developed an end-to-end ECG classification system using CNN and CNN-LSTM to detect cardiac abnormalities."
    },
  ];

  const research = [
    {
      title: "A CNN-LSTM Deep Learning Pipeline for ECG Signal Analysis",
      description: "Developed hybrid CNN-LSTM models to enhance ECG classification accuracy for healthcare diagnosis."
    },
    {
      title: "Face-Recognition System using Deep Reinforcement Learning",
      description: "Published research on scalable authentication using DRL for high-volume datasets."
    },
    {
      title: "Adversarial ML: Attacks & Robustness",
      description: "Worked on adversarial attacks and defense strategies to improve ML model robustness."
    }
  ];

  const certifications = [
    "Snowflake Hands-On Data Warehouse Training",
    "Snowflake Collaboration & Cost Estimation Workshop",
    "Azure AI Fundamentals",
  ];

  const card = "bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition";

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0d0f13] text-gray-200">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[200%] h-[200%] animate-gradient bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.25),rgba(0,0,0,0.9))]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-cyan-400">RB</div>

            <div className="hidden md:flex space-x-8">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition ${
                    activeSection === item ? "text-cyan-400 font-semibold" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-black/70 border-t border-white/10">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-white/10 rounded-lg text-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-28 pb-16 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-32 bg-cyan-500/30 backdrop-blur-xl border border-cyan-400/40 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-xl">
            RB
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Rakshith Bodakuntla</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            Data Engineer | AI & Machine Learning Enthusiast | Researcher
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition">
              View Projects
            </a>

            <a
              href="/Rakshith_Bodakuntla_Resume.pdf"
              target="_blank"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition flex items-center gap-2"
            >
              <Download size={20} /> Resume
            </a>

            <a href="#contact" className="px-8 py-3 border border-gray-500 text-gray-300 rounded-full font-semibold hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400 flex justify-center gap-2">
            <User /> About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            I’m a passionate Data Engineer and AI researcher pursuing my MS in Computer Science at the University of Central Missouri.
            My experience includes building scalable data pipelines, deep learning systems, and workflow automation in cloud environments.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Briefcase /> Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className={card}>
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>

                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.description.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Code /> Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={card}>
                <h3 className="text-xl font-semibold text-white mb-4 capitalize">{category}</h3>

                <ul className="space-y-2 text-gray-300">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Briefcase /> Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={card}>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-cyan-300 font-semibold mb-4">{p.tech}</p>
                <p className="text-gray-300">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <BookOpen /> Research & Publications
          </h2>

          <div className="space-y-6">
            {research.map((r, i) => (
              <div key={i} className={card}>
                <h3 className="text-2xl font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-gray-300">{r.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <Award /> Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((c, i) => (
                <div key={i} className={card + " flex items-center gap-3"}>
                  <Award size={24} className="text-cyan-400" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="space-y-6">
            <div className={card + " flex items-center gap-4"}>
              <Mail className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-cyan-300 hover:underline">
                  bodakuntlarakshith1@gmail.com
                </a>
              </div>
            </div>

            <div className={card + " flex items-center gap-4"}>
              <Phone className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+14694871318" className="text-cyan-300 hover:underline">
                  +1 (469) 487-1318
                </a>
              </div>
            </div>

            <div className={card + " flex items-center gap-4"}>
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-300">Kansas, USA</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/bodakuntlarakshith1/" className="text-cyan-300 hover:text-white transition">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/Rakshithbodakuntla" className="text-cyan-300 hover:text-white transition">
                <Github size={28} />
              </a>
            </div>
          </div>

          <div className={card + " space-y-4"}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-white/20 round
