
import React, { useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/mockProducts';


import ProductDetailHeader from '../components/ProductDetailHeader/ProductDetailHeader';
import PricingTiers from '../components/PricingTiers/PricingTiers';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);

  const plansGridRef = useRef(null);

  const handleScrollToPlans = () => {
    plansGridRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center' 
    });
  };

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <main>
     <ProductDetailHeader 
  name={product.name} 
  description={product.description}
  keyFeatures={product.keyFeatures}
  onScrollClick={handleScrollToPlans}
/>
        
        <PricingTiers 
          ref={plansGridRef}
          plans={product.plans} 
        />
      </main>
    </>
  );
};

export default ProductDetailsPage;