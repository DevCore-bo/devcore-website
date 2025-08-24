// src/components/DetailedFeatures/DetailedFeatures.jsx

import Icon from '../Icon/Icon';

// Módulos y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useInView } from 'react-intersection-observer';

// Tus estilos
import './DetailedFeatures.css';

const DetailedFeatures = ({ features }) => {
  // CAMBIO: Mover el Hook al principio del componente.
  // Ahora se llama incondicionalmente en cada render, lo cual es correcto.
  const { ref: headerRef, inView: headerIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // La comprobación y el return temprano se realizan DESPUÉS de llamar a todos los hooks.
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="detailed-features-section">
      <div 
        ref={headerRef} 
        className={`section-header ${headerIsVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">
          Descubre y Conoce la App <span className="highlight-text">Funcionalidades Clave</span>
        </h2>
      </div>

      <div className="features-carousel-container">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          centeredSlides={true}
          loop={false}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          initialSlide={0}
          watchSlidesProgress={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
            768: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
          }}
          className="mySwiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={`${feature.title}-${index}`}>
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon name={feature.icon} className="feature-icon" />
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DetailedFeatures;