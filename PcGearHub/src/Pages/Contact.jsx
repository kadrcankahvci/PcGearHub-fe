// src/pages/Contact.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css'; // Stil dosyasını import ediyoruz

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us!</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <h3>Phone</h3>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <h3>Email</h3>
          <p>support@pcgearhub.com</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          <h3>Address</h3>
          <p>123 Tech Street, Silicon Valley, CA 94043</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
