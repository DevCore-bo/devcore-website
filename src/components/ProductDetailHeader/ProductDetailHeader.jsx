
import React from 'react';
import './ProductDetailHeader.css';
import Features from '../Features/Features';
const ProductDetailHeader = ({ name, description, keyFeatures, onScrollClick }) => {
  return (
    <header className="product-header-section">
      <div className="product-header-content">
        <h1 className="product-title">{name}</h1>
        <p className="product-description">{description}</p>
          {keyFeatures && <Features features={keyFeatures} />}
      </div>
      <div className="product-header-glow"></div>

      <button className="scroll-indicator" onClick={onScrollClick}>
        <span>VER PLANES</span>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </header>
  );
};

export default ProductDetailHeader;