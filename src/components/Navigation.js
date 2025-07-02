import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Domov" },
    { path: "/o-mne", label: "O mne" },
    { path: "/projekty", label: "Projekty" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          <Link to="/" onClick={closeMenu}>
            <img
              src="logos/logo.png"
              alt="patrikcodes.sk"
              className="navigation-logo"
            />
          </Link>

          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`navigation-links ${isOpen ? "open" : ""}`}>
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`navigation-link ${
                  location.pathname === path ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;