---
source: components/ui/label.tsx
generated: '2025-06-08T13:21:01.641Z'
tags: []
hash: 270216121bebee107efd5bbf60e3bb12025fbe5117241d78d95dd7e5351758e1
---
# Label Component Documentation

## Overview

The `Label` component is a wrapper around the `LabelPrimitive.Root` component from the `@radix-ui/react-label` library. This component is designed to provide a consistent styling and behavior for labels across the application.

## Imports

- `LabelPrimitive` from `@radix-ui/react-label`: This is the base label component from the Radix UI library.
- `cva`, `type VariantProps` from `class-variance-authority`: These are used for handling component variants.
- `React` from `react`: This is used for all React related functionalities.
- `cn` from `@/lib/utils`: This is a utility function for class name handling.

## Variants

The `labelVariants` constant defines the default styles for the `Label` component. It uses the `cva` function from the `class-variance-authority` library to generate a function that returns these styles. The styles defined are:

- `text-sm`: Small text size.
- `font-semibold`: Semi-bold font weight.
- `leading-none`: No leading (line height) applied.
- `peer-disabled:cursor-not-allowed`: The cursor is not allowed when the peer component is disabled.
- `peer-disabled:opacity-70`: The opacity is 70% when the peer component is disabled.

## Props

The `Label` component accepts all props that can be passed to the `LabelPrimitive.Root` component, as well as the variant props for the `labelVariants`.

## Usage

The `Label` component can be used as follows:

```jsx
import { Label } from 'path-to-component';

<Label className="additional-styles">Label Text</Label>
```

The `className` prop can be used to apply additional styles to the component. These styles will be combined with the default styles defined in `labelVariants`.

## Exports

The `Label` component is the default export of this file.
