// src/components/About.jsx
import React from 'react';
import aboutImg from '../assets/img/about.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutImg} alt="About Us" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>We Speak the good <br />Food language</h2>
        <p>
          There are many variations passages of Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Necessitatibus minus inventore optio quia, deserunt eum magni!
          Voluptate quisquam aspernatur ipsum recusandae? Voluptatibus quo, unde debitis
          maxime earum architecto aperiam voluptatum.
        </p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
  );
}

export default About;
