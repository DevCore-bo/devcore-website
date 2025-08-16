import React from "react";
import "./Footer.css";

const IconBtn = ({ href = "#", label, children }) => (
  <a
    className="icon-btn"
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4 className="footer-title">Síguenos</h4>
          <div className="social-row">
            <IconBtn label="Twitter - @DevCore-Bo" href="https://x.com/i/flow/login?lang=es#">
              <svg viewBox="0 0 24 24" className="svg">
                <path d="M22 5.92a8.18 8.18 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.11 4.11 0 0 0-7 3.75A11.65 11.65 0 0 1 3.15 4.6a4.11 4.11 0 0 0 1.27 5.49 4.08 4.08 0 0 1-1.86-.51v.05a4.11 4.11 0 0 0 3.29 4 4.12 4.12 0 0 1-1.85.07 4.11 4.11 0 0 0 3.84 2.85A8.25 8.25 0 0 1 2 19.54a11.64 11.64 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0 0 22 5.92Z" />
              </svg>
            </IconBtn>
            <IconBtn label="Facebook - @DevCore-Bo" href="https://www.facebook.com/login/">
              <svg viewBox="0 0 24 24" className="svg">
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9V12.1h2.54V9.88c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.87h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
              </svg>
            </IconBtn>
            <IconBtn label="LinkedIn - @DevCore-Bo" href="https://www.linkedin.com/company/DevCore-Bo" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="svg" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.25 10.25h-3v-4.5c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.58v4.73z" />
              </svg>
            </IconBtn>
          </div>
          <div className="handle">@DevCore-Bo</div>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Productos</h4>
          <ul className="product-list">
            <li>
              <a className="product-link" href="#inicio">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm0 6h10V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3Zm2 5h2v2H9v-2Zm0 3.5h2V19H9v-2.5Zm4-3.5h2v2h-2v-2Zm0 3.5h2V19h-2v-2.5Z" />
                  </svg>
                </span>
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a className="product-link" href="#tecnologias">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M3 10h2v4H3v-4Zm3-2h2v8H6V8Zm4 3h2v2h-2v-2Zm3-3h2v8h-2V8Zm4 2h2v4h-2v-4Z" />
                  </svg>
                </span>
                <span>Tecnologias</span>
              </a>
            </li>
            <li>
              <a className="product-link" href="#productos">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M12 2s5 6 5 9.5A5 5 0 0 1 7 11.5C7 8 12 2 12 2Zm0 20a7.5 7.5 0 0 0 7.5-7.5c0-2.9-2.2-6.3-4-8.5-.7-.9-2.3-.9-3 0-1.8 2.2-4 5.6-4 8.5A7.5 7.5 0 0 0 12 22Z" />
                  </svg>
                </span>
                <span>Nuestros Productos</span>
              </a>
            </li>
            <li>
              <a className="product-link" href="#contactanos">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M20.8 3.2S8 4 4.7 7.3c-3.4 3.4-2.7 8.9 1.5 11.3 3.6 2 8.3 1.2 11-1.5C20.5 14.8 21 9 20.8 3.2Zm-6.4 4.6c-1.5 4.1-4.5 7.1-8.6 8.6" />
                  </svg>
                </span>
                <span>Contáctanos</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Horarios de atención</h4>
          <ul className="hours">
            <li>
              <strong>Lun – Vie:</strong> 09:00 – 18:30
            </li>
            <li>
              <strong>Dirección:</strong> Av. Rafael Pabón, Zona Irpavi, La Paz
            </li>
            <li>
              <strong>Soporte:</strong> 24/7 por chat y correo
            </li>
            <li>
              <strong>Tel:</strong> +591 72047611

            </li>
            <li>
              <strong>Email:</strong> devcore.bo@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 DEVCORE. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}
