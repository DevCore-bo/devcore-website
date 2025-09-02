// src/components/organisms/PricingTiers/PricingTiers.jsx

import React, { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer'; 
import PricingCard from '../PricingCard/PricingCard';
import './PricingTiers.css';

const PricingTiers = forwardRef(({ plans }, ref) => {
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({ 
    threshold: 0.1,
    triggerOnce: true
  });

  if (!plans || plans.length === 0) {
    return null;
  }

  return (
    <div className="pricing-container" ref={sectionRef}>
      
 
      <div className="pricing-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <div className="pricing-section__content-wrapper">
        
        <div className={`pricing-section__header ${sectionIsVisible ? 'is-visible' : ''}`}>
          <h2 className="pricing-section__title">Planes Transparentes y Flexibles</h2>
        </div>
     
        <div 
          ref={ref} 
          className={`pricing-grid ${sectionIsVisible ? 'animate-in' : ''}`}
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} isFeatured={plan.isFeatured} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
});

export default PricingTiers;