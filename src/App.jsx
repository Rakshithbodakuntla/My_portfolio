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
    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
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
      {
        root: null,
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.1, 
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
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
    "Programming & Tools": [
      "Python", "SQL", "C", "Git & GitHub", "ServiceNow", "Figma", "Bash"
    ],
    "Data Engineering": [
      "Snowflake", "Azure Data Factory", "ETL / ELT", "Data Warehousing", "Dimensional Modeling", "Data Cleaning"
    ],
    "AI & Machine Learning": [
      "Machine Learning", "Deep Learning", "CNN & LSTM", "LLMs", "Prompt Design", "Model Optimization"
    ],
    "Data & Visualization": [
      "Pandas & NumPy", "TensorFlow", "Power BI", "Tableau", "Streamlit", "Scikit-learn"
    ]
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
    },
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
    "SnowPro Core",
    "Snowflake Hands-On Data Warehouse Training",
    "Snowflake Collaboration & Cost Estimation Workshop",
    "Databricks Fundamentals",
  ];

  const card = "bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 hover:border-cyan-400/40 transition";

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0d0f13] text-gray-200 font-sans">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-[200%] h-[200%] animate-gradient bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.15),rgba(0,0,0,0.9))]"></div>
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
            <span className="text-white">Hi, I'm</span> <span className="text-cyan-400">Rakshith</span>
          </h3>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            Data Engineer & AI Specialist
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://drive.google.com/file/d/1YoIgucMOj_nYqqJibQd0uTrGNFEsRQZo/view?usp=sharing" target="_blank" className="px-10 py-3 bg-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-700 transition flex items-center gap-2 transform hover:scale-105">
              <Download size={20} /> Download Resume
            </a>
            <a href="#contact" className="px-10 py-3 border border-cyan-400/50 text-cyan-300 rounded-full font-semibold text-lg hover:bg-cyan-500/10 transition flex items-center gap-2 transform hover:scale-105">
              <Mail size={20} /> Contact Me
            </a>
          </div>
          <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 text-cyan-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down animate-bounce"><path d="m7 15 5 5 5-5"/><path d="m7 9 5 5 5-5"/></svg>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400 flex justify-center gap-2">
            <User /> About Me
          </h2>
          <div className="mb-8"> 
            <img src={profileImage} alt="Rakshith Bodakuntla" className="rounded-full w-40 h-40 object-cover mx-auto shadow-lg border-4 border-cyan-500/50" />
          </div>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
           I am a Data Engineer and AI Engineer with 2 years of hands-on experience in building scalable data pipelines
           and intelligent machine learning systems. I specialize in transforming raw data into production-ready solutions.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION - FLOATING BUTTONS */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Code /> Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all">
                <h3 className="text-xl font-semibold text-white mb-8 capitalize flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  {category.replace(/([A-Z])/g, ' $1')}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {items.map((skill) => (
                    <button
                      key={skill}
                      className="px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 text-sm font-semibold rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_20px_rgba(34,211,238,0.2)] hover:bg-cyan-500/20 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Star /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={card}>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-cyan-300 font-semibold mb-4 text-sm">{p.tech}</p>
                <p className="text-gray-300 mb-4">{p.description}</p>
                <a href={p.link} target="_blank" className="inline-block text-cyan-400 hover:text-white transition font-medium underline underline-offset-4">
                  View Source / Demo
                </a>
              </div>
            ))}
          </div>
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
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-300 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.keyAchievements.map((achieve, j) => (
                    <li key={j}>{achieve}</li>
                  ))}
                </ul>
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
                <div key={i} className={card + " flex items-center gap-3 py-4"}>
                  <Award size={24} className="text-cyan-400" />
                  <span className="font-medium">{c}</span>
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
                <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-cyan-300 hover:underline">bodakuntlarakshith1@gmail.com</a>
              </div>
            </div>
            <div className={card + " flex items-center gap-4"}>
              <Phone className="text-cyan-400" size={24} />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+14694871318" className="text-cyan-300 hover:underline">+1 (469) 487-1318</a>
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
              <a href="https://www.linkedin.com/in/bodakuntlarakshith1/" className="text-cyan-300 hover:text-white transition"><Linkedin size={28} /></a>
              <a href="https://github.com/Rakshithbodakuntla" className="text-cyan-300 hover:text-white transition"><Github size={28} /></a>
            </div>
          </div>
          <div className={card + " space-y-4"}>
            <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none transition" />
            <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none transition" />
            <textarea placeholder="Your Message" rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none transition"></textarea>
            <button onClick={handleContactSubmit} className="w-full px-8 py-3 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition flex items-center justify-center gap-2">
              Send Message <Send size={20} />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t border-white/10 mt-12">
        <p>&copy; {new Date().getFullYear()} Rakshith Bodakuntla. All rights reserved.</p>
      </footer>
    </div>
  );
}
