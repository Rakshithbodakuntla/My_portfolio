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
      description: "Designed an IoT solution to monitor environmental factors like humidity and soil moisture, sending real-time alerts to farmers and visualizing live sensor metrics via Streamlit dashboards."
    },
    {
      title: "Customer Churn Prediction",
      tech: "Python, Streamlit, Pandas, Scikit-learn",
      description: "Developed a machine learning pipeline to analyze customer data and predict churn risk, enabling proactive retention strategies through interactive dashboards and data visualization."
    },
    {
      title: "ECG Signal Analysis and Classification Pipeline",
      tech: "Python, TensorFlow, Keras, WFDB, Scikit-learn, Pandas, NumPy",
      description: "Developed an end-to-end deep learning pipeline to classify cardiac risk levels from MIT-BIH ECG data using CNN and hybrid CNN-LSTM architectures."
    },
  ];

  const research = [
    {
      title: "A CNN-LSTM Based Deep Learning Pipeline for ECG Signal Analysis and Cardiac Arrhythmia Detection",
      description: "Proposed a hybrid CNN-LSTM architecture for ECG classification using TensorFlow and Streamlit, improving diagnostic accuracy in healthcare AI systems."
    },
    {
      title: "Face-Recognition System Analysis using Deep Reinforcement Learning",
      description: "Published research on scalable authentication using deep reinforcement learning for large datasets."
    },
    {
      title: "Adversarial Machine Learning: Mitigating Attacks and Improving Robustness",
      description: "Explored adversarial attacks and defense strategies to strengthen deep learning model security."
    }
  ];

  const certifications = [
    "Snowflake Hands-On Data Warehouse Training",
    "Snowflake Collaboration & Cost Estimation Workshop",
    "Microsoft Azure AI Fundamentals",
  ];
  // ============================================

  const glass = "bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-lg transition";
  const sectionPad = "py-16 px-4";

  return (
    <div className="min-h-screen bg-[#111215] text-gray-200">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
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

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-32 bg-cyan-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
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
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-500 text-gray-300 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={sectionPad}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 flex justify-center items-center gap-2">
            <User /> About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            I’m a passionate Data Engineer and AI researcher pursuing my MS in Computer Science at the University of Central Missouri.
            My experience spans developing scalable data pipelines, implementing deep learning solutions, and automating workflows in cloud environments.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <Briefcase /> Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`${glass} p-6`}>
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <Code /> Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`${glass} p-6`}>
                <h3 className="text-xl font-semibold mb-4 text-white capitalize">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <Briefcase /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={`${glass} p-8`}>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-cyan-300 font-semibold mb-4">{p.tech}</p>
                <p className="text-gray-300">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <BookOpen /> Research & Publications
          </h2>
          <div className="space-y-6">
            {research.map((r, i) => (
              <div key={i} className={`${glass} p-6`}>
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
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm text-white p-4 rounded-xl flex items-center gap-3"
                >
                  <Award size={24} className="text-cyan-400" /> <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={sectionPad}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className={`${glass} p-4 flex items-center gap-4`}>
              <Mail className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-cyan-300 hover:underline">
                  bodakuntlarakshith1@gmail.com
                </a>
              </div>
            </div>
            <div className={`${glass} p-4 flex items-center gap-4`}>
              <Phone className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+14694871318" className="text-cyan-300 hover:underline">
                  +1 (469) 487-1318
                </a>
              </div>
            </div>
            <div className={`${glass} p-4 flex items-center gap-4`}>
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-300">Kansas, USA</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/bodakuntlarakshith1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white transition"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/Rakshithbodakuntla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white transition"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${glass} p-6 space-y-4`}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
            />
            <button
              onClick={handleContactSubmit}
              className="w-full px-8 py-3 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition flex items-center justify-center gap-2"
            >
              <Send size={20} /> Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-gray-500 py-8 text-center border-t border-white/10">
        © 2025 Rakshith Bodakuntla. All rights reserved
