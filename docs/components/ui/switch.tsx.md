---
source: components/ui/switch.tsx
generated: 2025-06-08T22:09:07.818Z
tags: []
hash: ca86dce3e30e3033847abdb3283bf4e4268815d874d25ce3e8e18db7c8171663
---

# Switch Component Documentation

This document describes the `Switch` component located at `/Users/garymason/chatbot-ui/components/ui/switch.tsx`. This component is a custom switch UI element built using the Radix UI library.

## Overview

The `Switch` component is a React component that wraps the `SwitchPrimitives.Root` component from the `@radix-ui/react-switch` package. It uses the `React.forwardRef` function to forward a `ref` to the `SwitchPrimitives.Root` component. This allows the parent component to interact directly with the `SwitchPrimitives.Root` component, if necessary.

## Code Summary

```ts
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  // SwitchPrimitives.Root component with custom styles
  // and forwarded ref
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

## Detailed Breakdown

### Imports

The component imports the necessary modules:

- `React` from the `react` package.
- `SwitchPrimitives` from the `@radix-ui/react-switch` package.
- `cn` from the local utility library.

### Component Definition

The `Switch` component is defined using `React.forwardRef`. This allows the component to accept a `ref` from its parent and pass it on to the `SwitchPrimitives.Root` component.

The component accepts all props that the `SwitchPrimitives.Root` component accepts, along with an additional `className` prop. The `className` prop is used to apply additional styles to the `SwitchPrimitives.Root` component.

### Rendering

The `Switch` component renders the `SwitchPrimitives.Root` component with some custom styles. It also forwards the `ref` and all other props to the `SwitchPrimitives.Root` component.

Inside the `SwitchPrimitives.Root` component, it renders the `SwitchPrimitives.Thumb` component, which represents the switch's thumb.

### Export

Finally, the `Switch` component is exported for use in other parts of the application.

## Styling

The `Switch` component uses Tailwind CSS for styling. The `cn` function is used to concatenate class names. The `className` prop allows additional styles to be passed to the component.

The `SwitchPrimitives.Root` component has styles for focus, checked and unchecked states, disabled state, and transition effects.

The `SwitchPrimitives.Thumb` component has styles for its size, shape, shadow, and transition effects. It also has styles for checked and unchecked states.