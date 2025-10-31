import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Header.css";
import Bthlogo from "../assets/BthLogo.jpeg";

// Vendor logos
import amazonLogo from "../assets/amazon.jpg";
import blinkitLogo from "../assets/Blinkit.png";
import flipkartLogo from "../assets/flipkart.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVendorOpen, setIsVendorOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVendors = () => {
    setIsVendorOpen(!isVendorOpen);
  };

  const vendorLinks = [
    { id: "amazon", img: amazonLogo, url: "https://www.amazon.in/" },
    { id: "flipkart", img: flipkartLogo, url: "https://www.flipkart.com/" },
    { id: "blinkit", img: blinkitLogo, url: "https://www.blinkit.com/" },
  ];

  return (
    <header className="new-app-header">
      <div className="header-left">
        <div className="app-logo">
          <img src={Bthlogo} alt="Logo" />
        </div>

        {/* Hamburger menu button - only visible on mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`header-right ${isMenuOpen ? "menu-open" : ""}`}>
        <nav className="header-bottom-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/product-range">Product Range</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="order-container">
              <button className="order-button" onClick={toggleVendors}>
                Order Online ▾
              </button>

              {isVendorOpen && (
                <div className="header-vendors-popup">
                  <div className="vendor-grid">
                    {vendorLinks.map((vendor) => (
                      <a
                        key={vendor.id}
                        href={vendor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={vendor.img} alt={vendor.id} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
