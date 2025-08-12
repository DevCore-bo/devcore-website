// Archivo: src/components/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/LogoNavDevCore.png";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("inicio");
  const navLinksRef = useRef(null);
  const indicatorRef = useRef(null);
  useEffect(() => {
    if (navLinksRef.current && indicatorRef.current) {
      const activeLink = navLinksRef.current.querySelector(
        `a[href="#${activeNav}"]`
      );
      if (activeLink) {
        indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
        indicatorRef.current.style.left = `${activeLink.offsetLeft}px`;
      }
    }
  }, [activeNav]);
  useEffect(() => {
    const wrapper = navLinksRef.current;

    const updateIndicator = () => {
      if (!wrapper || !indicatorRef.current) return;
      const activeLink = wrapper.querySelector(`a[href="#${activeNav}"]`);
      if (!activeLink) return;
      const left = activeLink.offsetLeft - wrapper.scrollLeft; // <- clave
      indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
      indicatorRef.current.style.left = `${left}px`;
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    wrapper &&
      wrapper.addEventListener("scroll", updateIndicator, { passive: true });

    return () => {
      window.removeEventListener("resize", updateIndicator);
      wrapper && wrapper.removeEventListener("scroll", updateIndicator);
    };
  }, [activeNav]);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

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
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <a
            href="#inicio"
            onClick={() => window.dispatchEvent(new Event("replay-hero"))}
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
                className={activeNav === "inicio" ? "active" : ""}
                onClick={() => window.dispatchEvent(new Event("replay-hero"))}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className={activeNav === "nosotros" ? "active" : ""}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#tecnologias"
                className={activeNav === "tecnologias" ? "active" : ""}
              >
                Tecnologías
              </a>
            </li>
            <li>
              <a
                href="#productos"
                className={activeNav === "productos" ? "active" : ""}
              >
                Nuestros Productos
              </a>
            </li>
            <li>
              <a
                href="#contactanos"
                className={activeNav === "contactanos" ? "active" : ""}
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
