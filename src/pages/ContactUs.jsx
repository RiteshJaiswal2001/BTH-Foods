import React from "react";
import "../styling/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        {/* --- Top Section --- */}
        <div className="contact-section">
          <div className="contact-card main-details">
            <h2>BTH Foods PVT. LTD.</h2>
            <p>
              Ganoli Road, Dharampur, Bettiah, 845438,
              <br />
              Bihar, India
            </p>

            <div className="contact-info-item">
              <h3>Office</h3>
              <p>8877990058</p>
            </div>

            <div className="contact-info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@bthfoods.com">info@bthfoods.com</a>
              </p>
            </div>
          </div>

          <div className="contact-card side-details">
            <div className="person-details">
              <h3>Bulk Buy & Dealership</h3>
              <p><strong>Helpline:</strong> 8877990058</p>
            </div>

            <div className="person-details">
              <h3>Whole Spices in Bulk</h3>
              <p><strong>Helpline:</strong> 7992373158</p>
              <p className="contact-note">
                Drop a quick WhatsApp message — we’ll respond with the best quote for your order.
              </p>
            </div>
          </div>
        </div>

        {/* --- Map Section --- */}
        <div className="map-section">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              title="BTH Foods Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7121.902992704123!2d84.56418900000001!3d26.809673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399369830331fa05%3A0xc85b67ce9537edcb!2sBth%20Foods%20%26%20Spices!5e0!3m2!1sen!2sin!4v1762160522365!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
