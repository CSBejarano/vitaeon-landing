# DECISIONS.md - Vitaeon Landing Architectural Decisions

## Session 2026-01-21: Complete Landing Implementation

### D001: Standalone Repository
**Decision:** Migrar landing Vitaeon de monorepo ideas-frontend a repositorio independiente
**Rationale:** Separación de concerns, deploy independiente, cliente diferente
**Status:** IMPLEMENTED

### D002: Tailwind v3 over v4
**Decision:** Usar Tailwind CSS 3.4.17 en lugar de v4
**Rationale:** Mayor estabilidad, compatibilidad con componentes existentes
**Status:** IMPLEMENTED

### D003: Cookie Banner with localStorage
**Decision:** Implementar banner de cookies con persistencia en localStorage
**Rationale:** Cumplimiento RGPD, UX simple sin backend
**Key:** `vitaeon_cookie_consent`
**Status:** IMPLEMENTED

### D004: Phone Input Simplification
**Decision:** Reemplazar PhoneInput con selector de país por input simple
**Rationale:** UX más simple, placeholder "+34 600 000 000"
**Status:** IMPLEMENTED

### D005: Footer 5-Column Grid
**Decision:** Grid proporcional `[1.4fr_0.6fr_1.2fr_1fr_1fr]` para footer
**Rationale:** Distribución visual equilibrada según contenido de cada columna
**Status:** IMPLEMENTED

### D006: Cormorant Garamond Font
**Decision:** Añadir fuente serif Cormorant Garamond para acentos
**Rationale:** Contraste visual, elegancia en textos destacados
**Usage:** Hero card text (eliminado posteriormente por preferencia cliente)
**Status:** IMPLEMENTED

### D007: Legal Pages with LegalPageLayout
**Decision:** Crear componente LegalPageLayout reutilizable
**Rationale:** Consistencia visual en 5 páginas legales
**Pages:** aviso-legal, politica-privacidad, politica-cookies, condiciones-generales, consentimiento-informado
**Status:** IMPLEMENTED

### D008: Doctor Info Real Data
**Decision:** Usar datos reales del Dr. Eduard Cambra García
**Source:** docs/Equipo-medico.docx
**Credentials:** Nº Colegiado 43-07388, Col·legi de Metges de Tarragona
**Status:** IMPLEMENTED

### D009: Services Pricing Structure
**Decision:** Dos grupos de servicios con precios reales
**Group 1:** Pacientes con tratamiento previo (55€, 150€)
**Group 2:** Pacientes sin diagnóstico (99€, 185€, 325€)
**Status:** IMPLEMENTED

### D010: Hero Section Simplification
**Decision:** Eliminar subtítulo, mantener solo "Primera llamada gratis"
**Rationale:** Diseño más limpio según mockup cliente
**Status:** IMPLEMENTED

### D011: AnimatedGradientText Color
**Decision:** Cambiar gradiente de verde (#7d9a78) a beige (#C4B49E)
**Rationale:** Consistencia con paleta Vitaeon
**Location:** "no reinventarlo" en hero
**Status:** IMPLEMENTED

### D012: Header Logo Image
**Decision:** Usar imagen logo.png en lugar de texto "VITAEON"
**Size:** h-[4.5rem] móvil, h-20 desktop
**Status:** IMPLEMENTED

### D013: Vercel Deployment
**Decision:** Deploy en Vercel con proyecto existente
**URL:** https://vitaeon-landing.vercel.app
**Config:** Root directory cambiado de apps/landing-next a raíz
**Status:** IMPLEMENTED

---
*Total Decisions: 13*
*Last Updated: 2026-01-21*
