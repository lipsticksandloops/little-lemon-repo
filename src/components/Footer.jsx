import React from 'react';
import '../styles.css';
import logo from '../images/logo-lemon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" className="logo" />
          <p>&copy; 2023 Little Lemon</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/order">Order Now</a></li>
              <li><a href="/reserve">Reserve a Table</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://facebook.com">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="/contact">
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