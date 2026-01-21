'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui';

const COOKIE_CONSENT_KEY = 'vitaeon_cookie_consent';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX - don't show immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      accepted: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-vitaeon-navy border border-vitaeon-beige/20 rounded-2xl shadow-2xl shadow-black/50 backdrop-blur-sm p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="hidden sm:flex h-12 w-12 rounded-xl bg-vitaeon-beige/10 items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6 text-vitaeon-beige" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-vitaeon-cream mb-1">
                Utilizamos cookies
              </h3>
              <p className="text-sm text-vitaeon-cream/70 leading-relaxed">
                Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico
                y personalizar el contenido. Puedes aceptar todas las cookies o configurar tus preferencias.{' '}
                <Link
                  href="/politica-cookies"
                  className="text-vitaeon-beige hover:underline font-medium"
                >
                  Más información
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                onClick={declineCookies}
                variant="outline"
                className="border-vitaeon-cream/20 text-vitaeon-cream/70 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
              >
                Rechazar
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="border-vitaeon-beige/30 text-vitaeon-cream hover:bg-vitaeon-beige/10 hover:border-vitaeon-beige/50"
              >
                Solo esenciales
              </Button>
              <Button
                onClick={acceptCookies}
                className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark font-semibold"
              >
                Aceptar todas
              </Button>
            </div>

            {/* Close button (mobile) */}
            <button
              onClick={declineCookies}
              className="absolute top-3 right-3 sm:hidden p-1 text-vitaeon-cream/50 hover:text-vitaeon-cream"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
