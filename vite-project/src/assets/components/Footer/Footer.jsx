import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Techie Talk. All rights reserved.</p>
      <div className="footer-links">
        <a href="#privacy-policy" 
           className="footer-link" 
           aria-label="Privacy Policy Link">
          Privacy Policy
        </a> 
        | 
        <a href="#terms-of-service" 
           className="footer-link" 
           aria-label="Terms of Service Link">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
