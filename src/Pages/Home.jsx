import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/coding.webp";
import "../Styles/Home.css";
import SEO from "../SEO.jsx";

const Home = () => {
  // Course Data Array for clean mapping
  const courses = [
    { title: "Python", desc: "Learn backend, AI, and scripting.", link: "/course/python", color: "#3776AB", bg: "#f0f8ff" },
    { title: "Java", desc: "Master object-oriented programming.", link: "/course/java", color: "#EA2D2E", bg: "#fff0f0" },
    { title: "HTML", desc: "Build the skeleton of web pages.", link: "/course/html", color: "#E34F26", bg: "#fff3f0" },
    { title: "CSS", desc: "Style and design beautiful websites.", link: "/course/css", color: "#1572B6", bg: "#f0f8ff" },
    { title: "JavaScript", desc: "Add interactivity to your web pages.", link: "/course/javascript", color: "#F7DF1E", bg: "#fffdf0", textColor: "#000" }
  ];

  return (
    <div className="home-container">
      {/* SEO */}
      <SEO 
        title="W3Coder - Learn Java, Python, HTML, CSS & JS Free"
        description="Free coding tutorials for beginners. Learn Java, Python, Web Development and more at W3Coder."
        name="W3Coder Team"
        type="website"
      />

      {/* MODERN HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">🚀 100% Free Coding Tutorials</div>
          <h1 className="hero-title">
            Master <span className="highlight-text"
            style={{ color: "#f39c12" }}
            >Web Development</span> & Programming From Scratch
          </h1>
          <p className="hero-subtitle">
            Interactive, step-by-step notes designed specifically for 1st & 2nd-year college students. Start building your tech career today.
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="btn-primary">Explore Courses</a>
            <Link to="/course/python" className="btn-secondary">Start Python</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Learn to code at w3coder.in" className="floating-img" />
          {/* A sleek background glow for the image */}
          <div className="img-glow"></div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="features-strip">
        <div className="feature-item">
          <h3>📘 Simple Notes</h3>
          <p>Easy to understand concepts</p>
        </div>
        <div className="feature-item">
          <h3>💻 Live Playground</h3>
          <p>Test code directly in browser</p>
        </div>
        <div className="feature-item">
          <h3>🎓 Placement Ready</h3>
          <p>Interview focused topics</p>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="courses-section">
        <div className="section-header">
          <h2>Choose Your Path</h2>
          <p>Select a language or technology to begin your journey.</p>
        </div>
        
        <div className="course-grid">
          {courses.map((course, index) => (
            <SubjectCard key={index} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

// ENHANCED SUBJECT CARD
const SubjectCard = ({ title, desc, link, color, bg, textColor = "#fff" }) => {
  return (
    <Link to={link} className="card-link">
      <div className="subject-card" style={{ borderColor: color }}>
        <div className="card-icon" style={{ backgroundColor: bg, color: color }}>
          {/* We use first letter as an icon fallback */}
          {title.substring(0, 1)}
        </div>
        <div className="card-content">
          <h3 style={{ color: title === 'JavaScript' ? '#b5a300' : color }}>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="card-arrow" style={{ color: color }}>➔</div>
      </div>
    </Link>
  );
};

export default Home;
