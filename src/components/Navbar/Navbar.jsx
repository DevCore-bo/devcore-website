
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/LogoNavDevCore.png";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("inicio");
  const navLinksRef = useRef(null);
  const indicatorRef = useRef(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/'; 

  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); 

    if (sectionId === 'inicio') {
      window.dispatchEvent(new Event("replay-hero"));
    }

    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

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
    const wrapper = navLinksRef.current;
    wrapper && wrapper.addEventListener("scroll", updateIndicator, { passive: true });

    return () => {
      window.removeEventListener("resize", updateIndicator);
      wrapper && wrapper.removeEventListener("scroll", updateIndicator);
    };
  }, [activeNav, isHomePage]);

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
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isHomePage, location.hash]); 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, 'inicio')}
            style={{ display: "flex" }}
          >
            <img src={logo} alt="DevCore Logo" className="navbar-logo-img" />
          </a>
        </div>

        <div className="navbar-links-wrapper" ref={navLinksRef}>
          <ul className="navbar-links">
            <li>
              <a
                href="#inicio"
                data-section-id="inicio"
                className={activeNav === "inicio" ? "active" : ""}
                onClick={(e) => handleNavClick(e, 'inicio')}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                data-section-id="nosotros"
                className={activeNav === "nosotros" ? "active" : ""}
                onClick={(e) => handleNavClick(e, 'nosotros')}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#tecnologias"
                data-section-id="tecnologias"
                className={activeNav === "tecnologias" ? "active" : ""}
                onClick={(e) => handleNavClick(e, 'tecnologias')}
              >
                Tecnologías
              </a>
            </li>
            <li>
              <a
                href="#productos"
                data-section-id="productos"
                className={activeNav === "productos" ? "active" : ""}
                onClick={(e) => handleNavClick(e, 'productos')}
              >
                Nuestros Productos
              </a>
            </li>
            <li>
              <a
                href="#contactanos"
                data-section-id="contactanos"
                className={activeNav === "contactanos" ? "active" : ""}
                onClick={(e) => handleNavClick(e, 'contactanos')}
              >
                Contáctanos
              </a>
            </li>
          </ul>
          <div className="navbar-indicator" ref={indicatorRef}></div>
        </div>

        <div className="navbar-actions">
          <a href="#" className="btn btn-outline">
            Ingresar
          </a>
          <a href="#" className="btn btn-primary">
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;