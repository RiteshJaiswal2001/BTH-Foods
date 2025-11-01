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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/product-range">Product Range</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Ganoli Road, Dharampur, Bettiah, Bihar</p>
          <p>📞 +91 79923 73158</p>
          <p>✉️ info@bthfoods.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/bth_foods?igsh=MTExbjE3cG51ZHdhZg==" aria-label="Facebook">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
                width="24"
                height="24"
              ></img>
            </a>

            <a href="https://www.instagram.com/bth_foods?igsh=MTExbjE3cG51ZHdhZg==" aria-label="Instagram">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram Logo"
                width="24"
                height="24"
              ></img>
            </a>

            <a href="https://in.linkedin.com/company/bth-foods" aria-label="LinkedIn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn Logo"
                width="24"
                height="24"
              ></img>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BTH Foods. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
