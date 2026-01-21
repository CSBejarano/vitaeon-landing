'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, CheckCircle, Send, User, Mail, Loader2 } from 'lucide-react';
import { Button, Card, CardContent, Input, Label } from '@/components/ui';
import { AnimatedGradientText } from '@/components/magicui';

const benefits = [
  'Sin compromiso',
  'Confidencial',
  'Expertos certificados',
];

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const phoneValue = formData.get('phone') as string;

    // Validate phone has content
    if (!phoneValue || phoneValue.trim().length < 9) {
      setError('Por favor, introduce un número de teléfono válido');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: phoneValue,
          email: formData.get('email') || null,
          business_slug: 'vitaeon',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el formulario');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vitaeon/wellness.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-vitaeon-navy-dark/90 backdrop-blur-sm" />
      </div>

      {/* Decorative floating elements */}
      <div
        className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-vitaeon-beige/10 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-vitaeon-sage/10 blur-3xl animate-float-delayed"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3D Card with depth */}
        <div className="max-w-4xl mx-auto [perspective:1200px]">
          <Card
            className="
              relative overflow-hidden
              bg-gradient-to-br from-vitaeon-navy/90 via-vitaeon-navy/80 to-vitaeon-navy-dark/90
              backdrop-blur-xl
              border border-vitaeon-beige/20
              shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_-10px_rgba(212,197,181,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]
              hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.6),0_0_60px_-10px_rgba(212,197,181,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]
              transition-all duration-500 ease-out
              hover:[transform:translateY(-4px)_rotateX(1deg)]
              [transform-style:preserve-3d]
            "
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vitaeon-beige to-transparent" />

            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-vitaeon-beige/5 via-transparent to-vitaeon-sage/5 pointer-events-none" />

            <CardContent className="py-12 sm:py-16 px-6 sm:px-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: Text content */}
                <div className="text-center lg:text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-vitaeon-beige/15 text-vitaeon-beige rounded-full px-4 py-2 mb-6 border border-vitaeon-beige/25 shadow-lg shadow-vitaeon-beige/10">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-semibold">Valoración Gratuita</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-4 leading-tight">
                    Tu mejor versión
                    <br />
                    <AnimatedGradientText colorFrom="#D4C4A8" colorTo="#7d9a78" className="font-bold">
                      te espera
                    </AnimatedGradientText>
                  </h2>

                  {/* Subheadline */}
                  <p className="text-lg text-vitaeon-cream/70 mb-8">
                    Da el primer paso hacia tu bienestar. Solicita una valoración gratuita
                    con nuestros especialistas.
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-3">
                    {benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-vitaeon-cream/80"
                      >
                        <CheckCircle className="h-5 w-5 text-vitaeon-sage flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Form */}
                <div className="relative">
                  {/* Form card with inner shadow */}
                  <div
                    className="
                      bg-vitaeon-navy-dark/60
                      rounded-2xl
                      p-6 sm:p-8
                      border border-vitaeon-beige/15
                      shadow-[inset_0_2px_20px_rgba(0,0,0,0.3),0_10px_40px_-10px_rgba(0,0,0,0.4)]
                    "
                  >
                    {isSubmitted ? (
                      /* Success state */
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full bg-vitaeon-sage/20 flex items-center justify-center mx-auto mb-4 border border-vitaeon-sage/30">
                          <CheckCircle className="h-8 w-8 text-vitaeon-sage" />
                        </div>
                        <h3 className="text-xl font-bold text-vitaeon-cream mb-2">
                          ¡Solicitud enviada!
                        </h3>
                        <p className="text-vitaeon-cream/70">
                          Te contactaremos en menos de 24 horas.
                        </p>
                      </div>
                    ) : (
                      /* Form */
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-vitaeon-cream mb-1">
                            Solicita tu valoración
                          </h3>
                          <p className="text-sm text-vitaeon-cream/60">
                            Te llamamos sin compromiso
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* Name field */}
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-vitaeon-cream/80 text-sm font-medium">
                              Nombre completo
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-vitaeon-cream/40" />
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Tu nombre"
                                className="
                                  pl-10 h-12
                                  bg-vitaeon-navy/50
                                  border-vitaeon-beige/20
                                  text-vitaeon-cream
                                  placeholder:text-vitaeon-cream/40
                                  focus:border-vitaeon-beige/50
                                  focus:ring-vitaeon-beige/20
                                  transition-all duration-300
                                "
                              />
                            </div>
                          </div>

                          {/* Phone field */}
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-vitaeon-cream/80 text-sm font-medium">
                              Teléfono
                            </Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-vitaeon-cream/40" />
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="+34 600 000 000"
                                className="
                                  pl-10 h-12
                                  bg-vitaeon-navy/50
                                  border-vitaeon-beige/20
                                  text-vitaeon-cream
                                  placeholder:text-vitaeon-cream/40
                                  focus:border-vitaeon-beige/50
                                  focus:ring-vitaeon-beige/20
                                  transition-all duration-300
                                "
                              />
                            </div>
                          </div>

                          {/* Email field */}
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-vitaeon-cream/80 text-sm font-medium">
                              Email <span className="text-vitaeon-cream/40">(opcional)</span>
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-vitaeon-cream/40" />
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="tu@email.com"
                                className="
                                  pl-10 h-12
                                  bg-vitaeon-navy/50
                                  border-vitaeon-beige/20
                                  text-vitaeon-cream
                                  placeholder:text-vitaeon-cream/40
                                  focus:border-vitaeon-beige/50
                                  focus:ring-vitaeon-beige/20
                                  transition-all duration-300
                                "
                              />
                            </div>
                          </div>
                        </div>

                        {/* Submit button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            w-full h-12 text-sm font-semibold
                            bg-vitaeon-beige hover:bg-vitaeon-beige/90
                            text-vitaeon-navy-dark
                            shadow-lg shadow-vitaeon-beige/25
                            hover:shadow-xl hover:shadow-vitaeon-beige/30
                            disabled:opacity-70 disabled:cursor-not-allowed
                            transition-all duration-300
                            group
                          "
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Solicitar Orientación Inicial Gratuita
                              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>

                        {/* Error message */}
                        {error && (
                          <p className="text-sm text-red-400 text-center bg-red-900/20 rounded-lg py-2 px-3">
                            {error}
                          </p>
                        )}

                        {/* Privacy note with RGPD */}
                        <div className="flex items-start gap-2 text-xs text-vitaeon-cream/50">
                          <input
                            type="checkbox"
                            id="rgpd"
                            required
                            className="mt-0.5 rounded border-vitaeon-beige/30 bg-vitaeon-navy/50 text-vitaeon-beige focus:ring-vitaeon-beige/20"
                          />
                          <label htmlFor="rgpd">
                            Acepto la política RGPD. Para obtener más información sobre nuestras prácticas de
                            privacidad y cómo nos comprometemos a proteger y respetar tu privacidad, consulta
                            nuestra{' '}
                            <a href="/politica-privacidad" className="text-vitaeon-beige hover:underline">
                              Política de privacidad
                            </a>.
                          </label>
                        </div>
                      </form>
                    )}
                  </div>

                  {/* Decorative corner glow */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-vitaeon-beige/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-vitaeon-sage/10 rounded-full blur-2xl pointer-events-none" />
                </div>
              </div>
            </CardContent>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vitaeon-beige/30 to-transparent" />
          </Card>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <Image
            src="/images/vitaeon/logo.png"
            alt="VITAEON Clinic"
            width={280}
            height={80}
            className="h-20 w-auto mx-auto mb-3"
          />
          <p className="text-vitaeon-cream/60">
            Especialistas en salud hormonal masculina
          </p>
        </div>
      </div>
    </section>
  );
}
