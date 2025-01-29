import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./../styles/navbar.css"; // Import your CSS for the Navbar

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const toggleMenu = () => {
    setNavToggle(!navToggle);
  };

  // Function to handle mouse enter event and navigate to the target page
  const handleMouseEnter = (path) => {
    navigate(path); // Navigate to the specified path on hover
  };

  return (
    <nav className={`navbar ${navToggle ? "nav-toggle" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${navToggle ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`menu ${navToggle ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/")}
          >
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/about")}
          >
            <i className="fas fa-user"></i> About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/projects")}
          >
            <i className="fas fa-briefcase"></i> Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/skills")}
          >
            <i className="fas fa-cogs"></i> Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/education")}
          >
            <i className="fas fa-graduation-cap"></i> Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/contact")}
          >
            <i className="fas fa-envelope"></i> Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
