# AGENTS.md — OrneDigital

Fuente de verdad del **código web**: `C:\Users\ticia\SISTEMAS\OrneDigital`

El prototipo en `SISTEMAS/prototipador/prototypes/orne-digital` es **referencia**. No seguir editando ahí si existe `PROMOTED.md`.

## Qué es esto

Landing de **Orne Digital** (Ornela): community, servicios y tienda liviana de PDFs. Vite + React 19. WhatsApp real (`wa.me/5492645720932`). Compra de PDF **simulada**.

## Protegido

- Tipografía Outfit y acento rojo (`#c44545`) del feedback `# ornella`.
- Número de WhatsApp y handle IG `@ornecerderaa.digital` — no inventar otros.
- No armar checkout Mercado Pago / mail / CMS “de paso”.

## Preview

```powershell
cd C:\Users\ticia\SISTEMAS\OrneDigital
npm install
npm run dev
```

## Deploy

Proyecto Vercel `orne-digital` (equipo agencia-ta): https://orne-digital.vercel.app
Repo: https://github.com/TICIANOTAUP12/OrneDigital (`master`, SHA `040f924`).
Autodeploy GitHub→Vercel: falta conectar el repo en el dashboard (el deploy actual fue por CLI).

## Pendiente de assets

- Portadas PDF en `public/pdf/*-cover.jpg`
- Capturas WA en `public/testimonios/wa-1.jpg` … `wa-4.jpg`
