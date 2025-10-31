import "../styling/AboutUs.css";
import spices1 from "../assets/spices1.jpg";
import farmers from "../assets/farmer.jpg";
import turmeric from "../assets/turmeric1.jpg";
import cooking from "../assets/cooking.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-hero">
        <div className="hero-text">
          <h1>The Essence of True Flavor</h1>
          <p>
            At <b>BTH Spices</b>, we believe great taste begins with purity.
            Every spice we craft is a journey — from the fertile fields of India
            to your kitchen shelf — bringing you nature’s finest aromas and
            authentic flavors.
          </p>
        </div>
        <div className="hero-image">
          <img src={spices1} alt="Spices assortment" />
        </div>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Born from a love for authentic Indian flavors, <b>BTH Spices</b> was
          founded with the vision of reconnecting people to the roots of real,
          unadulterated spices. Every batch is sourced directly from farmers who
          share our passion for quality and sustainability.
        </p>
      </div>

      <div className="about-grid">
        <div className="grid-item">
          <img src={farmers} alt="Farmers harvesting spices" />
          <h3>From the Source</h3>
          <p>
            We partner with local farmers across India, ensuring fair trade
            practices and farm-fresh produce that retains the soul of our land.
          </p>
        </div>
        <div className="grid-item">
          <img src={turmeric} alt="Turmeric roots" />
          <h3>Crafted with Care</h3>
          <p>
            Our spices are carefully cleaned, roasted, and blended to preserve
            essential oils and ensure a rich, natural taste in every spoonful.
          </p>
        </div>
        <div className="grid-item">
          <img src={cooking} alt="Cooking with spices" />
          <h3>Tradition Meets Innovation</h3>
          <p>
            From timeless recipes to modern blends, we bring together tradition
            and creativity — helping every cook create something extraordinary.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <h2>Sustainably Indian</h2>
        <p>
          We’re proud to support eco-friendly farming, biodegradable packaging,
          and a zero-waste approach — ensuring our spices do good for both your
          health and the planet. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Natus quis nesciunt optio, eveniet adipisci
          voluptatum tenetur architecto enim ducimus provident aspernatur, rerum
          est soluta accusantium veritatis porro autem laborum nobis!
        </p>
        <Link to="/product-range" className="order-spices-btn">
          Order Your Spices
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
