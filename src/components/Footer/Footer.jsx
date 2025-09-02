// src/components/Footer/Footer.jsx

// 1. Importa los hooks necesarios de react-router-dom
import { useLocation, useNavigate } from "react-router-dom";
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
  // 2. Inicializa los hooks para obtener la ubicación y la función de navegación
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // 3. Crea la misma función de manejo de clics que tienes en el Navbar
const handleLinkClick = (e, sectionId) => {
  e.preventDefault();

  if (isHomePage) {
    // Si ya estamos en la home, el scroll es local y centrado
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    // Si estamos fuera, navegamos a la home y pasamos el estado
    navigate('/', { state: { scrollToSection: sectionId } });
  }
};

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4 className="footer-title">Síguenos</h4>
          <div className="social-row">
            {/* ... tus IconBtn se mantienen igual ... */}
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
    <a className="product-link" href="#inicio" onClick={(e) => handleLinkClick(e, 'inicio')}>
      <span className="product-badge" aria-hidden>
        {/* Icono de Casa (Inicio) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
        </svg>
      </span>
      <span>Inicio</span>
    </a>
  </li>
  <li>
    <a className="product-link" href="#nosotros" onClick={(e) => handleLinkClick(e, 'nosotros')}>
      <span className="product-badge" aria-hidden>
        {/* Icono de Grupo (Nosotros) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.566-.649.96-1.48.96-2.422 0-1.29-.538-2.433-1.39-3.239m-10.132-3.239c-1.145 1.045-1.755 2.553-1.755 4.239 0 .942.394 1.773.96 2.422m0 0a2.998 2.998 0 002.422 1.458m-2.422-1.458a2.998 2.998 0 01-1.458-2.422m16.208 2.422a2.998 2.998 0 01-1.458 2.422m1.458-2.422a2.998 2.998 0 002.422-1.458M12 21a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
      </span>
      <span>Nosotros</span>
    </a>
  </li>
  <li>
    <a className="product-link" href="#tecnologias" onClick={(e) => handleLinkClick(e, 'tecnologias')}>
      <span className="product-badge" aria-hidden>
        {/* Icono de Chip (Tecnologías) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H7.5A2.25 2.25 0 005.25 7.5v9.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </span>
      <span>Tecnologías</span>
    </a>
  </li>
  <li>
    <a className="product-link" href="#productos" onClick={(e) => handleLinkClick(e, 'productos')}>
      <span className="product-badge" aria-hidden>
        {/* Icono de Grid (Productos) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      </span>
      <span>Nuestros Productos</span>
    </a>
  </li>
  <li>
    <a className="product-link" href="#contactanos" onClick={(e) => handleLinkClick(e, 'contactanos')}>
      <span className="product-badge" aria-hidden>
        {/* Icono de Email (Contáctanos) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </span>
      <span>Contáctanos</span>
    </a>
  </li>
</ul>
        </div>
        <div className="footer-col">
          {/* ... tu columna de Horarios se mantiene igual ... */}
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