---
source: tailwind.config.ts
generated: '2025-06-08T13:21:01.627Z'
tags: []
hash: 31291dae8aa23fdaa8583db9c39df31e03d45ea33f1a0cb1618859fc2ffebb4b
---
# Tailwind CSS Configuration

This document describes the configuration for Tailwind CSS in the project.

## Configuration Object

The configuration object is exported as a module and is of type `Config` from the `tailwindcss` package.

### Dark Mode

Dark mode is enabled using the class method.

```javascript
darkMode: ['class']
```

### Content

The content property specifies the directories where Tailwind CSS looks for class names.

```javascript
content: [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}'
]
```

### Theme

The theme object is used to customize the default Tailwind CSS theme.

#### Container

The container property is used to center and pad the container.

```javascript
container: {
  center: true,
  padding: '2rem',
  screens: {
    '2xl': '1400px'
  }
}
```

#### Extend

The extend property is used to extend the default theme configuration.

##### Colors

The colors property is used to customize the color palette.

```javascript
colors: {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  // Other color configurations...
}
```

##### Border Radius

The border radius property is used to customize the border radius.

```javascript
borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)'
}
```

##### Keyframes

The keyframes property is used to define keyframes for animations.

```javascript
keyframes: {
  'accordion-down': {
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' }
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 }
  }
}
```

##### Animation

The animation property is used to customize animations.

```javascript
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out'
}
```

### Plugins

The plugins property is used to include additional plugins.

```javascript
plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
```
