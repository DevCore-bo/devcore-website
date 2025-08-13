// src/components/organisms/PricingTiers/PricingTiers.jsx
// VERSIÓN CON REF EN LA GRILLA

import React, { forwardRef } from 'react';
import { useInView } from '../../../src/hooks/useInView';
import PricingCard from '../PricingCard/PricingCard';
import './PricingTiers.css';

const PricingTiers = forwardRef(({ plans }, ref) => {

  const [inViewRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="pricing-section">
      <div className="pricing-section__header">
        <h2 className="pricing-section__title">Planes Transparentes y Flexibles</h2>
        <p className="pricing-section__subtitle">
          Elige el plan que se adapte al tamaño y las ambiciones de tu equipo.
        </p>
      </div>
      
  
      <div 
        ref={(node) => {
          ref.current = node;
          inViewRef.current = node;
        }} 
        className={`pricing-grid ${isInView ? 'animate-in' : ''}`}
      >
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} isFeatured={plan.isFeatured} index={index} />
        ))}
      </div>
    </section>
  );
});

export default PricingTiers;