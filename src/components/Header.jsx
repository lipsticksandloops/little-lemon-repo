import React from 'react';
import '../styles.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-cta">
        <p className="lead-text">Reserve a table now!</p>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><i className="bi bi-list"></i></li>
          <li><i className="bi bi-geo-alt-fill"></i></li>
          <li>
            <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
          </li>
          <li><i className="bi bi-person-fill"></i></li>
          <li><i className="bi bi-bag"></i></li>
        </ul>
      </nav>
    </header>
  );
}