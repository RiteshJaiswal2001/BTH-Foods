import React, { useState, useEffect, useRef } from "react";
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
  const vendorPopupRef = useRef(null); // ✅ reference for popup container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVendors = () => {
    setIsVendorOpen(!isVendorOpen);
  };

  // ✅ Close menu + vendor popup + scroll to top
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsVendorOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Detect clicks outside vendor popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        vendorPopupRef.current &&
        !vendorPopupRef.current.contains(event.target)
      ) {
        setIsVendorOpen(false);
      }
    };

    // Attach listener only when popup is open
    if (isVendorOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVendorOpen]);

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
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product-range" onClick={handleLinkClick}>
                Product Range
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
            <li className="order-container" ref={vendorPopupRef}>
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
                        onClick={handleLinkClick}
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
