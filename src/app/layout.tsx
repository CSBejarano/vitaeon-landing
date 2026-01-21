import type { Metadata, Viewport } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import { CookieBanner } from '@/components/CookieBanner';
import './globals.css';
import './vitaeon-theme.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'VITAEON Clinic - Especialistas en Salud Hormonal Masculina',
    template: '%s | VITAEON Clinic',
  },
  description:
    'Clínica especializada en Terapia de Reemplazo de Testosterona (TRT). Recupera tu vitalidad con tratamientos personalizados y seguimiento médico continuo.',
  keywords: [
    'TRT',
    'testosterona',
    'salud hormonal',
    'clínica masculina',
    'terapia hormonal',
    'déficit testosterona',
    'fatiga',
    'energía',
    'vitalidad',
  ],
  authors: [{ name: 'VITAEON Clinic' }],
  creator: 'VITAEON Clinic',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://vitaeonclinic.com',
    siteName: 'VITAEON Clinic',
    title: 'VITAEON Clinic - Especialistas en Salud Hormonal Masculina',
    description:
      'Clínica especializada en Terapia de Reemplazo de Testosterona (TRT). Recupera tu vitalidad con tratamientos personalizados.',
    images: [
      {
        url: '/images/vitaeon/hero.png',
        width: 1200,
        height: 630,
        alt: 'VITAEON Clinic - Salud Hormonal Masculina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VITAEON Clinic - Especialistas en Salud Hormonal Masculina',
    description:
      'Clínica especializada en TRT. Recupera tu vitalidad con tratamientos personalizados.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1E2D3D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${cormorant.variable} font-manrope antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
