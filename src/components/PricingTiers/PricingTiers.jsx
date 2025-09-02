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
    // CAMBIO: ref={sectionRef} va aquí para detectar la visibilidad de toda la sección
    <div className="pricing-container" ref={sectionRef}>
      
      {/* CAPA 1: FONDO (Aislado y recortado) */}
      <div className="pricing-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      {/* CAPA 2: CONTENIDO (Todo el contenido visible va aquí adentro) */}
      <div className="pricing-section__content-wrapper">
        
        <div className={`pricing-section__header ${sectionIsVisible ? 'is-visible' : ''}`}>
          <h2 className="pricing-section__title">Planes Transparentes y Flexibles</h2>
        </div>
        
        {/* CAMBIO: El grid ahora está DENTRO del content-wrapper */}
        <div 
          ref={ref} // El ref para el scroll se mantiene aquí
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