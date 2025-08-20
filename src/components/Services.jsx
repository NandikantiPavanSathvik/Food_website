// // src/components/Services.jsx
// import React from 'react';
// import s1 from '../assets/img/s1.png';
// import s2 from '../assets/img/s2.png';
// import s3 from '../assets/img/s3.png';

// function Services() {
//   return (
//     <section className="services" id="services">
//       <div className="heading">
//         <span>Services</span>
//         <h2>We provide best quality</h2>
//       </div>
//       <div className="service-container">
//         <div className="s-box">
//           <img src={s1} alt="Order" />
//           <h3>Order</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!</p>
//         </div>
//         <div className="s-box">
//           <img src={s2} alt="Shipping" />
//           <h3>Shipping</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!</p>
//         </div>
//         <div className="s-box">
//           <img src={s3} alt="Delivered" />
//           <h3>Delivered</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React from 'react';
import s1 from '../assets/img/s1.png';
import s2 from '../assets/img/s2.png';
import s3 from '../assets/img/s3.png';

function Services() {
  const serviceItems = [
    {
      id: 1,
      image: s1,
      title: 'Order',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!'
    },
    {
      id: 2,
      image: s2,
      title: 'Shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, odit!'
    },
    {
      id: 3,
      image: s3,
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
