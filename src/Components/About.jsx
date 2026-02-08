import React from 'react';
import '../Styles/LegalPages.css'; // Common CSS import kiya

const About = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        
        {/* Header Section */}
        <div>
          <h1>About W3coder</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555', marginTop: '-10px' }}>
            Learn Coding. Build Projects. Master Your Skills.
          </p>
        </div>

        {/* Introduction */}
        <section>
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>W3coder.in</strong>, your number one source for learning programming languages and web development. 
            We are dedicated to providing you with the best tutorials on <strong>Java, Python, HTML, CSS, JavaScript, and React</strong>, 
            with a focus on simplicity, real-world examples, and practical implementation.
          </p>
        </section>

        {/* Mission Statement (Special Class applied) */}
        <section className="mission-box">
          <h3>Our Mission</h3>
          <p>
            Our mission is to make coding education <strong>accessible, free, and easy to understand</strong> for everyone. 
            Whether you are a student, a fresh graduate, or someone looking to switch careers, W3coder is designed to help you 
            master the fundamentals and advance your career in the tech industry.
          </p>
        </section>

        {/* About the Founder */}
        <section>
          <h2>About the Founder</h2>
          <p>
            W3coder.in was founded by a <span className="highlight-text">Computer Science Engineer (B.Tech, 2024 Batch)</span>.
          </p>
          <p>
            As a recent graduate and passionate developer, I realized that many students struggle to find structured and 
            easy-to-understand coding resources. I started W3coder to bridge that gap. With a strong background in full-stack 
            development and a passion for teaching, I aim to simplify complex programming concepts for learners across India and the globe.
          </p>
        </section>

        {/* What We Offer */}
        <section>
          <h2>What You Will Learn Here</h2>
          <ul>
            <li><strong>Web Development:</strong> Master HTML, CSS, JavaScript, and React.js.</li>
            <li><strong>Programming Logic:</strong> Deep dive into Java, Python, and C.</li>
            <li><strong>Interview Prep:</strong> Focus on Data Structures (DSA) and technical interview questions.</li>
            <li><strong>Real Projects:</strong> Practical guides to building your own websites and apps.</li>
          </ul>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <h2>Connect With Us</h2>
          <p>
            We hope you enjoy our tutorials as much as we enjoy offering them to you. 
            If you have any questions, suggestions, or comments, please don't hesitate to contact us.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:w3coder.official@gmail.com">w3coder.official@gmail.com</a><br />
            <strong>Location:</strong> Kasganj, Uttar Pradesh, India
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;