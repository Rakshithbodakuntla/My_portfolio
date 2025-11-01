import React, { useState } from 'react';
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award,
  BookOpen, Code, Briefcase, User, GraduationCap, Send
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = () => {
    const mailtoLink = `mailto:bodakuntlarakshith1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoLink;
  };

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
      description: 'Designed an IoT solution to monitor environmental factors like humidity and soil moisture and send real-time alerts to farmers. Further store the data and Built a data ingestion layer storing time-series readings in SQLite
        "Developed an interactive Streamlit dashboard visualizing real-time sensor metrics with Plotly charts',
    },
    {
      title: 'Data Engineering Portfolio Projects',
      tech: 'Python, SQL, Snowflake',
      description: 'Developed sample data pipelines, dashboards, and Snowflake workflows showcasing modern cloud data architecture.'
    },
    {
      title: 'Car Rental System',
      tech: 'Java, MySQL, Figma',
      description: 'Built a platform that allows users to rent cars remotely. Developed the backend using Java & MySQL and designed UI in Figma.'
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
    'TASK Oracle Database Design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RB
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'research', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'experience', 'skills', 'projects', 'research', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-blue-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-xl">
            RB
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rakshith Bodakuntla</span> 
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
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

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
            <User className="text-blue-600" /> About Me
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
            I’m a passionate Data Engineer and AI researcher pursuing my MS in Computer Science at the University of Central Missouri.  
            My experience spans developing scalable data pipelines, implementing deep learning solutions, and automating workflows in cloud environments.  
            I enjoy working at the intersection of <strong>Data Engineering</strong>, <strong>AI</strong>, and <strong>Cloud Systems</strong> — transforming complex data into meaningful insights.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
            <Briefcase className="text-blue-600" /> Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">{exp.title}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
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
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
            <Code className="text-blue-600" /> Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 capitalize">{category}</h3>
                <ul className="space-y-2 text-gray-700">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
            <Briefcase className="text-blue-600" /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{project.tech}</p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2">
            <BookOpen className="text-blue-600" /> Research & Publications
          </h2>
          <div className="space-y-6">
            {research.map((paper, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow">
                <h3 className="text-2xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-700">{paper.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-purple-600" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl flex items-center gap-3">
                  <Award size={24} /> <span className="font-semibold">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-4xl font-bold mb-10 flex items-center justify-center md:justify-start gap-2">
            <Mail className="text-blue-600" /> Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-blue-600 hover:underline">
                    bodakuntlarakshith1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+14694871318" className="text-blue-600 hover:underline">
                    +1 (469) 487-1318
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Missouri, USA</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://linkedin.com/in/rakshithbodakuntla" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><Linkedin size={28} /></a>
                <a href="https://github.com/Rakshithbodakuntla" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><Github size={28} /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
              />
              <button
                onClick={handleContactSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          © 2025 Rakshith Bodakuntla. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
