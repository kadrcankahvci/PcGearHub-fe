// src/components/HeroBanner.jsx

import React from 'react';
import '../styles/HeroBanner.css'; // CSS dosyanızı buraya import edin
import heroImage from '../assets/images/hero-image.jpg'; // Resminizi buraya import edin

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-text">
        <h1>Discover the Best PC Peripherals</h1>
        <p>Explore our wide range of computer peripherals, from keyboards to mice, and enhance your computing experience.</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Banner" />
      </div>
    </div>
  );
};

export default HeroBanner;
