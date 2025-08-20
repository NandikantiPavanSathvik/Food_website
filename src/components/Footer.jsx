


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
