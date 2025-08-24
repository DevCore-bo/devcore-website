// src/data/mockProducts.js

export const productsData = [
  {
    id: "glucook",
    name: "Glucook",
    description:
      "Tu asistente inteligente para la gestión de la diabetes. Integra control de alimentación, registro de glucosa y nutrición personalizada con IA para mejorar tu bienestar.",
    logoSrc: "/logos/banner_glucook.png",
    keyFeatures: [
      { icon: "camera", text: "Escáner de Alimentos con IA" },
      { icon: "chat", text: "Chatbot Nutricional 24/7" },
      { icon: "chart", text: "Reportes y Seguimiento" },
      { icon: "recipes", text: "Planes Personalizados" },
    ],
    detailedFeatures: [
      {
        icon: "camera",
        title: "Escáner Inteligente de Comidas",
        description:
          "Olvida el conteo manual. Toma una foto de tu plato y nuestra IA te dará un desglose nutricional preciso al instante para un control sin esfuerzo.",
      },
      {
        icon: "chat",
        title: "Tu Nutricionista Personal 24/7",
        description:
          "¿Dudas sobre qué comer? Nuestro chatbot te ofrece recomendaciones y resuelve tus preguntas nutricionales en cualquier momento y lugar.",
      },
      {
        icon: "chart",
        title: "Progreso Visual y Claro",
        description:
          "Entiende tus patrones con gráficos y reportes fáciles de interpretar. Comparte tu progreso con tu médico para un seguimiento más efectivo.",
      },
      {
        icon: "recipes",
        title: "Planes de Alimentación a tu Medida",
        description:
          "Recibe planes deliciosos y saludables, generados por IA y adaptados a tus gustos, necesidades y objetivos de control de glucosa.",
      },
    ],
    plans: [
      {
        name: "Básico",
        description: "Para un control diario y esencial de tu diabetes.",
        price: "Gratis",
        features: [
          "Registro manual de glucosa y comidas",
          "Recordatorios de medición",
          "Acceso a recetas públicas",
          "Reporte semanal básico",
        ],
        ctaText: "Empezar Gratis",
        isFeatured: false,
      },
      {
        name: "Premium",
        description: "Desbloquea el poder de la IA para una gestión completa.",
        price: 9.99,
        features: [
          "Todo en Básico",
          "Escáner de alimentos con IA",
          "Chatbot nutricional 24/7",
          "Planes alimenticios personalizados",
          "Reportes avanzados exportables (PDF, Excel)",
        ],
        ctaText: "Obtener Premium",
        isFeatured: true,
      },
      {
        name: "Profesional",
        description: "Para nutricionistas y clínicas que gestionan pacientes.",
        price: "Contacto",
        features: [
          "Portal web de gestión de usuarios",
          "Seguimiento de múltiples pacientes",
          "Estadísticas y reportes consolidados",
          "Soporte prioritario",
        ],
        ctaText: "Contactar Ventas",
        isFeatured: false,
      },
    ],
  },
  {
    id: "glow-shine",
    name: "Glow & Shine",
    description:
      "El sistema de gestión todo-en-uno para tu tienda de cosméticos. Controla ventas, inventario y compras de manera eficiente para que tu negocio brille.",
    logoSrc: "/logos/banner_glw_zi.png",
    keyFeatures: [
      { icon: "pos", text: "Punto de Venta Integrado" },
      { icon: "inventory", text: "Gestión de Inventario" },
      { icon: "suppliers", text: "Control de Proveedores" },
      { icon: "analytics", text: "Analíticas de Ventas" },
    ],
    detailedFeatures: [
      {
        icon: "pos",
        title: "Punto de Venta Rápido y Moderno",
        description:
          "Agiliza tus ventas con una interfaz intuitiva. Gestiona pagos, descuentos y facturación en segundos, mejorando la experiencia de tus clientes.",
      },
      {
        icon: "inventory",
        title: "Inventario Siempre Bajo Control",
        description:
          "Evita quedarte sin stock. Recibe alertas de productos bajos, gestiona lotes y fechas de caducidad, y mantén tu inventario sincronizado en tiempo real.",
      },
      {
        icon: "suppliers",
        title: "Optimiza tus Compras",
        description:
          "Centraliza la gestión de tus proveedores y órdenes de compra. Compara precios y agiliza el proceso de reabastecimiento para maximizar tus márgenes.",
      },
      {
        icon: "analytics",
        title: "Decisiones Basadas en Datos",
        description:
          "Descubre tus productos más vendidos, tus horas pico y el rendimiento de tus empleados con reportes visuales que te ayudan a hacer crecer tu negocio.",
      },
    ],
    plans: [
      {
        name: "Esencial",
        description: "Perfecto para empezar a digitalizar tu tienda.",
        price: 49,
        features: [
          "Punto de Venta (POS)",
          "Gestión de inventario básico",
          "Hasta 3 empleados",
          "Reportes de ventas diarios",
        ],
        ctaText: "Elegir Esencial",
        isFeatured: false,
      },
      {
        name: "Crecimiento",
        description: "Herramientas avanzadas para expandir tu negocio.",
        price: 99,
        features: [
          "Todo en Esencial",
          "Gestión de compras y proveedores",
          "Hasta 10 empleados",
          "Reportes y analíticas avanzadas",
          "Módulo de clientes (CRM)",
        ],
        ctaText: "Elegir Crecimiento",
        isFeatured: true,
      },
      {
        name: "Empresarial",
        description: "Soluciones a medida para múltiples sucursales.",
        price: "Custom",
        features: [
          "Todo en Crecimiento",
          "Soporte multi-tienda",
          "Integraciones personalizadas",
          "Gerente de cuenta dedicado",
        ],
        ctaText: "Solicitar Demo",
        isFeatured: false,
      },
    ],
  },
  {
    id: "migo",
    name: "Cuenta conmigo",
    description:
      "La aplicación definitiva para gestionar gastos compartidos e individuales. Sincroniza tus finanzas, liquida deudas y toma el control de tu dinero.",
    logoSrc: "/logos/banner_migo.png",
    keyFeatures: [
      { icon: "groups", text: "Gestión de Grupos" },
      { icon: "scan", text: "Escáner de Recibos (OCR)" },
      { icon: "balance", text: "Balances Automáticos" },
      { icon: "notifications", text: "Notificaciones Inteligentes" },
    ],
    detailedFeatures: [
      {
        icon: "groups",
        title: "Grupos de Gastos sin Complicaciones",
        description:
          "Ideal para viajes, compañeros de piso o cualquier gasto compartido. Crea grupos, añade miembros y registra quién pagó qué, de forma transparente.",
      },
      {
        icon: "scan",
        title: "Digitaliza Recibos al Instante",
        description:
          "Toma una foto de cualquier recibo y nuestra tecnología OCR extraerá automáticamente el total, la fecha y el concepto. ¡Adiós a la entrada manual!",
      },
      {
        icon: "balance",
        title: "Liquida Deudas con un Clic",
        description:
          "CoinSync calcula automáticamente quién le debe a quién en cada grupo, simplificando las deudas y permitiéndote liquidarlas con facilidad.",
      },
      {
        icon: "notifications",
        title: "Mantente Siempre Informado",
        description:
          "Recibe notificaciones inteligentes cuando alguien añade un gasto, cuando se acerca una fecha de pago o cuando una deuda ha sido saldada.",
      },
    ],
    plans: [
      {
        name: "Gratuito",
        description: "Organiza tus finanzas personales y de grupo fácilmente.",
        price: "Gratis",
        features: [
          "Hasta 3 grupos",
          "Registro de gastos e ingresos",
          "División de gastos manual",
          "Balances y deudas",
        ],
        ctaText: "Crear Cuenta Gratis",
        isFeatured: false,
      },
      {
        name: "Premium",
        description:
          "Todo ilimitado y herramientas poderosas para un control total.",
        price: 4.99,
        features: [
          "Grupos y miembros ilimitados",
          "Escáner de recibos (OCR)",
          "Reportes avanzados (PDF/Excel)",
          "Categorías personalizadas",
          "Sin publicidad",
        ],
        ctaText: "Pasar a Premium",
        isFeatured: true,
      },
      {
        name: "Familiar",
        description: "Una sola suscripción para toda tu familia.",
        price: 8.99,
        features: [
          "Todo en Premium",
          "Hasta 6 cuentas Premium",
          "Dashboard familiar consolidado",
          "Gestión centralizada",
        ],
        ctaText: "Obtener Plan Familiar",
        isFeatured: false,
      },
    ],
  },
];

export const getProductById = (id) => {
  return productsData.find((product) => product.id === id);
};
