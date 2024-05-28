import React from 'react';
import homeImage from '../assets/home-image.jpg'; // Update the path to match your file location

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Omantel License Platform</h1>
      <p>Find and manage AI licenses from various providers like AWS, Google, Microsoft, and more.</p>
      <img src={homeImage} alt="Home" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
    </div>
  );
};

export default Home;
