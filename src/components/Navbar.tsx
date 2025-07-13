import React, { useState, useEffect } from "react";

interface NavItem {
  label: string;
  href: string; // this will correspond to the section id (e.g., "#about")
}

interface NavBarProps {
  navItems: NavItem[];
  brandHref?: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, brandHref = "#" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav collapsible ${
          isMenuOpen ? "collapsible--expanded" : ""
        }`}
      >
        <div className="nav__topbar">
          <a className="nav__brand" href={brandHref}>
            <span className="brand__text">Bando</span>
          </a>
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
            <li className="nav__item" key={item.href} role="menuitem">
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default NavBar;
