import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import CompanyLogo from "../images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={CompanyLogo} alt="MOON IT ZONE" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* Home */}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/* About Us */}
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>

          {/* Products */}
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
            {dropdown && <Dropdown />}
          </li>

          {/* Solutions */}
          <li className="nav-item">
            <Link
              to="/solutions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
          </li>

          {/* Training */}
          <li className="nav-item">
            <Link
              to="/training"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Training
            </Link>
          </li>

          {/* Career */}
          <li className="nav-item">
            <Link to="/Career" className="nav-links" onClick={closeMobileMenu}>
              Career
            </Link>
          </li>

          {/* Contact */}
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
