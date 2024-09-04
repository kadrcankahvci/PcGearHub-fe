// src/pages/About.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css'; // Stil dosyasını import ediyoruz

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to PcGearHub! We are a leading online retailer of high-quality computer components and accessories.
        Our mission is to provide our customers with the best products at competitive prices while offering
        exceptional customer service.
      </p>
      <div className="about-icons">
        <div className="about-icon">
          <FontAwesomeIcon icon={faUsers} size="3x" />
          <h3>Our Team</h3>
          <p>Dedicated professionals committed to excellence.</p>
        </div>
        <div className="about-icon">
          <FontAwesomeIcon icon={faLaptopCode} size="3x" />
          <h3>Innovation</h3>
          <p>Cutting-edge solutions to empower your technology needs.</p>
        </div>
        <div className="about-icon">
          <FontAwesomeIcon icon={faRocket} size="3x" />
          <h3>Growth</h3>
          <p>Rapidly expanding to serve you better every day.</p>
        </div>
      </div>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3> Doktor Efe  </h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Muhendis Talha</h3>
            <p>CTO</p>
          </div>
          {/* Diğer takım üyeleri */}
        </div>
      </div>
    </div>
  );
};

export default About;
