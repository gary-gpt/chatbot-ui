---
source: components/ui/aspect-ratio.tsx
generated: '2025-06-08T13:21:01.639Z'
tags: []
hash: 39cef96038a76aa8de124b8f70ce23a6b16e1f871f2888331f1c0649ce1b136d
---
# Aspect Ratio Module Documentation

This module is responsible for managing the aspect ratio of elements in the application. It uses the `@radix-ui/react-aspect-ratio` package to provide this functionality.

## Importing

```javascript
import { AspectRatio } from './path-to-file';
```

## Usage

The `AspectRatio` component can be used to maintain a specific aspect ratio for a child component.

```javascript
<AspectRatio ratio={1 / 1}>
  <YourComponent />
</AspectRatio>
```

In the above example, `YourComponent` will maintain a 1:1 aspect ratio.

## Dependencies

This module depends on the `@radix-ui/react-aspect-ratio` package. Make sure to install it in your project using the following command:

```bash
npm install @radix-ui/react-aspect-ratio
```

## Exports

The module exports the following:

- `AspectRatio`: This is the main component that is used to maintain the aspect ratio of its child component.

## Client Usage

The module begins with a "use client" directive. This means that the module is intended to be used on the client-side of the application.
