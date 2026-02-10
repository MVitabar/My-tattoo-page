let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

// Configuración de seguridad de encabezados HTTP
const securityHeaders = [
  // Protección XSS
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Protección contra clickjacking
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Política de seguridad de contenido
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://images.unsplash.com https://plus.unsplash.com https://source.unsplash.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com",
      "frame-src 'self' https://www.google.com",
      "media-src 'self' data:",
    ].join('; '),
  },
  // Referrer Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Permissions Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Eliminado: eslint - ya no es compatible con Next.js 16
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración de imágenes - actualizada a remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'my-tattoo-page-one.vercel.app',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 semana
    unoptimized: process.env.NODE_ENV !== 'production', // Desactivar optimización solo en desarrollo
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Configuración de encabezados de seguridad
  async headers() {
    return [
      {
        // Aplicar a todas las rutas
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  // Configuración de redirecciones
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Agrega más redirecciones según sea necesario
    ];
  },
  // Configuración de reescritura de URL
  async rewrites() {
    return [
      // Agrega reescrituras de URL según sea necesario
    ];
  },
  // Configuración de caché para producción
  ...(process.env.NODE_ENV === 'production' && {
    headers: async () => [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ],
  }),
  // Configuración de compresión
  compress: true,
  // Configuración de seguridad
  poweredByHeader: false,
  reactStrictMode: true,
  // Eliminado: i18n - no es compatible con App Router en Next.js 16
  // Para internacionalización, usa: https://nextjs.org/docs/app/building-your-application/routing/internationalization
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
