import React from 'react';
import '../styling/ContactUs.css'; // Make sure the path to your CSS file is correct

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        {/* Top Section */}
        <div className="contact-section top-section">
          <div className="contact-card main-details">
            <h2>DS SPICECO PVT. LTD.</h2>
            <p>
              DS Headquarters, C, 6-10, Dharampal Satyapal (DS) Road,
              <br />
              Sector - 67, Noida – 201309
            </p>
            <div className="contact-info-item">
              <h3>Office</h3>
              <p>0120-4032200</p>
            </div>
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:foods@dsgroup.com">foods@dsgroup.com</a>
              </p>
            </div>
          </div>

          <div className="contact-card side-details">
            <div className="contact-info-item">
              <h3>Consumer Care Helpline No.</h3>
              <p>0120-4832860</p>
            </div>
            <div className="contact-info-item">
              <h3>Google Map</h3>
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-link"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="contact-section bottom-section">
          <div className="contact-card person-details">
            <h3>CPC</h3>
            <div className="contact-info-item">
              <h4>Helpline No.</h4>
              <p>9717399616</p>
            </div>
            <div className="contact-info-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:chandra.srivastav@dsgroup.com">
                  chandra.srivastav@dsgroup.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-card person-details">
            <h3>CSD</h3>
            <div className="contact-info-item">
              <h4>Helpline No.</h4>
              <p>8800988225</p>
            </div>
            <div className="contact-info-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:ravi.upreti@dsgroup.com">
                  ravi.upreti@dsgroup.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-card action-card">
            <button className="action-button">BULK BUY &gt;</button>
            <button className="action-button">DEALERSHIP &gt;</button>
            <p className="note">*Bulk order is equal to 10kg or more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;