import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";
import redChilliImg from "../assets/redChilli.webp";
import turmericImg from "../assets/turmeric.jpeg";
import corianderImg from "../assets/coriander.jpeg";

const images = [
  "https://www.octavius.in/cdn/shop/files/spiceboxgroundoldimage4_1.jpg?v=1686999875",
  "https://someindiangirl.com/wp-content/uploads/2022/03/masala-dabba-2-1-of-1-scaled.jpg",
  "https://www.agrifarming.in/wp-content/uploads/The-Golden-Root-2.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Function to scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="home-hero-section">
        <img src={images[currentIndex]} alt="Spices Banner" className="home-hero-image" />
        <div className="home-hero-content">
          <h1>Experience the Authentic Taste of India</h1>
          <p>Freshly ground spices, handpicked from the farms to your kitchen.</p>
          <Link to="/product-range" onClick={scrollToTop}>
            <button className="home-order-btn">Explore Products</button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="home-about-preview">
        <div className="home-about-text">
          <h2>Our Legacy of Purity</h2>
          <p>
            At <strong>BTH Spices</strong>, we bring you the essence of Indian flavors — pure,
            vibrant, and rich in aroma. For generations, we’ve partnered with trusted farmers to
            deliver spices that transform every meal into a masterpiece.
          </p>
          <Link to="/about-us" onClick={scrollToTop}>
            <button className="home-learn-more-btn">Learn More</button>
          </Link>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67udhOL-UuJguSmdgQYQ7Ds77yDn0CC3F3g&s"
          alt="Farmers harvesting spices"
          className="home-about-image"
        />
      </section>

      {/* Best Sellers */}
      <section className="home-best-sellers">
        <h2>Our Best Sellers</h2>
        <div className="home-product-grid">
          {[
            { name: "Turmeric Powder", img: turmericImg },
            { name: "Red Chili Powder", img: redChilliImg },
            { name: "Coriander Seeds", img: corianderImg },
          ].map((item, idx) => (
            <div className="home-product-card" key={idx}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <Link to="/product-range" onClick={scrollToTop}>
                <button className="home-buy-btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-why-choose">
        <h2>Why Choose BTH Spices?</h2>
        <div className="home-features-grid">
          <div className="home-feature">
            <h3>🌿 100% Natural</h3>
            <p>No additives, no preservatives — just pure, natural flavor.</p>
          </div>
          <div className="home-feature">
            <h3>👨‍🌾 Farm Fresh</h3>
            <p>Directly sourced from trusted Indian farmers for peak freshness.</p>
          </div>
          <div className="home-feature">
            <h3>🧂 Premium Quality</h3>
            <p>Every batch is carefully ground and packed to preserve aroma.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="home-testimonial-grid">
          <div className="home-testimonial-card">
            <p>
              “Absolutely love their turmeric! The freshness and aroma are unmatched. It truly
              elevates every dish.”
            </p>
            <h4>– Priya Sharma</h4>
          </div>
          <div className="home-testimonial-card">
            <p>
              “BTH Spices deliver on their promise of purity. The packaging is great, and the flavor
              is authentic.”
            </p>
            <h4>– Arjun Patel</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
