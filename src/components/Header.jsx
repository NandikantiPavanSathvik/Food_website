
import React from 'react'; // ✅ Required for JSX

function Header() {
  return (
    <header>
      <a href="#" className="logo">Foods</a>
      <div className="bx bx-food-menu bx-flip-horizontal" id="menu-icon"></div>
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
