# Orne Digital

Landing de servicios + tienda liviana de PDFs. **Código fuente:** esta carpeta (`SISTEMAS/OrneDigital`).

El prototipo en `prototipador/prototypes/orne-digital` es solo referencia (ver `PROMOTED.md`).

## Cómo correrlo

```powershell
cd C:\Users\ticia\SISTEMAS\OrneDigital
npm install
npm run dev
```

Preview local: [http://127.0.0.1:5173](http://127.0.0.1:5173)

## Demo vs real

| En esta web | En operación (fuera de v1) |
|-------------|----------------------------|
| WhatsApp `wa.me/5492645720932` | Mismo número |
| “Comprar” → toast + gracias | Checkout → PDF al mail |
| “Contratar servicio” → WA | Form al mail + mensaje de gracias |
| Portadas PDF y capturas WA: fallback si faltan archivos | Assets finales en `public/` |

## Deploy

`vercel.json` listo (Vite → `dist`). El sitio `https://orne-digital.vercel.app` **no** es este repo: quedó atado al prototipador y al 2026-08-16 seguía el layout anterior a `a5db806`. Conectar **este** repo a un proyecto Vercel nuevo (o re-apuntar el existente al Root Directory de esta carpeta).

## Workspace

Abrir esta carpeta en Cursor: `C:\Users\ticia\SISTEMAS\OrneDigital` (o `OrneDigital.code-workspace`).
