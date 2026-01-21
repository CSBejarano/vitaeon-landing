'use client';

import Image from 'next/image';
import { Phone, ArrowRight, Award } from 'lucide-react';
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

      {/* Decorative floating elements */}
      <div
        className="absolute top-32 right-10 lg:right-32 h-64 w-64 lg:h-96 lg:w-96 rounded-full bg-vitaeon-beige/10 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-10 lg:left-32 h-48 w-48 lg:h-80 lg:w-80 rounded-full bg-vitaeon-sage/10 blur-3xl animate-float-delayed"
        aria-hidden="true"
      />

      <div className="max-w-vitaeon mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
        {/* Subtitle */}
        <BlurFade delay={0.1} direction="down">
          <p className="text-vitaeon-cream/70 text-lg sm:text-xl mb-6 tracking-wide">
            Salud hormonal masculina con enfoque médico
          </p>
        </BlurFade>

        {/* Headline */}
        <BlurFade delay={0.2} direction="down">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-vitaeon-cream mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Restaurar el equilibrio,
            <br />
            <AnimatedGradientText
              colorFrom="#D4C4A8"
              colorTo="#C4B49E"
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
              shineColor={["#D4C4A8", "#C4B49E", "#D4C4A8"]}
              borderWidth={1}
              duration={10}
            />
            <p className="text-lg sm:text-xl text-vitaeon-cream/90 mb-8 leading-relaxed text-center">
              Valoración médica individualizada de la salud hormonal masculina.
              Cuando existe indicación clínica, tratamiento supervisado orientado a
              mejorar síntomas y calidad de vida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark text-base px-8 h-12 w-full sm:w-auto font-medium transition-all duration-300 group rounded-lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Valoracion Gratuita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-vitaeon-beige hover:bg-vitaeon-beige/90 text-vitaeon-navy-dark text-base px-8 h-12 w-full sm:w-auto font-medium transition-all duration-300 rounded-lg"
              >
                Ver Servicios
              </Button>
            </div>
          </NeonGradientCard>
        </BlurFade>

        {/* Single trust indicator */}
        <BlurFade delay={0.5} direction="up">
          <div className="flex items-center justify-center gap-3 text-vitaeon-cream/70">
            <Award className="w-5 h-5 text-vitaeon-beige" />
            <span className="text-base font-medium">Primera llamada gratis</span>
          </div>
        </BlurFade>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vitaeon-navy-dark to-transparent" />
    </section>
  );
}
