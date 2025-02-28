import React from 'react';
import '../styles.css';
import logo from '../images/logo-lemon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" className="logo" />
          <p>&copy; Copyright Little Lemon 2025</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li><a href="/" aria-label="Home">Home</a></li>
              <li><a href="/about" aria-label="About Us">About Us</a></li>
              <li><a href="/login" aria-label="Login">Login</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/order" aria-label="Order Now">Order Now</a></li>
              <li><a href="/reserve" aria-label="Reserve a Table">Reserve a Table</a></li>
              <li><a href="/testimonials" aria-label="Testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://facebook.com" aria-label="Facebook">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" aria-label="Instagram">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="/contact" aria-label="Contact">
                  <i className="bi bi-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}