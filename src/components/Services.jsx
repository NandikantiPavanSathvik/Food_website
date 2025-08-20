

import React from 'react';


function Services() {
  const serviceItems = [
    {
      id: 1,
      image: '/img/s1.png',
      title: 'Order',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!'
    },
    {
      id: 2,
      image: '/img/s2.png',
      title: 'Shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!'
    },
    {
      id: 3,
      image: '/img/s3.png',
      title: 'Delivered',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="heading">
        <span>Services</span>
        <h2>We provide best quality</h2>
      </div>

      <div className="service-container">
        {serviceItems.map(({ id, image, title, description }) => (
          <div className="s-box" key={id}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
