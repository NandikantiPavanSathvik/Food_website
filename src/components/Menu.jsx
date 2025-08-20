

import React from 'react';


function Menu() {
  const menuItems = [
    { id: 1, image:'/public/img/food1.png', title: 'Veg Burger', subtitle: 'Tasty Food', price: '$11.00' },
    { id: 2, image: '/public/img/food2.png', title: 'Chicken Burger', subtitle: 'Tasty Food', price: '$11.00' },
    { id: 3, image: '/public/img/food3.png', title: 'Chicken Fries', subtitle: 'Tasty Food', price: '$11.00' }
  ];

  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>Food Menu</span>
        <h2>Fresh taste and great food</h2>
      </div>

      <div className="menu-container">
        {menuItems.map(({ id, image, title, subtitle, price }) => (
          <div className="box" key={id}>
            <div className="box-img">
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <span>{price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
