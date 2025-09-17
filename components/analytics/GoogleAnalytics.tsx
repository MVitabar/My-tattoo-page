'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { pageview } from '@/lib/analytics';

// Componente interno que usa useSearchParams
function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Solo rastrear en producción
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
      return;
    }
    
    if (pathname) {
      // Usar setTimeout para asegurar que gtag esté disponible
      const timer = setTimeout(() => {
        pageview(pathname);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  // No renderizar nada si no estamos en producción o falta el ID de medición
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
    </>
  );
}
