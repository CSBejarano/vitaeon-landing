'use client';

import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const clinicLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Equipo médico', href: '#equipo' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

const serviceLinks = [
  { label: 'Consulta médica de revisión', href: '#servicios' },
  { label: 'Programa de seguimiento clínico', href: '#servicios' },
  { label: 'Consulta Inicial', href: '#servicios' },
  { label: 'Programa ESSENTIAL', href: '#servicios' },
  { label: 'Programa ANUAL', href: '#servicios' },
];

const legalLinks = [
  { label: 'Aviso Legal', href: '/aviso-legal' },
  { label: 'Política de Privacidad', href: '/politica-privacidad' },
  { label: 'Condiciones Generales', href: '/condiciones-generales' },
  { label: 'Política de Cookies', href: '/politica-cookies' },
  { label: 'Consentimiento Informado', href: '/consentimiento-informado' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vitaeon-navy-dark border-t border-vitaeon-beige/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main footer content - 5 columns with proportional spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.6fr_1.2fr_1fr_1fr] gap-10">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <Image
                src="/images/vitaeon/logo.png"
                alt="VITAEON Clinic"
                width={400}
                height={120}
                className="h-16 w-auto"
              />
            </a>
            <p className="text-vitaeon-cream/60 text-sm leading-relaxed">
              Especialistas en salud hormonal masculina.
              <br />
              Recupera tu energía, vitalidad y bienestar
              <br />
              con tratamientos personalizados respaldados
              <br />
              por la ciencia.
            </p>
          </div>

          {/* Column 2: Clínica */}
          <div className="space-y-4">
            <h3 className="text-vitaeon-beige font-semibold text-sm uppercase tracking-wider">
              Clínica
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {clinicLinks.map((link) => (
                  <li key={link.href + link.label}>
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

          {/* Column 3: Servicios */}
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

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-vitaeon-beige font-semibold text-sm uppercase tracking-wider">
              Legal
            </h3>
            <nav aria-label="Legal navigation">
              <ul className="space-y-3">
                {legalLinks.map((link) => (
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

          {/* Column 5: Contact Information */}
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
                  href="mailto:info@vitaeonclinic.com"
                  className="hover:text-vitaeon-beige transition-colors duration-200"
                >
                  info@vitaeonclinic.com
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
                  Av. Catalunya 22D, 3º-3ª
                  <br />
                  43002 Tarragona
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
            <p className="text-vitaeon-cream/30 text-xs">
              Especialistas en salud hormonal masculina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
