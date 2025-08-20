// // src/components/Footer.jsx
// import React from 'react';
// function Footer() {
//   return (
//     <section id="contact">
//       <div className="footer">
//         <div className="main">
//           <div className="col">
//             <h4>Menu Links</h4>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Menu</a></li>
//               <li><a href="#">Service</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div className="col">
//             <h4>Our Services</h4>
//             <ul>
//               <li><a href="#">Web Design</a></li>
//               <li><a href="#">Web Development</a></li>
//               <li><a href="#">Marketing</a></li>
//               <li><a href="#">Product Management</a></li>
//               <li><a href="#">Graphic Design</a></li>
//             </ul>
//           </div>
//           <div className="col">
//             <h4>Information</h4>
//             <ul>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Delivery Information</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms & Conditions</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;


import React from 'react';

function Footer() {
  const footerData = [
    {
      title: 'Menu Links',
      links: ['Home', 'About', 'Menu', 'Service', 'Contact']
    },
    {
      title: 'Our Services',
      links: ['Web Design', 'Web Development', 'Marketing', 'Product Management', 'Graphic Design']
    },
    {
      title: 'Information',
      links: ['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions']
    }
  ];

  return (
    <section id="contact">
      <div className="footer">
        <div className="main">
          {footerData.map((section, index) => (
            <div className="col" key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
