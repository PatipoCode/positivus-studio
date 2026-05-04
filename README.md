# Positivus Studio

Landing page for a digital marketing agency "Positivus". 

## Tech Stack

![Vue.js](https://img.shields.io/badge/Vue_3-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)

## Project Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
src/
  components/
    base/         # Base UI components (Button, Input, Modal, etc.)
    icons/        # SVG icon components
    layout/       # Layout components (Header, Footer, Container, Section)
    sections/     # Page sections (Hero, Services, CaseStudies, etc.)
    ui/
      cards/      # Card components (Service, Blog, Pricing, etc.)
      modals/     # Modal components (Quote, Consultation, etc.)
  styles/         # Global SCSS (variables, mixins, base reset)
  views/          # Page views
  router/         # Vue Router configuration
```

## Pages

| Route | View | Status |
|-------|------|--------|
| `/` | Home | Done |
| `/about` | About | Done |
| `/pricing` | Pricing | In progress |
| `/blog` | Blog | In progress |
| `/services/:slug` | Service detail | In progress |

## Responsive

- Fluid typography (`clamp()` based scale)
- Fluid spacing and layout (`clamp()` for paddings, gaps, widths)
- Mobile navigation (burger menu with overlay)
- Breakpoints: 480px, 768px, 1024px, 1440px

## Design

Based on [Figma mockup](https://www.figma.com/design/2rN28iX9YPlQTxhbq5LOua/Positivus-Landing-Page-Premium--Preview-?node-id=1037-667&p=f&t=UdxqLV097l9WeqJ6-0).
