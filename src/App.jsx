import React, { useState } from "react";
import {
  Menu, X, Mail, Phone, MapPin, Download, Github, Linkedin, Award,
  BookOpen, Code, Briefcase, User, Send
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const sections = ["home", "about", "experience", "skills", "projects", "research", "contact"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0c1d] via-[#1b1730] to-[#0d0c1d] text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            RB
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-cyan-400 ${
                  activeSection === item ? "text-cyan-400 font-semibold" : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
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
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            RB
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Rakshith Bodakuntla
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Data Engineer | AI & Machine Learning Enthusiast | Researcher
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="/Rakshith_Bodakuntla_Resume.pdf"
              target="_blank"
              className="px-8 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all flex items-center gap-2"
            >
              <Download size={20} /> Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Shared container styles */}
      const cardClass = "bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all";

      {/* About */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-4xl font-bold mb-8 flex items-center justify-center md:justify-start gap-2 text-cyan-400">
            <User /> About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            I’m a passionate Data Engineer and AI researcher pursuing my MS in Computer Science at
            the University of Central Missouri. My experience spans developing scalable data
            pipelines, implementing deep learning solutions, and automating workflows in cloud
            environments. I enjoy working at the intersection of <strong>Data Engineering</strong>,{" "}
            <strong>AI</strong>, and <strong>Cloud Systems</strong> — transforming complex data into
            meaningful insights.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2 text-cyan-400">
            <Briefcase /> Experience
          </h2>
          <div className="space-y-8">
            {/* Replace with your dynamic data */}
            {/* Example card */}
            <div className={`${cardClass} p-6`}>
              <h3 className="text-2xl font-bold text-purple-400">
                Graduate Research Assistant
              </h3>
              <p className="text-gray-300">University of Central Missouri – Overland Park, KS</p>
              <p className="text-sm text-gray-500 mb-3">Aug 2025 – Present</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Developed a deep learning pipeline for ECG signal analysis using TensorFlow and Streamlit.</li>
                <li>Implemented CNN and LSTM models for cardiac arrhythmia classification.</li>
                <li>Contributed to AI research supporting healthcare diagnosis systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-2 text-cyan-400">
            <Code /> Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Languages", list: ["Python", "Java", "SQL", "C"] },
              { title: "Data Engineering", list: ["Snowflake", "Azure Data Factory", "ETL Pipelines", "Data Warehousing"] },
              { title: "Analytics", list: ["Power BI", "Streamlit", "Tableau", "REST APIs"] },
              { title: "Machine Learning", list: ["TensorFlow", "Scikit-learn", "Deep Learning", "Reinforcement Learning"] },
              { title: "Tools", list: ["Git", "ServiceNow", "IoT Systems", "Figma"] },
            ].map((cat, i) => (
              <div key={i} className={`${cardClass} p-6`}>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{cat.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {cat.list.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-4xl font-bold mb-10 flex items-center justify-center md:justify-start gap-2 text-cyan-400">
            <Mail /> Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className={`${cardClass} p-4 flex items-center gap-4`}>
                <Mail className="text-cyan-400" /> 
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:bodakuntlarakshith1@gmail.com" className="text-cyan-300 hover:underline">
                    bodakuntlarakshith1@gmail.com
                  </a>
                </div>
              </div>
              <div className={`${cardClass} p-4 flex items-center gap-4`}>
                <Phone className="text-cyan-400" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+1 (469) 487-1318</p>
                </div>
              </div>
              <div className={`${cardClass} p-4 flex items-center gap-4`}>
                <MapPin className="text-cyan-400" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Kansas, USA</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://linkedin.com/in/bodakuntlarakshith1/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-purple-400 transition">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/Rakshithbodakuntla" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-purple-400 transition">
                  <Github size={28} />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className={`${cardClass} p-6 space-y-4`}>
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
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} /> Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-gray-400 py-8 text-center border-t border-white/10">
        © 2025 Rakshith Bodakuntla. All rights reserved.
      </footer>
    </div>
  );
}
