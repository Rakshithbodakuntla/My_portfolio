import React, { useState } from 'react';
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award, BookOpen, Code,
  Briefcase, User, GraduationCap, Send
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

  // Updated skillset
  const skills = {
    languages: ['Python', 'SQL', 'Java', 'C'],
    dataEngineering: ['Snowflake', 'Azure Data Factory', 'ETL Pipelines', 'Data Warehousing'],
    cloudPlatforms: ['Azure', 'AWS (Basics)', 'GCP (Familiarity)'],
    snowflakeTools: ['Snowpipe', 'Streams & Tasks', 'Time Travel', 'Secure Data Sharing', 'Streamlit'],
    machineLearning: ['TensorFlow', 'Scikit-learn', 'Power BI', 'Tableau'],
    databases: ['MySQL', 'Oracle', 'PostgreSQL'],
    tools: ['Git', 'REST APIs', 'ServiceNow'],
  };

  const projects = [
    {
      title: 'Self-Driving Car Rental System',
      tech: 'Java, MySQL, Figma',
      description:
        'Developed a platform enabling users to rent vehicles directly from owners remotely. Built with Java and MySQL, and designed an intuitive UI using Figma.',
    },
    {
      title: 'Digital Farming using IoT',
      tech: 'IoT Sensors, Real-Time Monitoring',
      description:
        'Designed an IoT-based smart farming system that monitors soil moisture, humidity, and temperature in real time. Enabled automated alerts for precision agriculture.',
    },
  ];

  const certifications = [
    'Snowflake Hands-On Data Warehouse Training',
    'Snowflake Essentials: Collaboration, Marketplace & Cost Estimation',
    'Microsoft Azure AI Fundamentals',
    'CISCO Certified Network Associate (CCNA)',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RB</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'snowflake', 'research', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-600 transition-colors ${activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'snowflake', 'research', 'contact'].map((item) => (
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
          <div className="inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">RB</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rakshith Bodakuntla</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Engineer | Snowflake Enthusiast | AI & Cloud Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              View Projects
            </button>
            <a
              href="/Rakshith_Bodakuntla_Snowflake_Solutions_Architect.pdf"
              download
              className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 flex items-center gap-2"
            >
              <Download size={20} /> Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transform hover:-translate-y-1 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I’m <strong>Rakshith Bodakuntla</strong>, a Data Engineer and AI Researcher pursuing my <strong>MS in Computer Science</strong> at the <strong>University of Central Missouri</strong>.
                I specialize in <strong>Snowflake Data Cloud, Azure Data Factory, and ETL pipeline automation</strong>.
              </p>
              <p>
                My work bridges <strong>data engineering</strong> and <strong>AI analytics</strong>, focusing on transforming raw data into meaningful insights through scalable, cloud-based architectures.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-blue-600" /> Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-lg">MSc Computer Science</h4>
                  <p className="text-gray-600">University of Central Missouri</p>
                  <p className="text-sm text-gray-500">2024 – Present | CGPA: 3.85</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold text-lg">BTech Computer Science</h4>
                  <p className="text-gray-600">Vaagdevi College of Engineering</p>
                  <p className="text-sm text-gray-500">2019 – 2023 | CGPA: 3.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 capitalize text-blue-600">{category}</h3>
                {items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{project.tech}</p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snowflake Projects */}
      <section id="snowflake" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Snowflake Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Cloud Data Pipeline Automation</h3>
              <p className="text-blue-600 font-semibold mb-4">Snowflake | Azure Data Factory | Python | SQL</p>
              <p className="text-gray-700">
                Designed and implemented Snowflake-based ETL pipelines integrating APIs and Azure Blob Storage using Snowpipe, Streams & Tasks. Automated ingestion and enabled Secure Data Sharing for real-time analytics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Performance Tuning & Cost Optimization</h3>
              <p className="text-blue-600 font-semibold mb-4">Snowflake | Power BI | Query Profiling</p>
              <p className="text-gray-700">
                Improved query performance through caching and partitioning. Built Power BI dashboards to monitor workload and optimize Snowflake resource usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Research & Publications</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-2">
                A CNN-LSTM Based Deep Learning Pipeline for ECG Signal Analysis and Cardiac Arrhythmia Detection
              </h3>
              <p className="text-gray-700">
                Proposed hybrid CNN-LSTM architecture for ECG classification using TensorFlow and Streamlit, enhancing diagnostic accuracy in healthcare AI.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-2">Face Recognition System using Deep Reinforcement Learning</h3>
              <p className="text-gray-700">Published research on scalable authentication using deep RL for large-scale systems.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow">
              <h3 className="text-2xl font-bold mb-2">Adversarial Machine Learning</h3>
              <p className="text-gray-700">Explored attack detection and model robustness improvement for secure AI systems.</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-purple-600" size={32} />
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl flex items-center gap-3 hover:shadow-lg transition-shadow"
                >
                  <Award size={24} />
                  <span className="font-semibold">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-blue-600 hover:underline">
                    bodakuntlarakshith1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+14694871318" className="text-blue-600 hover:underline">
                    +1 (469) 487-1318
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Missouri, USA</p>
                </div>
              </div>
            </div>

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
                on
