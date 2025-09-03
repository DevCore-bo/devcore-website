// src/components/Navbar/Navbar.jsx - VERSIÓN MEJORADA

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoCompleto from "../../assets/LogoNavDevCore.png";
import logoSolo from "../../assets/devcoresolologo.png";
import { FiMoreVertical } from "react-icons/fi";
const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth });
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("inicio");
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const indicatorRef = useRef(null);
  const moreMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { width } = useWindowSize();
  const logoToShow = width <= 425 ? logoSolo : logoCompleto;
  const navItems = [
    { id: "inicio", text: "Inicio" },
    { id: "nosotros", text: "Nosotros" },
    { id: "tecnologias", text: "Tecnologías" },
    { id: "productos", text: "Nuestros Productos" },
    { id: "contactanos", text: "Contáctanos" },
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMoreMenuOpen(false);

    if (sectionId === 'inicio') {
      window.dispatchEvent(new Event("replay-hero"));
    }

    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let visibleCount;
  if (width > 768) {
    visibleCount = 5;
  } else if (width > 425) {
    visibleCount = 4;
  } else if (width > 375) {
    visibleCount = 2;
  } else {
    visibleCount = 1;
  }

  const visibleLinks = navItems.slice(0, visibleCount);
  const hiddenLinks = navItems.slice(visibleCount);
  useEffect(() => {
    const updateIndicator = () => {
      if (!navLinksRef.current || !indicatorRef.current) return;
      const activeLink = navLinksRef.current.querySelector(`a[data-section-id="${activeNav}"]`);
      if (activeLink) {
        const wrapper = navLinksRef.current;
        const left = activeLink.offsetLeft - wrapper.scrollLeft;
        indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
        indicatorRef.current.style.left = `${left}px`;
      } else {
        indicatorRef.current.style.width = `0px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
  }, [activeNav, width]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveNav('');
      return;
    }
    setActiveNav(location.hash.replace('#', '') || 'inicio');
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isHomePage, location.hash]);

  return (
    <nav className={`navbar ${activeNav !== 'inicio' || !isHomePage ? 'solid-bg' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} style={{ display: "flex" }}>
            <img src={logoToShow} alt="DevCore Logo" className="navbar-logo-img" />
          </a>
        </div>

        <div className="navbar-links-wrapper" ref={navLinksRef}>
          <ul className="navbar-links">
            {visibleLinks.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} data-section-id={item.id} className={activeNav === item.id ? "active" : ""} onClick={(e) => handleNavClick(e, item.id)}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-indicator" ref={indicatorRef}></div>
          {hiddenLinks.length > 0 && (
            <div className="more-menu-container" ref={moreMenuRef}>
              <button className="more-menu-button" onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}>
                <FiMoreVertical size={22} />
              </button>
              <div className={`more-menu ${isMoreMenuOpen ? 'open' : ''}`}>
                {hiddenLinks.map(item => (
                  <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="navbar-actions">
          <button className="btn btn-outline" onClick={() => navigate("/login")}>
            Ingresar
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/register")}>
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;