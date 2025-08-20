// // src/components/Menu.jsx
// import React from 'react';
// import food1 from '../assets/img/food1.png';
// import food2 from '../assets/img/food2.png';
// import food3 from '../assets/img/food3.png';

// function Menu() {
//   return (
//     <section className="menu" id="menu">
//       <div className="heading">
//         <span>Food Menu</span>
//         <h2>Fresh taste and great food</h2>
//       </div>
//       <div className="menu-container">
//         <div className="box">
//           <div className="box-img">
//             <img src={food1} alt="Veg Burger" />
//           </div>
//           <h2>Veg Burger</h2>
//           <h3>Tasty Food</h3>
//           <span>$11.00</span>
//         </div>
//         <div className="box">
//           <div className="box-img">
//             <img src={food2} alt="Chicken Burger" />
//           </div>
//           <h2>Chicken Burger</h2>
//           <h3>Tasty Food</h3>
//           <span>$11.00</span>
//         </div>
//         <div className="box">
//           <div className="box-img">
//             <img src={food3} alt="Chicken Fries" />
//           </div>
//           <h2>Chicken Fries</h2>
//           <h3>Tasty Food</h3>
//           <span>$11.00</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Menu;

import React from 'react';
import food1 from '../assets/img/food1.png';
import food2 from '../assets/img/food2.png';
import food3 from '../assets/img/food3.png';

function Menu() {
  const menuItems = [
    { id: 1, image: food1, title: 'Veg Burger', subtitle: 'Tasty Food', price: '$11.00' },
    { id: 2, image: food2, title: 'Chicken Burger', subtitle: 'Tasty Food', price: '$11.00' },
    { id: 3, image: food3, title: 'Chicken Fries', subtitle: 'Tasty Food', price: '$11.00' }
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
