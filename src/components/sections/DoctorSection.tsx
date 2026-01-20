'use client';

import Image from 'next/image';
import { Award, Building2, Clock } from 'lucide-react';
import { Badge, Card, CardContent } from '@/components/ui';
import { AnimatedGradientText } from '@/components/magicui';

const credentials = [
  { icon: Award, label: 'SEME' },
  { icon: Building2, label: 'Colegio de Medicos' },
  { icon: Clock, label: '+15 anos experiencia' },
];

export function DoctorSection() {
  return (
    <section className="py-20 sm:py-32 bg-vitaeon-navy-dark">
      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-6">
            Conoce a{' '}
            <AnimatedGradientText colorFrom="#D4C4A8" colorTo="#7d9a78" className="font-bold">
              Nuestro Especialista
            </AnimatedGradientText>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          {/* Image - más grande */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-80 h-[28rem] sm:w-96 sm:h-[32rem] lg:w-[420px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-vitaeon-navy-dark/60 via-transparent to-transparent z-10" />

              {/* Doctor image */}
              <Image
                src="/images/vitaeon/doctor.png"
                alt="Dr. Antonio Garcia - Especialista en salud hormonal masculina"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
              />
            </div>
          </div>

          {/* Content dentro de Card con efecto 3D */}
          <div className="order-2 lg:order-2 [perspective:1000px]">
            <Card className="bg-vitaeon-navy/50 border-vitaeon-beige/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-vitaeon-beige/30 transition-all duration-500 hover:[transform:rotateY(-5deg)_rotateX(2deg)_translateZ(20px)] [transform-style:preserve-3d]">
              <CardContent className="p-6 sm:p-8">
                {/* Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-vitaeon-cream mb-2">
                  Dr. Antonio Garcia
                </h3>

                {/* Specialty */}
                <p className="text-lg text-vitaeon-beige font-medium mb-6">
                  Medicina Integrativa y Salud Hormonal Masculina
                </p>

                {/* Credentials badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {credentials.map((credential, index) => (
                    <Badge
                      key={index}
                      className="bg-vitaeon-sage/20 text-vitaeon-sage border-vitaeon-sage/30 px-4 py-2"
                    >
                      <credential.icon className="h-4 w-4 mr-2" />
                      {credential.label}
                    </Badge>
                  ))}
                </div>

                {/* Bio */}
                <div className="space-y-4 text-vitaeon-cream/80 leading-relaxed">
                  <p>
                    Especializado en el tratamiento de reemplazo de testosterona (TRT) y
                    optimizacion hormonal masculina. Su enfoque integrador combina la medicina
                    basada en evidencia con un seguimiento personalizado de cada paciente.
                  </p>
                  <p>
                    Ha ayudado a cientos de hombres a recuperar su vitalidad, energia y
                    calidad de vida mediante protocolos de tratamiento individualizados
                    y un acompanamiento medico continuo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
