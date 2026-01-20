'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#sintomas', label: 'Sintomas' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-vitaeon-navy-dark/95 backdrop-blur-sm border-b border-vitaeon-beige/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/vitaeon"
            className="flex items-center gap-2"
            aria-label="VITAEON Clinic - Inicio"
          >
            <Image
              src="/images/vitaeon/logo.png"
              alt="VITAEON Clinic"
              width={180}
              height={50}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-vitaeon-cream/80 hover:text-vitaeon-beige text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop: Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+34900000000"
              className="flex items-center gap-2 text-vitaeon-cream/80 hover:text-vitaeon-beige transition-colors duration-200"
              aria-label="Llamar al telefono de contacto"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-semibold">900 000 000</span>
            </a>
            <Button
              size="default"
              className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark shadow-lg shadow-vitaeon-beige/25 hover:shadow-vitaeon-beige/40 font-semibold transition-all duration-300"
            >
              Valoracion Gratuita
            </Button>
          </div>

          {/* Mobile: CTA + Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              size="sm"
              className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark shadow-lg font-semibold"
            >
              <Phone className="w-4 h-4 mr-1" />
              Llamar
            </Button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-vitaeon-cream/80 hover:text-vitaeon-beige transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className="py-4 border-t border-vitaeon-beige/20"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-vitaeon-cream/80 hover:text-vitaeon-beige hover:bg-vitaeon-navy/50 rounded-lg text-base font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <a
                href="tel:+34900000000"
                className="flex items-center gap-2 text-vitaeon-beige font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>900 000 000</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
