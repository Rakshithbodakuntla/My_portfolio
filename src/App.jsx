import React, { useState, useEffect } from "react"; 
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award,
  BookOpen, Code, Briefcase, User, Send, Star
} from "lucide-react";
// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import profileImage from './My_anime_img.jpg'; // Import the image

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // 1. FIX: Ensures the scroll position is reset to the top (0, 0) when the component mounts.

  const sections = ["home", "about", "experience", "skills", "projects", "data-science", "research", "contact"];

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

  const featuredProjects = [
    {
      title: "AI-Powered Text-to-Story Video Generator",
      tech: "Python, Transformers, spaCy, Stable Diffusion, Diffusers, Torch, MoviePy, Text-to-Speech, NLP, AI Video Synthesis",
      description: "Built an AI-driven Text-to-Story Video Generator that converts user-written statements into narrated, AI-illustrated short films using NLP and Stable Diffusion.",
      link: "YOUR_PROJECT_LINK_HERE" 
    },
    {
      title: "ECG Signal Analysis & Classification Pipeline",
      tech: "Python, TensorFlow, Keras, WFDB, Scikit-learn, Pandas, NumPy",
      description: "Developed an end-to-end ECG classification system using CNN and CNN-LSTM to detect cardiac abnormalities, forming a robust healthcare diagnosis tool.",
      link: "YOUR_PROJECT_LINK_HERE" 
    },
  ];
  
  const dataScienceProjects = [
    {
      title: "Real-Time Smart Farm IoT Data Pipeline and Analytics",
      tech: "IoT Sensors, Real-Time Alerts, Python, SQLite, Streamlit",
      description: "Designed an IoT solution for humidity and soil monitoring with real-time alerts and Streamlit dashboards for operational insights.",
      link: "YOUR_PROJECT_LINK_HERE" 
    },
    {
      title: "Customer Churn Prediction",
      tech: "Python, Streamlit, Pandas, Scikit-learn",
      description: "Developed a machine learning pipeline that predicts customer churn through data analytics and visualization dashboards, providing actionable insights for retention.",
      link: "YOUR_PROJECT_LINK_HERE" 
    },
  ];
  
  const projects = featuredProjects; 

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

  const card = "bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 hover:border-cyan-400/40 transition";

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
                  {item.replace('-', ' ')}
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
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO - UPDATED TO MATCH SHARED PAGE DESIGN */}
      <section id="home" className="pt-28 pb-16 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-white">Hi, I'm</span> <span className="text-cyan-400">Rakshith Bodakuntla</span>
          </h1>

          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            Data Engineer & AI Researcher
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming data into intelligent solutions with cutting-edge AI and machine 
            learning technologies. Specialized in **LLMs**, agentic AI, and scalable data 
            systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/Rakshith_Bodakuntla_Resume.pdf"
              target="_blank"
              // Prominent button styling
              className="px-10 py-3 bg-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:bg-cyan-700 transition flex items-center gap-2 transform hover:scale-105"
            >
              <Download size={20} /> Download Resume
            </a>

            <a 
              href="#contact" 
              // Bordered button styling
              className="px-10 py-3 border border-cyan-400/50 text-cyan-300 rounded-full font-semibold text-lg hover:bg-cyan-500/10 transition flex items-center gap-2 transform hover:scale-105"
            >
              <Mail size={20} /> Contact Me
            </a>
          </div>

          {/* Optional: Down arrow to guide user */}
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

          {/* ADD YOUR IMAGE HERE */}
          <div className="mb-8"> 
            <img
              src={profileImage}
              alt="Rakshith Bodakuntla"
              className="rounded-full w-40 h-40 object-cover mx-auto shadow-lg border-4 border-cyan-500/50"
            />
          </div>
          {/* END IMAGE ADDITION */}

          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            I’m a passionate Data Engineer and AI researcher pursuing my MS in Computer Science at the University of Central Missouri.
            My experience includes building scalable data pipelines, deep learning systems, and workflow automation in cloud environments.
          </p>
          
          {/* OPTIONAL: Add skill keywords for quick scanning */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="text-sm font-medium text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-900/20">LLMs</span>
            <span className="text-sm font-medium text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-900/20">Data Engineering</span>
            <span className="text-sm font-medium text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-900/20">Deep Learning</span>
            <span className="text-sm font-medium text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-900/20">Cloud</span>
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
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                
                <h4 className="text-lg font-semibold text-cyan-400 mt-4 mb-2">Key Achievements:</h4>

                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.keyAchievements.map((p, j) => (
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
                <h3 className="text-xl font-semibold text-white mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>

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

      {/* FEATURED PROJECTS (Swiper Carousel) */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Star /> Featured AI & LLM Projects
          </h2>

          {/* START SWIPER WRAPPER */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            className="mySwiper"
            
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            
            {projects.map((p, i) => (
              <SwiperSlide key={i} className="pb-12 pt-2">
                <div className={card + " h-full flex flex-col justify-between"}>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-cyan-300 font-semibold mb-4">{p.tech}</p>
                    <p className="text-gray-300">{p.description}</p>
                  </div>
                  <a href={p.link} target="_blank" className="mt-6 inline-block text-cyan-400 hover:text-white transition font-medium">
                    [View Source / Demo]
                  </a>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
          {/* END SWIPER WRAPPER */}

        </div>
      </section>
      
      {/* NEW SECTION: DATA SCIENCE PROJECTS */}
      <section id="data-science" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400 flex items-center gap-2">
            <Briefcase /> Data Science Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {dataScienceProjects.map((p, i) => (
              <div key={i} className={card}>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-cyan-300 font-semibold mb-4">{p.tech}</p>
                <p className="text-gray-300">{p.description}</p>
                <a href={p.link} target="_blank" className="mt-4 inline-block text-cyan-400 hover:text-white transition font-medium">
                  [View Source / Demo]
                </a>
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
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-gray-200 focus:ring-2 focus:ring-cyan-400 outline-none"
            ></textarea>
            <button
              onClick={handleContactSubmit}
              className="w-full px-8 py-3 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 border-t border-white/10 mt-12">
        <p>&copy; {new Date().getFullYear()} Rakshith Bodakuntla. All rights reserved.</p>
      </footer>
    </div>
  );
}
