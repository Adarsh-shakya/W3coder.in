import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/footer.css';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <h2>W3<span className="highlight">coder</span></h2>
          <p>"Learn. Reflect. Rise."</p>
          <p>&copy; 2025 w3coder</p>
        </div>

        <div className="footer-section links">
  <h3>Quick Links</h3>
  <ul>
    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
    <li><Link to="/disclaimer">Disclaimer</Link></li>
  </ul>
</div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: w3coder.official@gmail.com</p>
          <p>Phone: +91-6395300903</p>
          <p>Kasganj, Uttar Pradesh</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/yourid" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built with ❤️ by Adarsh Shakya</p>
      </div>
    </footer>
  );
};

export default Footer;
