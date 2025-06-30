import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Domov' },
    { path: '/about', label: 'O mne' },
    { path: '/projects', label: 'Projekty' },
    { path: '/contact', label: 'Kontakt' },
  ];

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          <Link to="/">
            <img
              src="/logos/logo_transparent.png"
              alt="patrikcodes.sk"
              className="navigation-logo"
            />
          </Link>
          <div className="navigation-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navigation-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;