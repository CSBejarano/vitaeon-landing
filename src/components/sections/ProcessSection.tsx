'use client';

import Image from 'next/image';
import { Phone, Stethoscope, TestTube, FileText, HeartPulse } from 'lucide-react';
import { Card, CardContent } from '@/components/ui';

const processSteps = [
  {
    number: 1,
    title: 'Valoracion Telefonica',
    description: 'Primera llamada gratuita para entender tu situacion y resolver dudas iniciales.',
    icon: Phone,
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop',
    glowColor: 'bg-blue-500/20',
  },
  {
    number: 2,
    title: 'Consulta Inicial',
    description: 'Evaluacion clinica completa con nuestro especialista en salud hormonal.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop',
    glowColor: 'bg-emerald-500/20',
  },
  {
    number: 3,
    title: 'Analitica',
    description: 'Estudio hormonal detallado para conocer tu perfil completo.',
    icon: TestTube,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    glowColor: 'bg-purple-500/20',
  },
  {
    number: 4,
    title: 'Plan Personalizado',
    description: 'Diseno de tratamiento VITAEON adaptado a tus necesidades.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    glowColor: 'bg-amber-500/20',
  },
  {
    number: 5,
    title: 'Seguimiento',
    description: 'Acompanamiento continuo con ajustes segun tu evolucion.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    glowColor: 'bg-rose-500/20',
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="py-20 sm:py-32 bg-vitaeon-navy-dark">
      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-6 flex items-center justify-center gap-4 flex-wrap">
            <span>Tu Proceso con</span>
            <Image
              src="/images/vitaeon/logo.png"
              alt="VITAEON"
              width={2000}
              height={600}
              className="h-20 sm:h-40 lg:h-54 w-auto -mb-3 sm:-mb-4 lg:-mb-5 -ml-4"
            />
          </h2>
          <p className="text-lg sm:text-xl text-vitaeon-cream/70">
            Un camino claro hacia tu bienestar hormonal,{' '}
            <span className="text-vitaeon-beige font-semibold">
              paso a paso y sin sorpresas.
            </span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="[perspective:1000px] group">
                <Card
                  className={`
                    relative overflow-hidden h-full
                    bg-vitaeon-navy/60 border-vitaeon-beige/20
                    shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                    transition-all duration-500 ease-out
                    hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]
                    hover:border-vitaeon-beige/50
                    hover:[transform:rotateY(-3deg)_rotateX(2deg)_translateY(-8px)_translateZ(10px)]
                    [transform-style:preserve-3d]
                  `}
                >
                  {/* Image with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vitaeon-navy-dark via-vitaeon-navy-dark/50 to-transparent" />

                    {/* Number badge with glow */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-vitaeon-beige flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,197,181,0.5)] transition-shadow duration-300">
                      <span className="text-lg font-bold text-vitaeon-navy-dark">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <CardContent className="relative pt-4 pb-6">
                    {/* Icon with hover effect */}
                    <div className="w-10 h-10 rounded-lg bg-vitaeon-beige/20 flex items-center justify-center mb-4 border border-vitaeon-beige/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-vitaeon-beige/30 group-hover:shadow-lg">
                      <Icon className="w-5 h-5 text-vitaeon-beige" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-vitaeon-cream mb-2 group-hover:text-vitaeon-beige transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-vitaeon-cream/60 leading-relaxed group-hover:text-vitaeon-cream/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </CardContent>

                  {/* Decorative glow */}
                  <div
                    className={`absolute -top-20 -right-20 h-40 w-40 rounded-full ${step.glowColor} blur-3xl opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-70`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute -bottom-10 -left-10 h-32 w-32 rounded-full ${step.glowColor} blur-2xl opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-50`}
                    aria-hidden="true"
                  />

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vitaeon-beige to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
