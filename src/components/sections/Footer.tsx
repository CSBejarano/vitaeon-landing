'use client';

import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const navigationLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

const serviceLinks = [
  { label: 'Terapia TRT', href: '#servicios' },
  { label: 'Consulta Inicial', href: '#proceso' },
  { label: 'Analiticas Hormonales', href: '#servicios' },
  { label: 'Seguimiento Continuo', href: '#proceso' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vitaeon-navy-dark border-t border-vitaeon-beige/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main footer content - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4 lg:col-span-1">
            <a href="/vitaeon" className="inline-block">
              <Image
                src="/images/vitaeon/logo.png"
                alt="VITAEON Clinic"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-vitaeon-cream/60 text-sm leading-relaxed max-w-sm">
              Especialistas en salud hormonal masculina. Recupera tu energia,
              vitalidad y bienestar con tratamientos personalizados respaldados
              por la ciencia.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-vitaeon-beige font-semibold text-sm uppercase tracking-wider">
              Clinica
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-vitaeon-cream/60 hover:text-vitaeon-beige transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-vitaeon-beige font-semibold text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <nav aria-label="Services navigation">
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-vitaeon-cream/60 hover:text-vitaeon-beige transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-vitaeon-beige font-semibold text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-vitaeon-cream/60 text-sm">
                <Phone className="h-4 w-4 text-vitaeon-sage flex-shrink-0" />
                <a
                  href="tel:+34900000000"
                  className="hover:text-vitaeon-beige transition-colors duration-200"
                >
                  900 000 000
                </a>
              </li>
              <li className="flex items-center gap-3 text-vitaeon-cream/60 text-sm">
                <Mail className="h-4 w-4 text-vitaeon-sage flex-shrink-0" />
                <a
                  href="mailto:info@vitaeon.es"
                  className="hover:text-vitaeon-beige transition-colors duration-200"
                >
                  info@vitaeon.es
                </a>
              </li>
              <li className="flex items-start gap-3 text-vitaeon-cream/60 text-sm">
                <Clock className="h-4 w-4 text-vitaeon-sage flex-shrink-0 mt-0.5" />
                <span>
                  Lunes a Viernes
                  <br />
                  9:00 - 20:00
                </span>
              </li>
              <li className="flex items-start gap-3 text-vitaeon-cream/60 text-sm">
                <MapPin className="h-4 w-4 text-vitaeon-sage flex-shrink-0 mt-0.5" />
                <span>
                  Madrid, Espana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-vitaeon-beige/10 mt-12 pt-8">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-vitaeon-cream/40 text-sm">
              &copy; {currentYear} VITAEON Clinic. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-vitaeon-cream/40 hover:text-vitaeon-beige transition-colors duration-200 text-sm"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-vitaeon-cream/40 hover:text-vitaeon-beige transition-colors duration-200 text-sm"
              >
                Terminos
              </a>
              <a
                href="#"
                className="text-vitaeon-cream/40 hover:text-vitaeon-beige transition-colors duration-200 text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
