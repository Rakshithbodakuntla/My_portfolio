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
      description: "Designed an IoT solution to monitor humidity & soil moisture, sending real-time alerts and visualizing sensor metrics using Streamlit dashboards."
    },
    {
      title: "Customer Churn Prediction",
      tech: "Python, Streamlit, Pandas, Scikit-learn",
      description: "Developed a machine learning pipeline to analyze customer data and predict churn risk through interactive dashboards for proactive retention strategies."
    },
    {
      title: "ECG Signal Analysis and Classification Pipeline",
      tech: "Python, TensorFlow, Keras, WFDB, Scikit-learn, Pandas, NumPy",
      description: "Built an end-to-end ECG classification system using CNN & CNN-LSTM architectures to detect cardiac abnormalities."
    },
  ];

  const research = [
    {
      title: "A CNN-LSTM Based Deep Learning Pipeline for ECG Signal Analysis and Cardiac Arrhythmia Detection",
      description: "Proposed a hybrid CNN-LSTM architecture for ECG classification using TensorFlow and Streamlit."
    },
    {
      title: "Face-Recognition System Analysis using Deep Reinforcement Learning",
      description: "Published research on deep reinforcement learning-based authentication systems."
    },
    {
      title: "Adversarial Machine Learning: Mitigating Attacks and Improving Robustness",
      description: "Explored adversarial attacks and defense strategies for robust deep learning models."
    }
  ];

  const certifications = [
    "Snowflake Hands-On Data Warehouse Training",
    "Snowflake Collaboration & Cost Estimation Workshop",
    "Microsoft Azure AI Fundamentals",
  ];

  const card = "bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6";

  return (
    <>
      {/* 🔥 Animated Background Layer */}
      <div className="animated-bg"></div>

      <div className="relative min-h-screen text-gray-800">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">

              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RB</div>

              <div className="hidden md:flex space-x-8">
                {sections.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-blue-600 transition ${
                      activeSection === item ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-blue-50">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 space-y-2 bg-white border-t border-gray-200">
                {sections.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:bg-blue-50 rounded-lg text-gray-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* YOUR ENTIRE DESIGN BELOW — unchanged */}
        {/* HERO */}
        <section id="home" className="pt-28 pb-16 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-xl">
              RB
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rakshith Bodakuntla</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Data Engineer | AI & Machine Learning Enthusiast | Researcher
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
                View Projects
              </a>

              <a href="/Rakshith_Bodakuntla_Resume.pdf" target="_blank" className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all flex items-center gap-2">
                <Download size={20} /> Resume
              </a>

              <a href="#contact" className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transform hover:-translate-y-1 transition-all">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Your About, Experience, Skills, Projects, Research, Contact sections remain EXACTLY THE SAME */}
        {/* (omitted here to save space — but unchanged in your file) */}

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center">
          © 2025 Rakshith Bodakuntla. All rights reserved.
        </footer>

      </div>
    </>
  );
}
