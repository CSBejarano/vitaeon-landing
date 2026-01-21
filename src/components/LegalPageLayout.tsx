'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-vitaeon-navy-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-vitaeon-navy-dark/95 backdrop-blur-sm border-b border-vitaeon-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-vitaeon-beige hover:text-vitaeon-cream transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-vitaeon-cream mb-8">
          {title}
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-vitaeon-cream/80
          prose-headings:text-vitaeon-cream prose-headings:font-semibold
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:leading-relaxed prose-p:mb-4
          prose-ul:my-4 prose-li:my-1
          prose-a:text-vitaeon-sage prose-a:no-underline hover:prose-a:underline
          prose-strong:text-vitaeon-cream">
          {children}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-vitaeon-beige/10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-vitaeon-cream/60 text-sm">
          <p>© {new Date().getFullYear()} Vitaeon Clinic, S.L. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link href="/aviso-legal" className="hover:text-vitaeon-cream">Aviso Legal</Link>
            {' · '}
            <Link href="/politica-privacidad" className="hover:text-vitaeon-cream">Privacidad</Link>
            {' · '}
            <Link href="/politica-cookies" className="hover:text-vitaeon-cream">Cookies</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
