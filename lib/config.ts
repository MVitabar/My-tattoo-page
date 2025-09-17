// Configuración de la aplicación

export const config = {
  // Google Analytics
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  },
  
  // Configuración del sitio
  site: {
    name: 'TOP SECRET TATTOO',
    url: 'https://my-tattoo-page-one.vercel.app',
    description: 'Estúdio de tatuagem especializado em realismo, preto e cinza e colorido em Siderópolis, SC',
    locale: 'pt-BR',
    twitter: '@topsecrettattoo',
  },
  
  // Configuración de contacto
  contact: {
    phone: '+5553999202033',
    email: 'contacto@topsecrettattoo.com',
    address: {
      street: 'Rua Melvin Jones, 50',
      city: 'Siderópolis',
      region: 'SC',
      postalCode: '88860-000',
      country: 'BR',
      geo: {
        latitude: -28.59606201187244,
        longitude: -49.42681252770116,
      },
    },
    social: {
      instagram: 'https://instagram.com/topsecrettattoo',
      whatsapp: 'https://wa.me/5553999202033',
      facebook: 'https://facebook.com/topsecrettattoo',
    },
  },
  
  // Horario de atención
  openingHours: [
    {
      day: 'Martes a Sábado',
      hours: '14:00 - 22:00',
    },
    {
      day: 'Domingo y Lunes',
      hours: 'Cerrado',
    },
  ],
};

export default config;
