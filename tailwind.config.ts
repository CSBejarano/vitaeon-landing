import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        vitaeon: {
          'navy-dark': 'hsl(var(--vitaeon-navy-dark))',
          'navy': 'hsl(var(--vitaeon-navy))',
          'beige': 'hsl(var(--vitaeon-beige))',
          'sage': 'hsl(var(--vitaeon-sage))',
          'cream': 'hsl(var(--vitaeon-cream))',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1)',
        'elegant': '0 4px 14px rgba(0,0,0,0.1)',
        'glow': '0 0 30px rgba(59,130,246,0.3)',
        'glow-lg': '0 0 50px rgba(59,130,246,0.4)',
        'vitaeon': '0 8px 30px -12px rgba(212, 197, 181, 0.25)',
        'vitaeon-lg': '0 25px 50px -12px rgba(212, 197, 181, 0.35)',
        'vitaeon-card': '0 4px 20px -4px rgba(0, 0, 0, 0.3)',
      },
      maxWidth: {
        'vitaeon': '1400px',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'gradient': 'gradient 8s linear infinite',
        'background-position-spin': 'background-position-spin 3s linear infinite',
        'shine': 'shine var(--duration, 14s) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'background-position-spin': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'shine': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'accordion-down': {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
