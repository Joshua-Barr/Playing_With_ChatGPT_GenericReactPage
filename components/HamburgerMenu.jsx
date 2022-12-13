import React, { useState } from "react";

const HamburgerMenu = () => {
  // Set up state to track whether the menu is open
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // Update the state when the button is clicked
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-menu__button" onClick={toggleMenu}>
        <span
          className="hamburger-menu__icon"
          style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
        ></span>
      </button>
      <ul
        className="hamburger-menu__dropdown"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/info">Info</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-profile">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
