import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { SERVICES_DATA } from "../../utils/data";

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`site-header ${isScrolled || !isHome ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <div className="container nav-shell">
          <Link to="/" className="brand" aria-label="Perfect Studio Home">
            <img
              src="/assets/svg/logo.svg"
              alt="Perfect Studio Logo"
              className="brand-logo"
            />
          </Link>

          <button
            className={`nav-toggle ${mobileMenuOpen ? "open" : ""}`}
            type="button"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu ${mobileMenuOpen ? "open" : ""}`} id="primary-menu">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              About Us
            </NavLink>

            <div
              className={`nav-dropdown ${servicesDropdownOpen ? "is-open" : ""}`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="nav-link nav-dropdown-toggle"
                onClick={() => setServicesDropdownOpen(prev => !prev)}
                aria-expanded={servicesDropdownOpen}
              >
                Services <ChevronDown size={14} />
              </button>

              <div className="nav-dropdown-menu" role="menu">
                <Link to="/services" style={{ fontWeight: 700, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px", marginBottom: "4px" }}>
                  All Services Overview
                </Link>
                {SERVICES_DATA.map(service => (
                  <Link
                    key={service.id}
                    to={service.link}
                    role="menuitem"
                    className={location.pathname === service.link ? "active" : ""}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/services/portrait-photography"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Portrait Photography
            </NavLink>

            <NavLink
              to="/services/photo-restoration"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Photo Restoration
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Contact
            </NavLink>

            <button
              type="button"
              className="nav-cta"
              onClick={onOpenBooking}
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
