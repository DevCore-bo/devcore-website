// src/components/organisms/PricingTiers/PricingTiers.jsx

import React, { forwardRef } from 'react';
// Asumo que tu hook useInView es similar a react-intersection-observer
// Si es un hook personalizado, la lógica debería ser la misma.
import { useInView } from 'react-intersection-observer'; 
import PricingCard from '../PricingCard/PricingCard';
import './PricingTiers.css';

// Corregí el nombre del componente para seguir la convención de PascalCase
const PricingTiers = forwardRef(({ plans }, ref) => {

  // Usamos un solo hook para controlar la animación de toda la sección
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({ 
    threshold: 0.1,
    triggerOnce: true // La animación solo se ejecutará una vez
  });

  // Si no hay planes, no renderizamos nada
  if (!plans || plans.length === 0) {
    return null;
  }

  return (
    // CAMBIO: Asignamos el ref del hook a la sección principal
    <section className="pricing-section" ref={sectionRef}>
      {/* CAMBIO: Usamos el estado 'sectionIsVisible' para añadir la clase */}
      <div className={`pricing-section__header ${sectionIsVisible ? 'is-visible' : ''}`}>
        <h2 className="pricing-section__title">Planes Transparentes y Flexibles</h2>
        {/* Si tuvieras un subtítulo, también se animaría */}
        {/* <p className="pricing-section__subtitle">Elige el que mejor se adapte a ti.</p> */}
      </div>
      
      <div 
        ref={ref} // Mantenemos el forwardRef para el scroll externo si es necesario
        className={`pricing-grid ${sectionIsVisible ? 'animate-in' : ''}`}
      >
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} isFeatured={plan.isFeatured} index={index} />
        ))}
      </div>
    </section>
  );
});

export default PricingTiers;