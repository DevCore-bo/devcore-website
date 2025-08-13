export const productsData = [
  {
    id: "glucook",
    name: "Glucook",
    description:
      "Tu asistente inteligente para la gestión de la diabetes. Integra control de alimentación, registro de glucosa y nutrición personalizada con IA para mejorar tu bienestar.",
    keyFeatures: [
      { icon: "camera", text: "Escáner de Alimentos con IA" },
      { icon: "chat", text: "Chatbot Nutricional 24/7" },
      { icon: "chart", text: "Reportes y Seguimiento" },
      { icon: "recipes", text: "Planes Personalizados" },
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
    keyFeatures: [
      { icon: "pos", text: "Punto de Venta Integrado" },
      { icon: "inventory", text: "Gestión de Inventario" },
      { icon: "suppliers", text: "Control de Proveedores" },
      { icon: "analytics", text: "Analíticas de Ventas" },
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
    id: "coinsync",
    name: "CoinSync",
    description:
      "La aplicación definitiva para gestionar gastos compartidos e individuales. Sincroniza tus finanzas, liquida deudas y toma el control de tu dinero.",
    keyFeatures: [
      { icon: "groups", text: "Gestión de Grupos" },
      { icon: "scan", text: "Escáner de Recibos (OCR)" },
      { icon: "balance", text: "Balances Automáticos" },
      { icon: "notifications", text: "Notificaciones Inteligentes" },
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
