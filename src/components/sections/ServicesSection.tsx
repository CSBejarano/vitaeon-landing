'use client';

import { Check, Stethoscope, RefreshCw, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, Badge, Button, cn } from '@/components/ui';
import { AnimatedGradientText } from '@/components/magicui';

const treatmentServices = [
  {
    name: 'Consulta médica de revisión',
    price: '55',
    description: 'Seguimiento puntual',
    features: [
      'Revisión médica del tratamiento actual',
      'Valoración de dosis y pautas según criterio clínico',
      'Resolución de dudas clínicas',
    ],
  },
  {
    name: 'Programa de seguimiento clínico',
    price: '150',
    description: 'Seguimiento trimestral',
    features: [
      '3 consultas médicas de seguimiento',
      'Valoración periódica de seguridad y evolución',
      'Ajustes terapéuticos cuando estén indicados',
      'Flexibilidad horaria',
    ],
    savings: '15',
  },
];

const diagnosticServices = [
  {
    name: 'Consulta Inicial',
    price: '99',
    description: '',
    features: [
      'Evaluación clínica avanzada',
      'Revisión analítica básica',
      'Diseño tratamiento VITAEON',
    ],
    recommended: false,
  },
  {
    name: 'Programa ESSENTIAL',
    price: '185',
    description: 'Consulta inicial y seguimiento',
    features: [
      'Consulta inicial completa',
      '2 seguimientos clínicos',
      'Ajuste de dosis por consulta',
      'Seguimiento tratamiento VITAEON',
    ],
    recommended: true,
    savings: '62',
  },
  {
    name: 'Programa ANUAL',
    price: '325',
    description: 'Cuidado integral todo el año',
    features: [
      'Consulta inicial completa',
      '4 seguimientos clínicos',
      'Ajuste progresivo por consulta',
      'Seguimiento tratamiento VITAEON',
      'Acceso prioritario',
    ],
    recommended: false,
    savings: '146',
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-32 bg-vitaeon-navy-dark">
      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vitaeon-cream mb-6">
            Nuestros{' '}
            <AnimatedGradientText colorFrom="#D4C4A8" colorTo="#7d9a78" className="font-bold">
              Servicios
            </AnimatedGradientText>
          </h2>
          <p className="text-lg text-vitaeon-cream/70">
            En Vitaeon Clinic diferenciamos dos perfiles de pacientes según su situación clínica.
            <br />
            <span className="text-vitaeon-beige font-medium">
              En todos los casos, la primera valoración telefónica es gratuita y orientada a determinar el itinerario más adecuado.
            </span>
          </p>
        </div>

        {/* Patients with previous treatment */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-10 w-10 rounded-lg bg-vitaeon-sage/20 flex items-center justify-center">
              <RefreshCw className="h-5 w-5 text-vitaeon-sage" />
            </div>
            <h3 className="text-2xl font-bold text-vitaeon-cream">
              Pacientes con tratamiento hormonal previo
            </h3>
          </div>
          <p className="text-vitaeon-cream/60 text-center mb-8 max-w-3xl mx-auto">
            Dirigido a pacientes que ya cuentan con un diagnóstico previo o se encuentran en tratamiento hormonal y desean un seguimiento médico profesional.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {treatmentServices.map((service, i) => (
              <Card
                key={i}
                className="relative overflow-hidden bg-vitaeon-navy-dark/50 border-vitaeon-beige/30 hover:border-vitaeon-beige transition-all duration-300 hover-lift shadow-vitaeon-card"
              >
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-vitaeon-cream mb-2">{service.name}</h4>
                  <p className="text-sm text-vitaeon-cream/60 mb-4">{service.description}</p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl font-bold text-vitaeon-cream">{service.price}€</span>
                    {service.savings && (
                      <Badge className="bg-vitaeon-sage/30 text-vitaeon-sage border-vitaeon-sage/50 px-3 py-1 text-sm font-semibold">
                        Ahorras {service.savings}€
                      </Badge>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-vitaeon-sage flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-vitaeon-cream/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer for treatment patients */}
          <p className="text-vitaeon-cream/50 text-sm text-center mt-8 max-w-3xl mx-auto">
            La continuidad o modificación del tratamiento estará siempre sujeta a valoración médica individualizada.
          </p>
        </div>

        {/* Patients without previous diagnosis */}
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-10 w-10 rounded-lg bg-vitaeon-beige/20 flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-vitaeon-beige" />
            </div>
            <h3 className="text-2xl font-bold text-vitaeon-cream">
              Pacientes sin diagnóstico previo
            </h3>
          </div>
          <p className="text-vitaeon-cream/60 text-center mb-8 max-w-3xl mx-auto">
            Dirigido a hombres que presentan síntomas compatibles con un posible desequilibrio hormonal y desean una valoración médica completa. El objetivo es determinar si existe o no una alteración hormonal y, en su caso, definir las opciones terapéuticas más adecuadas.
          </p>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto pt-4">
            {diagnosticServices.map((service) => (
              <Card
                key={service.name}
                className={cn(
                  'relative overflow-visible bg-vitaeon-navy-dark/50 transition-all duration-300 shadow-vitaeon-card border-vitaeon-beige/30',
                  'hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-vitaeon-beige hover:z-10'
                )}
              >
                {service.recommended && (
                  <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-vitaeon-beige via-vitaeon-sage to-vitaeon-beige rounded-t-lg" />
                )}
                {service.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-vitaeon-beige text-vitaeon-navy-dark border-0 shadow-md z-20">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Recomendado
                  </Badge>
                )}

                <CardContent className="pt-8">
                  <h4 className="text-xl font-bold text-vitaeon-cream mb-2">{service.name}</h4>
                  {service.description && (
                    <p className="text-sm text-vitaeon-cream/60 mb-4">{service.description}</p>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl font-bold text-vitaeon-cream">{service.price}€</span>
                    {service.savings && (
                      <Badge className="bg-vitaeon-sage/30 text-vitaeon-sage border-vitaeon-sage/50 px-3 py-1 text-sm font-semibold">
                        Ahorras {service.savings}€
                      </Badge>
                    )}
                  </div>

                  <Button
                    className={cn(
                      'w-full mb-6 group',
                      service.recommended
                        ? 'bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark'
                        : 'bg-vitaeon-navy hover:bg-vitaeon-navy-dark text-vitaeon-cream'
                    )}
                  >
                    Solicitar Valoración
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-vitaeon-sage flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-vitaeon-cream/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer for diagnostic patients */}
          <p className="text-vitaeon-cream/50 text-sm text-center mt-8 max-w-4xl mx-auto">
            La indicación, continuación o modificación de cualquier tratamiento se realiza exclusivamente tras valoración médica individualizada y puede no estar indicada en todos los casos.
          </p>
        </div>
      </div>
    </section>
  );
}
