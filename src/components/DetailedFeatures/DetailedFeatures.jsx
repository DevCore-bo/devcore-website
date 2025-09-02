// src/components/DetailedFeatures/DetailedFeatures.jsx

import Icon from '../Icon/Icon';

// Módulos y estilos de Swiper (Asegúrate de importar A11y para accesibilidad)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useInView } from 'react-intersection-observer';

// Tus estilos
import './DetailedFeatures.css';

const DetailedFeatures = ({ features }) => {
  const { ref: headerRef, inView: headerIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (!features || features.length === 0) {
    return null;
  }

  return (
    // 'features' es el contenedor principal con el fondo
    <div className="features">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      {/* 'detailed-features-section' es el contenedor del contenido */}
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
            // Configuración optimizada
            loop={false} // El carrusel infinito se siente mejor
            centeredSlides={true}
            watchSlidesProgress={true}
            navigation
            pagination={{ clickable: true }}
            
            // Breakpoints son la clave para la responsividad en Swiper
            breakpoints={{
              // Vista móvil: 1 slide por vista, ocupando casi todo el ancho
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              // Vista tablet: 2 slides, mostrando parcialmente los adyacentes
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Vista desktop: 3 slides, el diseño principal
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={`${feature.title}-${index}`}>
                {/* El div anidado ayuda a Swiper a aplicar transformaciones */}
                {({ isActive, isNext, isPrev }) => (
                  <div 
                    className={`feature-card ${isActive ? 'is-active' : ''} ${isNext ? 'is-next' : ''} ${isPrev ? 'is-prev' : ''}`}
                  >
                    <div className="feature-icon-wrapper">
                      <Icon name={feature.icon} className="feature-icon" />
                    </div>
                    <h3 className="feature-card-title">{feature.title}</h3>
                    <p className="feature-card-description">{feature.description}</p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default DetailedFeatures;