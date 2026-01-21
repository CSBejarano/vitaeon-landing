'use client';

import Image from 'next/image';
import { Dumbbell, Brain, Heart, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui';
import { AnimatedGradientText } from '@/components/magicui';

const symptomCategories = [
  {
    icon: Dumbbell,
    title: 'Síntomas Físicos',
    color: 'text-vitaeon-beige',
    bgColor: 'bg-vitaeon-beige/20',
    borderColor: 'border-vitaeon-beige/30',
    hoverBorder: 'hover:border-vitaeon-beige',
    gradient: 'from-amber-900/70 via-vitaeon-navy-dark/80 to-vitaeon-navy-dark',
    glowColor: 'bg-amber-500/20',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    symptoms: [
      'Pérdida de fuerza y masa muscular',
      'Aumento del índice graso',
      'Pérdida de vello corporal',
      'Fatiga persistente',
      'Bajo rendimiento físico',
    ],
  },
  {
    icon: Brain,
    title: 'Síntomas Mentales',
    color: 'text-vitaeon-sage',
    bgColor: 'bg-vitaeon-sage/20',
    borderColor: 'border-vitaeon-sage/30',
    hoverBorder: 'hover:border-vitaeon-sage',
    gradient: 'from-emerald-900/70 via-vitaeon-navy-dark/80 to-vitaeon-navy-dark',
    glowColor: 'bg-emerald-500/20',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    symptoms: [
      'Fatiga mental',
      'Depresión',
      'Cambios de humor e irritabilidad',
      'Ansiedad',
      'Falta de concentración',
      'Problemas de sueño e insomnio',
    ],
  },
  {
    icon: Heart,
    title: 'Salud Sexual',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    hoverBorder: 'hover:border-rose-400',
    gradient: 'from-rose-900/70 via-vitaeon-navy-dark/80 to-vitaeon-navy-dark',
    glowColor: 'bg-rose-500/20',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80',
    symptoms: [
      'Disminución del libido',
      'Disfunción eréctil',
      'Dificultad para mantener erecciones',
    ],
  },
];

export function SymptomsSection() {
  return (
    <section className="py-20 sm:py-32 bg-vitaeon-navy-dark">
      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-vitaeon-beige/20 text-vitaeon-beige rounded-full px-4 py-2 mb-6 border border-vitaeon-beige/30">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Identifica los síntomas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-6">
            ¿Te identificas con alguno de{' '}
            <AnimatedGradientText colorFrom="#D4C4A8" colorTo="#7d9a78" className="font-bold">
              estos síntomas?
            </AnimatedGradientText>
          </h2>
          <p className="text-lg text-vitaeon-cream/70 max-w-2xl mx-auto">
            El desequilibrio hormonal puede manifestarse de múltiples formas.
            Si experimentas varios de estos síntomas, es momento de actuar.
          </p>
        </div>

        {/* Symptoms grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {symptomCategories.map((category, i) => (
            <div key={i} className="[perspective:1000px] group">
              <Card
                className={`
                  relative overflow-hidden h-full
                  border ${category.borderColor} ${category.hoverBorder}
                  shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                  transition-all duration-500 ease-out
                  hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]
                  hover:[transform:rotateX(2deg)_translateY(-8px)_translateZ(10px)]
                  [transform-style:preserve-3d]
                `}
              >
                {/* Background image with gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient}`} />
                </div>

                <CardContent className="relative z-20 pt-8 pb-8">
                  {/* Icon with glow effect */}
                  <div className={`
                    mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl
                    ${category.bgColor} backdrop-blur-sm border ${category.borderColor}
                    shadow-lg transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-xl
                  `}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                    {category.title}
                  </h3>

                  {/* Symptoms list */}
                  <ul className="space-y-3">
                    {category.symptoms.map((symptom, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`mt-2 h-2 w-2 rounded-full ${category.bgColor} ${category.color} flex-shrink-0 shadow-sm`} />
                        <span className="text-vitaeon-cream/90 text-sm sm:text-base">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Decorative glows */}
                <div
                  className={`absolute -top-24 -right-24 h-48 w-48 rounded-full ${category.glowColor} blur-3xl opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-80`}
                  aria-hidden="true"
                />
                <div
                  className={`absolute -bottom-16 -left-16 h-40 w-40 rounded-full ${category.glowColor} blur-3xl opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-50`}
                  aria-hidden="true"
                />

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent ${category.color} opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-vitaeon-cream/70 text-lg mb-4">
            Si te identificas con <span className="text-vitaeon-cream font-semibold">3 o más síntomas</span>,
            te recomendamos una valoración profesional.
          </p>
          <p className="text-vitaeon-beige font-semibold">
            La primera consulta telefónica es completamente gratuita.
          </p>
        </div>
      </div>
    </section>
  );
}
