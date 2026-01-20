'use client';

import Image from 'next/image';
import { Phone, ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui';
import { Particles, BlurFade, AnimatedGradientText, NeonGradientCard, ShineBorder } from '@/components/magicui';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vitaeon/hero.png"
          alt="VITAEON Clinic - Salud Hormonal Masculina"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-vitaeon-navy-dark/85 backdrop-blur-[2px]" />
      </div>

      {/* Floating Particles with Parallax Effect */}
      <Particles
        className="absolute inset-0 z-[1]"
        quantity={50}
        staticity={70}
        ease={80}
        color="#D4C4A8"
        size={1.5}
      />

      {/* Decorative floating elements - keeping for depth */}
      <div
        className="absolute top-32 right-10 lg:right-32 h-64 w-64 lg:h-96 lg:w-96 rounded-full bg-vitaeon-beige/10 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-10 lg:left-32 h-48 w-48 lg:h-80 lg:w-80 rounded-full bg-vitaeon-sage/10 blur-3xl animate-float-delayed"
        aria-hidden="true"
      />

      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
        {/* Badge with BlurFade animation */}
        <BlurFade delay={0.1} direction="down">
          <div className="inline-flex items-center gap-2 bg-vitaeon-sage/20 text-vitaeon-sage rounded-full px-5 py-2.5 mb-10 border border-vitaeon-sage/30">
            <Shield className="w-5 h-5" />
            <span className="text-base font-semibold">Especialistas en TRT</span>
          </div>
        </BlurFade>

        {/* Headline - Bigger typography with BlurFade */}
        <BlurFade delay={0.2} direction="down">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-vitaeon-cream mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Restaurar el equilibrio,
            <br />
            <AnimatedGradientText
              colorFrom="#D4C4A8"
              colorTo="#7d9a78"
              className="font-bold"
            >
              no reinventarlo
            </AnimatedGradientText>
          </h1>
        </BlurFade>

        {/* Subheadline + CTAs wrapped in NeonGradientCard */}
        <BlurFade delay={0.3} direction="down">
          <NeonGradientCard
            borderRadius={20}
            borderSize={2}
            neonColors={{ firstColor: "#D4C4A8", secondColor: "#C4B49E" }}
            className="max-w-2xl mx-auto mb-16 relative"
          >
            <ShineBorder
              shineColor={["#D4C4A8", "#7d9a78", "#D4C4A8"]}
              borderWidth={1}
              duration={10}
            />
            <p className="text-xl sm:text-2xl text-vitaeon-cream mb-8 leading-relaxed text-center">
              Tratamientos de Terapia de Reemplazo de Testosterona (TRT) personalizados
              para recuperar tu energia, vitalidad y calidad de vida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                size="lg"
                className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark shadow-vitaeon-lg hover:shadow-vitaeon text-lg px-10 h-16 w-full sm:w-auto font-semibold transition-all duration-300 group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Valoracion Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark shadow-vitaeon-lg hover:shadow-vitaeon text-lg px-10 h-16 w-full sm:w-auto font-semibold transition-all duration-300"
              >
                Ver Servicios
              </Button>
            </div>
          </NeonGradientCard>
        </BlurFade>

        {/* Trust indicators with BlurFade */}
        <BlurFade delay={0.5} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-vitaeon-cream/70">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-vitaeon-beige" />
              <span className="text-base font-medium">Primera llamada gratis</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-vitaeon-beige" />
              <span className="text-base font-medium">Expertos certificados</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-vitaeon-beige" />
              <span className="text-base font-medium">Resultados en semanas</span>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vitaeon-navy-dark to-transparent" />
    </section>
  );
}
