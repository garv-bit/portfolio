import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = Math.random() * 5 + 5 + "s";
        particlesContainer.appendChild(particle);
      }
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "📄 Smart Document Q&A System",
      description:
        "An intelligent RAG-based system that allows users to upload PDFs and chat with them using natural language. Built with LangChain for document processing, Groq's Llama 3.3 for fast inference, ChromaDB for vector storage, and Streamlit for the interface. Features include chat history, source citations, and semantic search.",
      tags: ["Python", "RAG", "LangChain", "Groq", "Streamlit", "ChromaDB"],
      github: "https://github.com/garv-bit/document-qa-rag",
      demo: null,
    },
    {
      id: 2,
      title: "⚡ Dormant-Aware Fraud Detection",
      description:
        "Advanced fraud detection system focusing on dormant account reactivation patterns. Uses machine learning to identify suspicious behavior in accounts that have been inactive, addressing a critical gap in traditional fraud detection systems.",
      tags: ["Python", "Machine Learning", "Fraud Detection", "Data Science"],
      github: null,
      demo: null,
    },
    {
      id: 3,
      title: "🪄 Your Next Project",
      description:
        "This space is reserved for your next magical creation. Whether it's a full-stack application, a machine learning model, or an innovative tool, this is where you'll showcase your next breakthrough!",
      tags: ["Coming Soon"],
      github: null,
      demo: null,
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="particles" id="particles"></div>
      <nav className="main-nav">
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section id="home" className="hero-section">
        <div className="container">
          <h1 className="hero-title">Garv Patel</h1>
          <p className="hero-subtitle">AI & Software Engineering Wizard</p>
          <p className="hero-description">
            Conjuring intelligent solutions through the art of code and machine
            learning. Where magic meets mathematics, and algorithms become
            enchantments.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Spells
            </button>
            <a
              href="https://drive.google.com/file/d/1qjWqC0zKZByiVSgaFa7frgPMzgyKW5Zr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About the Wizard</h2>
          <div className="card">
            <h3 className="card-title">My Journey</h3>
            <p className="card-text">
              Welcome to my digital spellbook! I'm a passionate AI and Software
              Engineer who believes that with the right combination of code,
              data, and creativity, we can create technological magic that
              transforms the world.
            </p>
            <p className="card-text">
              Like a student at Hogwarts mastering different magical
              disciplines, I've devoted myself to understanding the intricate
              arts of machine learning, deep learning, and software development.
              Each project is a new spell to master, each algorithm a new
              incantation to perfect.
            </p>
            <p className="card-text">
              My wand? Python, TensorFlow, and PyTorch. My patronus? Clean,
              efficient code that solves real-world problems. My house?
              Whichever one values innovation, curiosity, and the courage to
              tackle the impossible.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Magical Creations</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div
                    style={{
                      marginTop: "1.5rem",
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                          padding: "0.7rem 1.5rem",
                          fontSize: "0.95rem",
                        }}
                      >
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{
                          padding: "0.7rem 1.5rem",
                          fontSize: "0.95rem",
                        }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Send an Owl</h2>
          <div className="card contact-card">
            <p className="contact-intro">
              Interested in collaborating on magical projects? Have a challenge
              that needs solving? Let's connect and create something
              extraordinary together!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:garvptl05@gmail.com">garvptl05@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a
                  href="https://www.linkedin.com/in/garv-patel-08b745287/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <a
                  href="https://github.com/garv-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <p>&copy; 2026 Garv. Crafted with magic and code. ⚡</p>
      </footer>
    </div>
  );
};

export default Portfolio;
