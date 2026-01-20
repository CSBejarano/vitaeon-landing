'use client';

import { Shield, Award, Clock, Users } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    text: 'Especialistas Certificados',
  },
  {
    icon: Award,
    text: 'Primera Valoracion Gratis',
  },
  {
    icon: Clock,
    text: 'Resultados en Semanas',
  },
  {
    icon: Users,
    text: '+500 Pacientes',
  },
] as const;

export function TrustBadges() {
  return (
    <section className="relative py-8 border-y border-vitaeon-beige/20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-vitaeon-navy-dark via-[#1a2836] to-vitaeon-navy-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-vitaeon-beige/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-vitaeon-sage/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.text}
                className="flex items-center justify-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-vitaeon-beige/10 hover:scale-105 cursor-default group"
              >
                <Icon className="w-5 h-5 text-vitaeon-beige flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium text-vitaeon-cream text-center">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
