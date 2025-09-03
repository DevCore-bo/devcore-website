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
  {/* CAMBIO: Icono de 'X' (antes Twitter) */}
  <IconBtn label="X - @DevCore-Bolivia" href="https://x.com/DevCore_Bolivia">
    <svg viewBox="0 0 24 24" className="svg">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  </IconBtn>

  {/* Icono de Facebook (sin cambios) */}
  <IconBtn label="Facebook - @DevCore-Bolivia" href="https://www.facebook.com/profile.php?id=61580006291939">
    <svg viewBox="0 0 24 24" className="svg">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9V12.1h2.54V9.88c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.87h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
    </svg>
  </IconBtn>

  {/* CAMBIO: Icono de Instagram (antes LinkedIn) */}
  <IconBtn label="Instagram - @DevCore-Bolivia" href="https://www.instagram.com/devcore_bolivia/" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" className="svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.011-4.85-.069c-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0 1.157c-3.111 0-3.48.012-4.69.068-2.93.136-4.225 1.44-4.36 4.36C2.902 8.784 2.89 9.153 2.89 12s.012 3.216.068 4.69c.136 2.92 1.43 4.225 4.36 4.36 1.21.056 1.579.068 4.69.068s3.48-.012 4.69-.068c2.92-.136 4.225-1.43 4.36-4.36.056-1.21.068-1.579.068-4.69s-.012-3.48-.068-4.69c-.136-2.92-1.43-4.225-4.36-4.36C15.48 3.332 15.111 3.32 12 3.32zM12 7.02c-2.75 0-4.98 2.23-4.98 4.98s2.23 4.98 4.98 4.98 4.98-2.23 4.98-4.98-2.23-4.98-4.98-4.98zm0 8.13c-1.74 0-3.15-1.41-3.15-3.15s1.41-3.15 3.15-3.15 3.15 1.41 3.15 3.15-1.41 3.15-3.15 3.15zm5.23-8.21c-.78 0-1.41.63-1.41 1.41s.63 1.41 1.41 1.41 1.41-.63 1.41-1.41-.63-1.41-1.41-1.41z"/>
    </svg>
  </IconBtn>
</div>
          <div className="handle">@DevCore-Bolivia</div>
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