import React, { useState, useEffect } from "react"; 
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award,
  BookOpen, Code, Briefcase, User, Send, Star
} from "lucide-react";

import profileImage from './My_anime_img.jpg';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // 1. MOUSE TRACKING LOGIC
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
            window.scrollTo(0, 0);
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = ["home", "about", "skills", "projects", "experience", "research", "contact"];

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

  const skills = {
    "Programming & Tools": ["Python", "SQL", "C", "Git & GitHub", "ServiceNow", "Figma", "Bash"],
    "Data Engineering": ["Snowflake", "Azure Data Factory", "ETL / ELT", "Data Warehousing", "Dimensional Modeling", "Data Cleaning"],
    "AI & Machine Learning": ["Machine Learning", "Deep Learning", "CNN & LSTM", "LLMs", "Prompt Design", "Model Optimization"],
    "Data & Visualization": ["Pandas & NumPy", "TensorFlow", "Power BI", "Tableau", "Streamlit", "Scikit-learn"]
  };

  const experience = [
    {
      title: "Graduate Research Assistant",
      company: "University of Central Missouri – Overland Park, KS",
      period: "Aug 2025 – Present",
      keyAchievements: [
        "Developed a deep learning pipeline for ECG signal analysis using TensorFlow and Streamlit.",
        "Implemented CNN and LSTM models to classify cardiac arrhythmias with improved detection accuracy.",
        "Contributed to AI research supporting healthcare diagnosis and intelligent decision systems."
      ]
    },
    {
      title: "Software Engineer",
      company: "HDFC ERGO General Insurance – Remote, India",
      period: "Sep 2023 – Aug 2024",
      keyAchievements: [
        "Built scalable ETL pipelines using Python and SQL for high-volume insurance data.",
        "Integrated APIs and automated workflows using Azure Data Factory and Power BI.",
        "Optimized SQL queries, reducing execution time by 30% and enhancing analytics performance."
      ]
    },
    {
      title: "ServiceNow Intern",
      company: "Kaptius – Hyderabad, India",
      period: "Jan 2023 – Aug 2023",
      keyAchievements: [
        "Assisted in custom ServiceNow app development and workflow automation using Flow Designer.",
        "Created JavaScripts and dashboards for process optimization.",
        "Integrated REST APIs and supported CMDB data migration for client projects."
      ]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Text-to-Story Video Generator",
      tech: "Python, Transformers, Stable Diffusion, MoviePy",
      description: "Built an AI-driven Text-to-Story Video Generator that converts user-written statements into narrated, AI-illustrated short films using NLP and Stable Diffusion.",
      link: "https://github.com/Rakshithbodakuntla/Text_to_Video_Generator" 
    },
    {
      title: "ECG Signal Analysis & Classification Pipeline",
      tech: "Python, TensorFlow, Keras, WFDB, Scikit-learn",
      description: "Developed an end-to-end ECG classification system using CNN and CNN-LSTM to detect cardiac abnormalities.",
      link: "https://github.com/Rakshithbodakuntla/Arrhythmia_Classification" 
    },
    {
      title: "Real-Time Smart Farm IoT Data Pipeline",
      tech: "IoT Sensors, Python, SQLite, Streamlit",
      description: "Designed an IoT solution for humidity and soil monitoring with real-time alerts and Streamlit dashboards.",
      link: "https://github.com/Rakshithbodakuntla/Real-Time-Smart-Farm-IoT-Data-Pipeline-and-Analytics-Dashboard" 
    },
    {
      title: "Customer Churn Prediction",
      tech: "Python, Streamlit, Pandas, Scikit-learn",
      description: "Developed a machine learning pipeline that predicts customer churn through data analytics and visualization dashboards.",
      link: "https://github.com/Rakshithbodakuntla/customer_churn_prediction" 
    }
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
    "SnowPro Core",
    "Snowflake Hands-On Data Warehouse Training",
    "Snowflake Collaboration & Cost Estimation Workshop",
    "Databricks Fundamentals",
  ];

  const card = "bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 hover:border-cyan-400/40 transition";

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#08090b] text-gray-200 font-sans">
      
      {/* 2. INTERACTIVE CURSOR BACKGROUND */}
      <style>{`
        :root { --mouse-x: 50%; --mouse-y: 50%; }
        .cursor-bg {
          background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.12) 0%, transparent 45%);
          transition: background 0.1s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 cursor-bg" />
      <div className="fixed inset-0 -z-20 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
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
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-black/90 border-t border-white/10 px-4">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-white/10 rounded-lg text-gray-200"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-28 pb-16 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-white">Hi, I'm</span> <span className="text-cyan-400">Rakshith Bodakuntla</span>
          </h3>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            Data Engineer & AI Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://drive.google.com/file/d/1YoIgucMOj_nYqqJibQd0uTrGNFEsRQZo/view?usp=sharing" target="_blank" rel="noreferrer" className="px-10 py-3 bg-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-700 transition flex items-center gap-2 transform hover:scale-105">
              <Download size={20} /> Download Resume
            </a>
            <button onClick={() => scrollToSection('contact')} className="px-10 py-3 border border-cyan-400/50 text-cyan-300 rounded-full font-semibold text-lg hover:bg-cyan-500/10 transition flex items-center gap-2 transform hover:scale-105">
              <Mail size={20} /> Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* 3. UPGRADED SIDE-BY-SIDE ABOUT */}
      <section id="about" className="py-24 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
                <div className="relative">
                  <img 
                    src={profileImage} 
                    alt="Rakshith Bodakuntla" 
                    className="rounded-2xl w-72 h-80 md:w-full md:h-auto object-cover shadow-2xl border border-white/10" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#0d0f13] border border-cyan-400/30 p-4 rounded-xl shadow-2xl">
                    <p className="text-cyan-400 font-bold text-2xl leading-none">2+</p>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 text-left">
              <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
                <User className="text-cyan-400" /> About Me
              </h2>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a <span className="text-white font-semibold">Data Engineer and AI Specialist</span> with 
                  a passion for turning complex datasets into actionable intelligence. With over 2 years of professional 
                  experience, I bridge the gap between robust data infrastructure and cutting-edge machine learning.
                </p>
                <p>
                  My journey has taken me from optimizing SQL queries for major financial institutions to 
                  architecting deep learning pipelines for medical signal analysis. I thrive on building 
                  <span className="text-cyan-400 italic"> scalable, efficient, and intelligent</span> systems.
                </p>
                <p>
                  Recently, I achieved my <span className="text-white border-b border-cyan-400">SnowPro Core Certification</span>, 
                  solidifying my expertise in cloud data warehousing and modern architecture.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-gray-300">Overland Park, KS</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-1">Education</p>
                  <p className="text-gray-300">UCM (Masters)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPACT SKILLS SECTION */}
      <section id="skills" className="py-24 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400 flex items-center gap-3">
            <Code /> Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 text-xs font-medium rounded-lg hover:border-cyan-400 transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400 flex items-center gap-3">
            <Star /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={card}>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4 text-sm tracking-wide">{p.tech}</p>
                <p className="text-gray-400 mb-6 line-clamp-3">{p.description}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-cyan-500 transition text-sm font-medium">
                  View Repository <Github size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400 flex items-center gap-3">
            <Briefcase /> Career Journey
          </h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className={card}>
                <div className="flex flex-col md:flex-row md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.keyAchievements.map((achieve, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></div>
                      {achieve}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH & CERTIFICATIONS */}
      <section id="research" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-3">
                <BookOpen /> Research
              </h2>
              <div className="space-y-4">
                {research.map((r, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <h4 className="font-bold text-white mb-2">{r.title}</h4>
                    <p className="text-sm text-gray-400">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-3">
                <Award /> Certifications
              </h2>
              <div className="grid gap-3">
                {certifications.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/50 transition">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      <Award size={20} />
                    </div>
                    <span className="font-medium text-gray-300">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Mail className="text-cyan-400" />
                <a href="mailto:bodakuntlarakshith1@gmail.com" className="hover:text-cyan-400 transition">bodakuntlarakshith1@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Phone className="text-cyan-400" />
                <span>+1 (469) 487-1318</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://linkedin.com" className="p-4 bg-white/5 rounded-full hover:bg-cyan-500 transition"><Linkedin /></a>
                <a href="https://github.com" className="p-4 bg-white/5 rounded-full hover:bg-cyan-500 transition"><Github /></a>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-500 transition"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-500 transition"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea 
                placeholder="Message" 
                rows="4" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-cyan-500 transition"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button 
                onClick={handleContactSubmit}
                className="w-full bg-cyan-600 hover:bg-cyan-500 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Rakshith Bodakuntla • Built with React & Tailwind</p>
      </footer>
    </div>
  );
}
