// src/components/Home.jsx
import React from 'react';
import homeImg from '../assets/img/home.png';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>Full Website</h1>
        <h2>Food The<br />Most Precious Things</h2>
        <a href="#" className="btn">Today's Menu</a>
      </div>
      <div className="home-img">
        <img src={homeImg} alt="Delicious Food" />
      </div>
    </section>
  );
}

export default Home;
