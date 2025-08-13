import React from 'react';
import './PricingCard.css';

const CheckIcon = () => (
  <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingCard = ({ plan, isFeatured = false, index }) => {
  const cardClassName = `pricing-card ${isFeatured ? 'featured' : ''}`;

  return (
    <div 
      className={cardClassName} 
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {isFeatured && <div className="featured-strip">Más Popular</div>}
      
      <div className="pricing-card__header">
        <h3 className="pricing-card__title">{plan.name}</h3>
        <p className="pricing-card__description">{plan.description}</p>
      </div>

      <div className="pricing-card__price-wrapper">
        {typeof plan.price === 'number' ? (
          <>
            <span className="price-currency">$</span>
            <span className="price-amount">{plan.price}</span>
            <span className="price-period">/mes</span>
          </>
        ) : (
          <span className="price-amount">{plan.price}</span>
        )}
      </div>

      <ul className="pricing-card__feature-list">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="feature-item">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="#" className="pricing-card__cta">
        {plan.ctaText}
      </a>
    </div>
  );
};

export default PricingCard;