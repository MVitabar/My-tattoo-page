import { FC } from 'react';
import { LocalBusiness, WithContext } from 'schema-dts';

type JsonLdProps = {
  data: WithContext<LocalBusiness>;
};

export const JsonLd: FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
};

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "@id": "https://my-tattoo-page-one.vercel.app/#tattoo-parlor",
  "name": "TOP SECRET TATTOO",
  "image": "https://my-tattoo-page-one.vercel.app/og-image.jpg",
  "description": "Estúdio de tatuagem especializado em realismo, preto e cinza e colorido em Siderópolis, SC",
  "url": "https://my-tattoo-page-one.vercel.app",
  "telephone": "+5553999202033",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Melvin Jones, 50",
    "addressLocality": "Siderópolis",
    "addressRegion": "SC",
    "postalCode": "88860-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -28.59606201187244,
    "longitude": -49.42681252770116
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "14:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/topsecrettattoo/"
  ]
};
