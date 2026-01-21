# CLAUDE.md

Vitaeon Landing - Next.js 16 landing page para VITAEON Clinic (salud hormonal masculina).

## Commands
```bash
pnpm install          # Instalar dependencias
pnpm dev              # Servidor desarrollo (port 3000)
pnpm build            # Build produccion
pnpm lint             # Linting
```

## Stack
- Next.js 16.1.4 + React 19 + TypeScript
- Tailwind CSS 3.4.17
- Radix UI (Accordion, Label, Slot)
- Lucide React (Icons)
- Motion (Animations)

## Structure
```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Landing principal
│   ├── aviso-legal/       # Paginas legales (5)
│   ├── politica-privacidad/
│   ├── politica-cookies/
│   ├── condiciones-generales/
│   └── consentimiento-informado/
├── components/
│   ├── sections/          # 11 secciones (Header, Hero, Symptoms, etc.)
│   ├── ui/                # Componentes base (Button, Card, Input, etc.)
│   ├── magicui/           # Efectos visuales (Particles, BlurFade, etc.)
│   ├── CookieBanner.tsx   # Banner cookies con localStorage
│   └── LegalPageLayout.tsx
└── lib/utils.ts           # Utilidad cn() para Tailwind
```

## Theme Colors (vitaeon-theme.css)
- Navy Dark (#1E2D3D): Fondos principales
- Navy (#2C3E50): Secciones alternas
- Beige (#D4C5B5): Acentos y CTAs
- Sage (#8B9A8B): Badges e iconos
- Cream (#F5F5F0): Textos claros

## Key Components
| Component | Purpose |
|-----------|---------|
| HeroSection | Hero con particulas y CTA |
| SymptomsSection | 3 categorias de sintomas con cards |
| ServicesSection | Pricing con 2 grupos de servicios |
| DoctorSection | Info Dr. Eduard Cambra Garcia |
| CTASection | Formulario contacto con validacion |
| CookieBanner | Consentimiento cookies RGPD |

## URLs
- Production: https://vitaeon-landing.vercel.app
- GitHub: https://github.com/CSBejarano/vitaeon-landing

## Fonts
- Manrope (sans-serif): Texto principal
- Cormorant Garamond (serif): Acentos

---
*Last updated: 2026-01-21*
