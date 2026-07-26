# Los de Siempre — Sitio web

Sitio web de **Los de Siempre (LDS)**, cafetería / desayunos / comidas rápidas / viandas / delivery en Liniers, Buenos Aires.

Astro 7 + Tailwind CSS 4 + TypeScript.

## Node.js requerido

Astro 7 necesita **Node.js ≥ 22.12**. Esta máquina tiene Node 20.17 instalado globalmente, así que el proyecto trae una copia portable de Node 24 LTS en `.node-runtime/` (no se instaló nada a nivel de sistema).

Antes de correr cualquier comando `npm`, agregá esa carpeta al PATH de la sesión:

**PowerShell:**
```powershell
$env:PATH = "$PWD\.node-runtime\node-v24.18.0-win-x64;$env:PATH"
```

**Git Bash:**
```bash
export PATH="$PWD/.node-runtime/node-v24.18.0-win-x64:$PATH"
```

Si en algún momento se actualiza el Node global de la máquina a 22+, se puede borrar `.node-runtime/` y usar el Node del sistema normalmente.

## Comandos

| Comando           | Acción                                        |
| ----------------- | ---------------------------------------------- |
| `npm install`      | Instala las dependencias                       |
| `npm run dev`      | Servidor de desarrollo en `localhost:4321`     |
| `npm run build`    | Chequeo de tipos + build de producción a `dist/` |
| `npm run preview`  | Sirve el build de producción localmente        |

## Estructura

```
src/
├── components/   # Navbar, Hero, SectionTitle, CategoryCard, PromoCard, Gallery, TestimonialCard, Footer, WhatsAppButton, BackToTop, Counter, ImagePlaceholder
├── layouts/       # Layout.astro (head, SEO, Schema.org, dark mode)
├── content/       # Datos reales del negocio (site.ts) y contenido (categories, promos, testimonials, gallery)
├── styles/        # global.css (tema Tailwind v4, paleta de marca)
└── pages/         # index.astro
```

## Pendientes de contenido real (no completar con datos inventados)

- **Historia del negocio** (`src/pages/index.astro`, sección "Sobre nosotros")
- **Precios y detalle de promociones** (`src/content/promos.ts`, actualmente vacío)
- **Testimonios de clientes** (`src/content/testimonials.ts`, actualmente vacío)
- **Fotos del local, comida y galería**: agregar los archivos a `public/images/` y completar las rutas en `src/content/categories.ts`, `src/content/gallery.ts`, el `Hero` y la sección "Sobre nosotros" (el usuario elige manualmente qué foto va en cada lugar)
- **Imagen para redes sociales** (Open Graph / Twitter Card): agregar `public/og-image.jpg` (1200×630)
- **Dominio definitivo**: actualizar `site` en `astro.config.mjs` antes de desplegar
- **Facebook**: sumar el link en `src/content/site.ts` si el negocio tiene página
- **Contadores** (clientes satisfechos / años de experiencia): el componente `Counter.astro` está listo pero no se usa en la página hasta tener los números reales
