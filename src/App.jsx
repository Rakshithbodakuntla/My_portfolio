import React, { useState } from 'react';
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award,
  BookOpen, Code, Briefcase, User, Send
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'research', 'contact'];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = () => {
    const mailtoLink = `mailto:bodakuntlarakshith1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoLink;
  };

  // ====== CONTENT (unchanged) ======
  const skills = {
    languages: ['Python', 'Java', 'SQL', 'C'],
    dataEngineering: ['Snowflake', 'Azure Data Factory', 'ETL Pipelines', 'Data Warehousing'],
    analytics: ['Power BI', 'Streamlit', 'Tableau', 'REST APIs'],
    machineLearning: ['TensorFlow', 'Scikit-learn', 'Deep Learning', 'Reinforcement Learning'],
    tools: ['Git', 'ServiceNow', 'IoT Systems', 'Figma']
  };

  const experience = [
    {
      title: 'Graduate Research Assistant',
      company: 'University of Central Missouri – Overland Park, KS',
      period: 'Aug 2025 – Present',
      description: [
        'Developed a deep learning pipeline for ECG signal analysis using TensorFlow and Streamlit.',
        'Implemented CNN and LSTM models to classify cardiac arrhythmias with improved detection accuracy.',
        'Contributed to AI research supporting healthcare diagnosis and intelligent decision systems.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'HDFC ERGO General Insurance – Remote, India',
      period: 'Sep 2023 – Aug 2024',
      description: [
        'Built scalable ETL pipelines using Python and SQL for high-volume insurance data.',
        'Integrated APIs and automated workflows using Azure Data Factory and Power BI.',
        'Optimized SQL queries, reducing execution time by 30% and enhancing analytics performance.'
      ]
    },
    {
      title: 'ServiceNow Intern',
      company: 'Kaptius – Hyderabad, India',
      period: 'Jan 2023 – Aug 2023',
      description: [
        'Assisted in custom ServiceNow app development and workflow automation using Flow Designer.',
        'Created JavaScripts and dashboards for process optimization.',
        'Integrated REST APIs and supported CMDB data migration for client projects.'
      ]
    },
  ];

  const projects = [
    {
      title: 'AI-Powered Text-to-Story Video Generator',
      tech: 'Python, Transformers, spaCy, Stable Diffusion, Diffusers, Torch, MoviePy, Text-to-Speech, NLP, AI Video Synthesis',
      description: 'Built an AI-driven Text-to-Story Video Generator that converts user-written statements into narrated, AI-illustrated short films using NLP and Stable Diffusion..'
    },
    {
      title: 'Real-Time-Smart-Farm-IoT-Data-Pipeline-and-Analytics',
      tech: 'IoT Sensors, Real-Time Alerts, Python, SQLite, Streamlit',
      description: 'Designed an IoT solution to monitor environmental factors like humidity and soil moisture and send real-time alerts to farmers. Further store the data and Built a data ingestion layer storing time-series readings in SQLiteDeveloped an interactive Streamlit dashboard visualizing real-time sensor metrics with Plotly charts',
    },
    {
      title:'Customer Churn Prediction',
      tech: 'Python, Streamlit, Pandas, Scikit-learn',
      description: 'Developed a machine learning pipeline to analyze customer data and predict churn risk, enabling proactive retention strategies through interactive dashboards and data visualization.'
    },
    {
      title: 'ECG Signal Analysis and Classification Pipeline',
      tech: 'Python, TensorFlow, Keras, WFDB, Scikit-learn, Pandas, NumPy',
      description: 'Developed an end-to-end deep learning pipeline to classify cardiac risk levels from MIT-BIH ECG data using CNN and hybrid CNN-LSTM architectures. Implemented signal preprocessing, QRS detection, augmentation, normalization, and feature extraction for accurate beat classification.'
    },
  ];

  const research = [
    {
      title: 'A CNN-LSTM Based Deep Learning Pipeline for ECG Signal Analysis and Cardiac Arrhythmia Detection',
      description: 'Proposed a hybrid CNN-LSTM architecture for ECG classification using TensorFlow and Streamlit, improving diagnostic accuracy in healthcare AI systems.'
    },
    {
      title: 'Face-Recognition System Analysis using Deep Reinforcement Learning',
      description: 'Published research on scalable authentication using deep reinforcement learning for large datasets.'
    },
    {
      title: 'Adversarial Machine Learning: Mitigating Attacks and Improving Robustness',
      description: 'Explored adversarial attacks and defense strategies to strengthen deep learning model security.'
    }
  ];

  const certifications = [
    'Snowflake Hands-On Data Warehouse Training',
    'Snowflake Collaboration & Cost Estimation Workshop',
    'Microsoft Azure AI Fundamentals',
  ];
  // ==================================

  // Shared UI classes for dark glassmorphism
  const pageBg = "min-h-screen bg-gradient-to-b from-[#0d0c1d] via-[#1b1730] to-[#0d0c1d] text-gray-200";
  const glass = "bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl";
  const glowHover = "hover:shadow-[0_0_22px_rgba(168,85,247,0.35)] transition-all";
  const h2Grad = "text-4xl font-bold mb-8 flex items-center gap-2 text-cyan-400";
  const pillBtn = "px-8 py-3 rounded-full font-semibold transition-all";
  const sectionPad = "py-16 px-4";

  return (
    <div className={pageBg}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              RB
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
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
      <section id="home" className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            RB
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Rakshith Bodakuntla</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Data Engineer | AI & Machine Learning Enthusiast | Researcher
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className={`${pillBtn} bg-gradient-to-r from-cyan-500 to-purple-600 text-white ${glowHover} hover:-translate-y-1`}>
              View Projects
            </a>
            <a href="/Rakshith_Bodakuntla_Resume.pdf" target="_blank" className={`${pillBtn} border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-500/20 ${glowHover} flex items-center gap-2`}>
              <Download size={20} /> Resume
            </a>
            <a href="#contact" className={`${pillBtn} border-2 border-gray-600 text-gray-300 hover:bg-white/10`}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={sectionPad}>
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className={h2Grad}>
            <User /> About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            I’m a passionate Data Engineer and AI researcher pursuing my MS in Computer Science at the University of Central Missouri.  
            My experience spans developing scalable data pipelines, implementing deep learning solutions, and automating workflows in cloud environments.  
            I enjoy working at the intersection of <strong>Data Engineering</strong>, <strong>AI</strong>, and <strong>Cloud Systems</strong> — transforming complex data into meaningful insights.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className={h2Grad}>
            <Briefcase /> Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`${glass} ${glowHover} p-6`}>
                <h3 className="text-2xl font-bold text-purple-300">{exp.title}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300/90 space-y-1">
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
          <h2 className={h2Grad}>
            <Code /> Skills
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={`${glass} ${glowHover} p-6`}>
              <h3 className="text-xl font-semibold text-purple-300 mb-4 capitalize">{category}</h3>
              <ul className="space-y-2 text-gray-300">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className={h2Grad}>
            <Briefcase /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${glass} ${glowHover} p-8`}>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-cyan-300 font-semibold mb-4">{project.tech}</p>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className={sectionPad}>
        <div className="max-w-6xl mx-auto">
          <h2 className={h2Grad}>
            <BookOpen /> Research & Publications
          </h2>
          <div className="space-y-6">
            {research.map((paper, index) => (
              <div key={index} className={`${glass} ${glowHover} p-6`}>
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{paper.title}</h3>
                <p className="text-gray-300">{paper.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2 text-purple-300">
              <Award className="text-purple-300" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-white/10 backdrop-blur-md text-white p-4 rounded-xl flex items-center gap-3 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-shadow">
                  <Award size={24} className="text-purple-300" /> <span className="font-semibold text-gray-100">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={sectionPad}>
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className={h2Grad}>
            <Mail /> Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className={`${glass} ${glowHover} p-4 flex items-center gap-4`}>
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="font-semibold text-gray-100">Email</p>
                  <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-cyan-300 hover:underline">
                    bodakuntlarakshith1@gmail.com
                  </a>
                </div>
              </div>
              <div className={`${glass} ${glowHover} p-4 flex items-center gap-4`}>
                <Phone className="text-cyan-400" size={24} />
                <div>
                  <p className="font-semibold text-gray-100">Phone</p>
                  <a href="tel:+14694871318" className="text-cyan-300 hover:underline">
                    +1 (469) 487-1318
                  </a>
                </div>
              </div>
              <div className={`${glass} ${glowHover} p-4 flex items-center gap-4`}>
                <MapPin className="text-cyan-400" size={24} />
                <div>
                  <p className="font-semibold text-gray-100">Location</p>
                  <p className="text-gray-300">Kansas, USA</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/bodakuntlarakshith1/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-purple-300 transition">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/Rakshithbodakuntla" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-purple-300 transition">
                  <Github size={28} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${glass} ${glowHover} p-6 space-y-4`}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
              />
              <button
                onClick={handleContactSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-[0_0_16px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-gray-400 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          © 2025 Rakshith Bodakuntla. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
