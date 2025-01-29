/* src/components/Footer.js */
import React from "react";

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    <div className="social-icons">
      <center>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter"></i>
      </a>
      </center>
    </div>
  </footer>
);

export default Footer;