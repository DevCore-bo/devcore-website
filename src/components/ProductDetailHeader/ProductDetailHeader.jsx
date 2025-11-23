import './ProductDetailHeader.css';

const ProductDetailHeader = ({ name, description, logoSrc, onScrollClick, downloadUrl }) => {
  return (
    <header className="product-header-section">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="product-header-container">
        
        <div className="header-text-content">
          <h1 className="product-title">{name}</h1>
          <p className="product-description">{description}</p>
          <div className="planes">
            <button className="cta-button" onClick={onScrollClick}>
              VER PLANES
              <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            {downloadUrl && (
              <a href={downloadUrl} download>
                <button className="cta-button">
                  DESCARGAR APLICACIÓN
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </a>
            )}
          </div>
          {downloadUrl && (
            <div className="warning-message">
              <p>⚠️ Si ya tienes la aplicación instalada, por favor desinstálala antes de instalar la nueva versión.</p>
            </div>
          )}
        </div>

        <div className="header-visual-content">
          <img src={logoSrc} alt={`${name} logo`} className="product-logo" />
        </div>

      </div>
      <div className="product-header-glow"></div>
    </header>
  );
};

export default ProductDetailHeader;