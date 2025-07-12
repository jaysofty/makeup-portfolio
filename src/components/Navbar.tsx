import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  navItems: NavItem[];
  brandHref?: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, brandHref = "/" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`nav collapsible ${isMenuOpen ? "collapsible--expanded" : ""}`}
    >
      <div className="nav__topbar">
        <Link className="nav__brand" to={brandHref}>
          <span className="brand__text">Bando</span>
        </Link>
        <button
          className="nav__toggler"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            color: "#000",
          }}
        >
          ☰
        </button>
      </div>

      <ul
        className="list nav__list collapsible__content"
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <li
            className={`nav__item ${
              location.pathname === item.href ? "active" : ""
            }`}
            key={item.href}
            role="menuitem"
          >
            <Link
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
