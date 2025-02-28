import React from 'react';
import '../styles.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-cta">
        <p className="lead-text">Reserve a table now!</p>
      </div>
      <nav className="nav-bar" aria-label="Main Navigation">
        <ul>
          <li><i className="bi bi-list" aria-hidden="true"></i></li>
          <li><i className="bi bi-geo-alt-fill" aria-hidden="true"></i></li>
          <li>
            <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
          </li>
          <li><i className="bi bi-person-fill" aria-hidden="true"></i></li>
          <li><i className="bi bi-bag" aria-hidden="true"></i></li>
        </ul>
      </nav>
    </header>
  );
}