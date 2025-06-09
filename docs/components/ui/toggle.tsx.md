---
source: components/ui/toggle.tsx
generated: 2025-06-08T22:12:17.615Z
tags: []
hash: e6c87ff0ad3484f286682898c68d326b651c1cf647f53ccdb37ae51ff59bf48a
---

# Toggle Component Documentation

This file is located at `/Users/garymason/chatbot-ui/components/ui/toggle.tsx`. It exports a `Toggle` component, a reusable UI component that creates a toggle switch. This component is built using the `@radix-ui/react-toggle` library and is styled using the `class-variance-authority` library for managing variant styles.

## Imports

```ts
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
```

The `React` library is imported for creating the component. The `@radix-ui/react-toggle` library is imported for the base toggle functionality. The `class-variance-authority` library is imported for managing variant styles. The `cn` function from the utilities library is imported for class name management.

## Toggle Variants

```ts
const toggleVariants = cva(
  "ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
```

The `toggleVariants` constant is a function that returns class names based on the variant and size props. It uses the `cva` function from the `class-variance-authority` library.

## Toggle Component

```ts
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName
```

The `Toggle` component is a forwardRef component that accepts a `className`, `variant`, `size`, and any other props that can be passed to the `TogglePrimitive.Root` component. It uses the `toggleVariants` function to generate class names based on the `variant` and `size` props. The `displayName` of the `Toggle` component is set to the `displayName` of the `TogglePrimitive.Root` component.

## Exports

```ts
export { Toggle, toggleVariants }
```

The `Toggle` component and the `toggleVariants` function are exported from this module.