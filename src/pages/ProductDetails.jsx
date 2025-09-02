
import React, { useRef, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/mockProducts';
import ProductDetailHeader from '../components/ProductDetailHeader/ProductDetailHeader';
import DetailedFeatures from '../components/DetailedFeatures/DetailedFeatures';
import PricingTiers from '../components/PricingTiers/PricingTiers';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  const plansGridRef = useRef(null);
  
  const mainContainerRef = useRef(null);
  useEffect(() => {
   
    const timer = setTimeout(() => {
     
      document.documentElement.scrollTop = 0; // Para la mayoría de navegadores modernos
      document.body.scrollTop = 0; // Para compatibilidad con otros navegadores/casos
    }, 0);

 
    return () => clearTimeout(timer);
    
  }, [productId]); 
  const handleScrollToPlans = () => {
    plansGridRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start' 
    });
  };

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    // 3. Asigna el ref al elemento <main>
    <main ref={mainContainerRef}>
      <ProductDetailHeader 
        name={product.name} 
        description={product.description}
        keyFeatures={product.keyFeatures}
        onScrollClick={handleScrollToPlans}
        logoSrc={product.logoSrc}
      />
      
      <DetailedFeatures features={product.detailedFeatures} />
      
      <PricingTiers 
        ref={plansGridRef}
        plans={product.plans} 
      />
    </main>
  );
};

export default ProductDetailsPage;