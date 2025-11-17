import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Task<span>Management</span></h2>
          <p>Organize. Execute. Succeed.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
 
        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61574788091780"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/imjaydeshmukh/"><FaLinkedinIn /></a>
          <a href="https://github.com/jaydeshmukh078"><FaGithub /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © 2025 <span className="highlight">TaskManagement</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
