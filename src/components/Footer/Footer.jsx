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
            <IconBtn label="Twitter - @DevCore-Bo" href="#">
              <svg viewBox="0 0 24 24" className="svg">
                <path d="M22 5.92a8.18 8.18 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.11 4.11 0 0 0-7 3.75A11.65 11.65 0 0 1 3.15 4.6a4.11 4.11 0 0 0 1.27 5.49 4.08 4.08 0 0 1-1.86-.51v.05a4.11 4.11 0 0 0 3.29 4 4.12 4.12 0 0 1-1.85.07 4.11 4.11 0 0 0 3.84 2.85A8.25 8.25 0 0 1 2 19.54a11.64 11.64 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0 0 22 5.92Z" />
              </svg>
            </IconBtn>
            <IconBtn label="Facebook - @DevCore-Bo" href="#">
              <svg viewBox="0 0 24 24" className="svg">
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9V12.1h2.54V9.88c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.87h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
              </svg>
            </IconBtn>
            <IconBtn label="YouTube - @DevCore-Bo" href="#">
              <svg viewBox="0 0 24 24" className="svg">
                <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1C2.9 9 2.9 12 2.9 12s0 3 .5 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM10.2 15.3V8.7L15.6 12l-5.4 3.3Z" />
              </svg>
            </IconBtn>
            <IconBtn label="TikTok - @DevCore-Bo" href="#">
              <svg viewBox="0 0 24 24" className="svg">
                <path d="M21 8.5a7 7 0 0 1-4.5-1.6v6.3a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v3a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 2.8-2.8V2.9h2.7a4.3 4.3 0 0 0 4.2 3.6v2Z" />
              </svg>
            </IconBtn>
          </div>
          <div className="handle">@DevCore-Bo</div>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Productos</h4>
          <ul className="product-list">
            <li>
              <a className="product-link" href="#productos">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm0 6h10V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3Zm2 5h2v2H9v-2Zm0 3.5h2V19H9v-2.5Zm4-3.5h2v2h-2v-2Zm0 3.5h2V19h-2v-2.5Z" />
                  </svg>
                </span>
                <span>Conta F&N</span>
              </a>
            </li>
            <li>
              <a className="product-link" href="#productos">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M3 10h2v4H3v-4Zm3-2h2v8H6V8Zm4 3h2v2h-2v-2Zm3-3h2v8h-2V8Zm4 2h2v4h-2v-4Z" />
                  </svg>
                </span>
                <span>GymNas</span>
              </a>
            </li>
            <li>
              <a className="product-link" href="#productos">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M12 2s5 6 5 9.5A5 5 0 0 1 7 11.5C7 8 12 2 12 2Zm0 20a7.5 7.5 0 0 0 7.5-7.5c0-2.9-2.2-6.3-4-8.5-.7-.9-2.3-.9-3 0-1.8 2.2-4 5.6-4 8.5A7.5 7.5 0 0 0 12 22Z" />
                  </svg>
                </span>
                <span>MediAzuca</span>
              </a>
            </li>
            <li>
              <a className="product-link" href="#productos">
                <span className="product-badge" aria-hidden>
                  <svg viewBox="0 0 24 24" className="svg">
                    <path d="M20.8 3.2S8 4 4.7 7.3c-3.4 3.4-2.7 8.9 1.5 11.3 3.6 2 8.3 1.2 11-1.5C20.5 14.8 21 9 20.8 3.2Zm-6.4 4.6c-1.5 4.1-4.5 7.1-8.6 8.6" />
                  </svg>
                </span>
                <span>AgroTrack</span>
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
              <strong>Sábados:</strong> 09:00 – 13:00
            </li>
            <li>
              <strong>Soporte:</strong> 24/7 por chat y correo
            </li>
            <li>
              <strong>Tel:</strong> +591 700 00000
            </li>
            <li>
              <strong>Email:</strong> hola@devcore.bo
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
