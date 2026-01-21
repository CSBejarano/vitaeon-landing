# CONTINUE_SESSION.md - Quick Context Recovery

## Project: Vitaeon Landing
Landing page profesional para VITAEON Clinic - Clínica de salud hormonal masculina (TRT)

## Quick Start
```bash
cd /Users/cristianbejaranomendez/Documents/GitHub/vitaeon-landing
pnpm dev  # http://localhost:3000
```

## Stack
- **Framework:** Next.js 16.1.4 (App Router)
- **UI:** React 19 + Tailwind CSS 3.4.17
- **Components:** Radix UI + Lucide Icons + Motion
- **Language:** TypeScript strict mode

## Current Status
✅ **COMPLETE & DEPLOYED**

## Production
- **URL:** https://vitaeon-landing.vercel.app
- **GitHub:** https://github.com/CSBejarano/vitaeon-landing

## Last Workflow (2026-01-21)
- Migración a repo standalone
- 5 páginas legales creadas
- Cookie banner implementado
- UI improvements (Header, Footer, Hero, Services)
- Deploy a Vercel

## Key Files
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Landing principal |
| `src/components/sections/` | 11 secciones |
| `src/components/CookieBanner.tsx` | Banner cookies RGPD |
| `tailwind.config.ts` | Colores Vitaeon |
| `src/app/vitaeon-theme.css` | Variables CSS |

## Theme Colors
```css
--vitaeon-navy-dark: #1E2D3D  /* Fondos */
--vitaeon-beige: #D4C5B5      /* CTAs */
--vitaeon-sage: #8B9A8B       /* Badges */
--vitaeon-cream: #F5F5F0      /* Textos */
```

## Pending (Optional)
- [ ] Backend integration para leads API
- [ ] Analytics integration
- [ ] Email notifications

## Related Docs
- `ai_docs/state/GOAL.md` - Estado detallado
- `ai_docs/state/DECISIONS.md` - Decisiones técnicas
- `CLAUDE.md` - Contexto completo

---
*Para continuar el proyecto, lee GOAL.md para el estado actual.*
