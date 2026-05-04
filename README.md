# Positivus Studio

Landing page for a digital marketing agency "Positivus". 

## Tech Stack

![Vue.js](https://img.shields.io/badge/Vue_3-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![VeeValidate](https://img.shields.io/badge/VeeValidate-4FC08D?style=flat-square)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)

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

### Run Storybook

```sh
npm run storybook
```

### Lint and Format

```sh
npm run lint
npm run format
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

## Forms

- Form validation with VeeValidate
- Reusable `FormField` component combining label, input, and error message
- Custom validation rules in `src/validation/rules.ts` (required, email, minLength, maxLength)
- Reactive error display with red border on invalid fields
- Submit button stays disabled until form is valid

## Storybook

The project uses Storybook for component documentation and visual testing.

- 19 component stories across Base, Icons, UI, and Modals
- Foundation pages for Colors, Typography, and Breakpoints
- Run with `npm run storybook` and open `http://localhost:6006`

## Design

Based on [Figma mockup](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design).
