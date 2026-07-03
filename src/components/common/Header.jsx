import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Agrofarm</Link>
      </div>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>
          HOME
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          ABOUT
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          SERVICES
        </NavLink>
        <NavLink to="/products" onClick={closeMenu}>
          PRODUCTS
        </NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>
          GALLERY
        </NavLink>
        <NavLink to="/blog" onClick={closeMenu}>
          BLOG
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          CONTACT
        </NavLink>
      </nav>

      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
