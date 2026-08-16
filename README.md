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

Sitio: [https://orne-digital.vercel.app](https://orne-digital.vercel.app)
Repo: [https://github.com/TICIANOTAUP12/OrneDigital](https://github.com/TICIANOTAUP12/OrneDigital)

## Workspace

Abrir esta carpeta en Cursor: `C:\Users\ticia\SISTEMAS\OrneDigital` (o `OrneDigital.code-workspace`).
