import React, { useState } from "react";
import "../styling/ProductRange.css";

// Images
import redChilliImg from "../assets/Jeera.jpeg";
import turmericImg from "../assets/turmeric.jpeg";
import corianderImg from "../assets/coriander.jpeg";
import garamMasalaImg from "../assets/GaramMasala.jpeg"
import kaliMirchImg from "../assets/kaliMirch.jpeg"
import mixMasalaImg from "../assets/MixMasala2.jpeg"
import amazonLogo from "../assets/amazon.jpg";
import blinkitLogo from "../assets/Blinkit.png";
import flipkartLogo from "../assets/flipkart.jpg";

const products = [
  {
    id: 1,
    name: "Red Chilli Powder",
    hindiName: "लाल मिर्च",
    description:
      "Adds heat, flavor, and vibrant color to every Indian dish. Made with low temperature grinding to preserve freshness.",
    sizes: "500g | 200g | 100g | 50g",
    image: redChilliImg,
  },
  {
    id: 2,
    name: "Turmeric Powder",
    hindiName: "हल्दी",
    description:
      "Pure turmeric with rich color and aroma. Enhances taste and offers natural health benefits.",
    sizes: "500g | 200g | 100g | 50g",
    image: turmericImg,
  },
  {
    id: 3,
    name: "Coriander Powder",
    hindiName: "धनिया",
    description:
      "Ground from premium coriander seeds, this powder adds freshness and depth to curries and chutneys.",
    sizes: "500g | 200g | 100g | 50g",
    image: corianderImg,
  },
    {
    "id": 4,
    "name": "Garam Masala",
    "hindiName": "गरम मसाला",
    "description": "A potent, aromatic blend of whole spices, perfect for adding a warm, fragrant finish to a variety of Indian dishes.",
    "sizes": "100g | 50g | 20g",
    "image": garamMasalaImg
  },
  {
    "id": 5,
    "name": "Black Pepper Powder",
    "hindiName": "काली मिर्च",
    "description": "Made from finely ground peppercorns, this powder provides a sharp, pungent heat and robust flavor to any culinary creation.",
    "sizes": "100g | 50g | 20g",
    "image": kaliMirchImg
  },
  {
    "id": 6,
    "name": "Mix Masala",
    "hindiName": "मिक्स मसाला",
    "description": "A versatile, all-purpose spice blend expertly crafted to bring a balanced and delicious flavor to vegetable dishes, curries, and snacks.",
    "sizes": "500g | 200g | 100g | 50g",
    "image": mixMasalaImg
  }

];

const ProductRange = () => {
  const [openProduct, setOpenProduct] = useState(null);

  // Vendor links — replace with your real URLs
  const vendorLinks = [
    { id: "amazon", img: amazonLogo, url: "https://www.amazon.in/" },
    { id: "flipkart", img: flipkartLogo, url: "https://www.flipkart.com/" },
    { id: "blinkit", img: blinkitLogo, url: "https://www.blinkit.com/" },
  ];

  const toggleVendors = (id) => {
    setOpenProduct(openProduct === id ? null : id);
  };

  return (
    <section className="product-range-page">
      <h1 className="page-title">Our Product Range</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <h2>
                {product.name}{" "}
                <span className="hindi">({product.hindiName})</span>
              </h2>
              <p className="description">{product.description}</p>
              <p className="sizes">
                <strong>Available Sizes:</strong> {product.sizes}
              </p>

              <div
                className="order-section"
                onMouseEnter={() => setOpenProduct(product.id)}
                onMouseLeave={() => setOpenProduct(null)}
              >
                <button
                  className="order-btn"
                  onClick={() => toggleVendors(product.id)}
                >
                  Order Online ▸
                </button>

                {openProduct === product.id && (
                  <div className="vendors-popup">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
