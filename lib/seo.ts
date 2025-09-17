// Configuración de SEO compartida

type SeoConfig = {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    siteName: string;
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
};

export const siteConfig = {
  name: 'TOP SECRET TATTOO',
  url: 'https://my-tattoo-page-one.vercel.app',
  description: 'Estúdio de tatuagem especializado em realismo, preto e cinza e colorido em Siderópolis, SC',
  links: {
    instagram: 'https://instagram.com/topsecrettattoo',
    whatsapp: 'https://wa.me/5553999202033',
  },
};

export const defaultSeo: Omit<SeoConfig, 'canonical'> = {
  title: 'TOP SECRET TATTOO | Tatuagens Personalizadas em Siderópolis/SC',
  description: 'Estúdio especializado em tatuagens realistas, preto e cinza e coloridas. Ambiente profissional e seguro em Siderópolis, SC. Agende sua sessão!',
  openGraph: {
    url: siteConfig.url,
    title: 'TOP SECRET TATTOO | Estúdio de Tatuagem em Siderópolis',
    description: 'Estúdio especializado em tatuagens realistas, preto e cinza e coloridas. Agende sua sessão!',
    images: [{
      url: `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'TOP SECRET TATTOO Studio - Tatuagens Personalizadas em Siderópolis/SC',
    }],
    siteName: siteConfig.name,
  },
  twitter: {
    handle: '@topsecrettattoo',
    site: '@topsecrettattoo',
    cardType: 'summary_large_image',
  },
};

// Función para generar metadatos SEO
export function generateSeoConfig(
  title: string,
  description: string,
  path: string = '',
  image?: string
): SeoConfig {
  const canonical = `${siteConfig.url}${path}`;
  
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    canonical,
    openGraph: {
      ...defaultSeo.openGraph,
      url: canonical,
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(image && {
        images: [{
          url: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        }],
      }),
    },
    twitter: {
      ...defaultSeo.twitter,
    },
  };
}
