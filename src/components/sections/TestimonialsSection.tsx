'use client';

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui';
import { AnimatedGradientText } from '@/components/magicui';

const testimonials = [
  {
    name: 'Miguel R.',
    initials: 'MR',
    text: 'Despues de 3 meses de tratamiento, mi energia ha vuelto. Me siento como hace 10 anos.',
    rating: 5,
  },
  {
    name: 'Carlos M.',
    initials: 'CM',
    text: 'El equipo es muy profesional. La valoracion inicial fue muy completa y el seguimiento excelente.',
    rating: 5,
  },
  {
    name: 'Javier L.',
    initials: 'JL',
    text: 'Recupere mi vitalidad y mi vida sexual. Altamente recomendado.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-vitaeon-cream/30'
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-vitaeon-navy-dark">
      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-6">
            Lo que dicen{' '}
            <AnimatedGradientText colorFrom="#D4C4A8" colorTo="#7d9a78" className="font-bold">
              nuestros pacientes
            </AnimatedGradientText>
          </h2>
          <p className="text-lg text-vitaeon-cream/70">
            Historias reales de hombres que han recuperado su vitalidad con VITAEON
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-vitaeon-navy-dark/50 border-vitaeon-beige/20 hover:border-vitaeon-beige/40 transition-all duration-300 hover-lift"
            >
              <CardContent className="pt-6">
                {/* Avatar placeholder */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-vitaeon-beige/20 flex items-center justify-center">
                    <span className="text-vitaeon-beige font-semibold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-vitaeon-cream">
                      {testimonial.name}
                    </h4>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-vitaeon-cream/80 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
