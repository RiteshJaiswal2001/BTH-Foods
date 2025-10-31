import React, { useState, useEffect } from "react";
import "../styling/PosterSlider.css"; 
import poster1 from "../assets/poster1.jpeg";
import poster2 from "../assets/poster2.jpeg";
import mix from "../assets/mixMasala.jpeg"


const posters = [
  {
    id: 1,
    image: mix,
    alt: "Promotional Poster 1",
  },
  {
    id: 2,
    image: poster2,
    alt: "Promotional Poster 2",
  },
  {
    id: 3,
    image:
      "https://catchfoods.com/wp-content/uploads/2024/08/table-top-range-1.png",
    alt: "Promotional Poster 3",
  },
];

const PosterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000); // Change poster every 5 seconds (5000ms)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [posters.length]); // Re-run effect if posters array length changes

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="poster-slider-container">
      <div className="poster-slider">
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            className={`poster-slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${poster.image})` }}
          ></div>
        ))}
      </div>
      <div className="slider-indicators">
        {posters.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PosterSlider;
