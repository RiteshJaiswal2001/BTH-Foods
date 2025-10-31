import React from "react";
import "../styling/Footer.css";
import BthLogo from "../assets/BthLogo.jpeg"; // use your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={BthLogo} alt="BTH Logo" className="footer-logo" />
          <p className="brand-text">
            Bringing the authentic taste of India’s spices to every kitchen.
            Freshly ground, naturally aromatic, and full of flavor.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/product-range">Product Range</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 123 Spice Market Road, New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@bthspices.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">🌐</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BTH Spices. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
