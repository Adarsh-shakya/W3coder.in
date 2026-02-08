import React from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaYoutube, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import '../Styles/LegalPages.css'; // Wahi Common CSS file

const Contact = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        
        {/* Header */}
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have questions regarding our tutorials or need help? We'd love to hear from you.</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          
          {/* Email Card */}
          <div className="contact-card">
            <div className="icon-box"><FaEnvelope /></div>
            <h3>Email Us</h3>
            <p>For support & queries:</p>
            <a href="mailto:w3coder.official@gmail.com">w3coder.official@gmail.com</a>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="icon-box"><FaPhone /></div>
            <h3>Call Us</h3>
            <p>Mon - Sat (10AM - 6PM)</p>
            <p>+91 6395300903</p>
          </div>

          {/* Address Card */}
          <div className="contact-card">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <h3>Visit Us</h3>
            <p>Kasganj, Uttar Pradesh</p>
            <p>India - 207123</p>
          </div>

        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest tutorials and projects.</p>
          
          <div className="social-icons">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link linkedin"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link github"
            >
              <FaGithub />
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;