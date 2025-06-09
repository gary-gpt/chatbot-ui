---
source: components/ui/hover-card.tsx
generated: 2025-06-08T22:02:19.954Z
tags: []
hash: 96725c20242fe81a5b9d01d84eebc4bd39d4794a0fd560cd8708f030b5ad7f0d
---

# Hover Card Component Documentation

This document describes the `hover-card.tsx` file located at `/Users/garymason/chatbot-ui/components/ui/`. This file exports a `HoverCard` component, which is a UI component that displays additional information when the user hovers over it.

## Code Summary

This file is written in TypeScript and uses the React library for building the UI component. It also uses the `@radix-ui/react-hover-card` package, which provides primitive components to create a hover card.

The `HoverCard` component is composed of three sub-components:

1. `HoverCard`: The root component.
2. `HoverCardTrigger`: The component that triggers the hover card to appear.
3. `HoverCardContent`: The component that contains the content of the hover card.

## Code Breakdown

```ts
"use client"
```

This line indicates that the code is intended to run on the client-side.

```ts
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@/lib/utils"
```

These lines import the necessary modules. The `React` library, the `HoverCardPrimitive` components from `@radix-ui/react-hover-card`, and a utility function `cn` from a local utility module.

```ts
const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
```

These lines create aliases for the `Root` and `Trigger` components from `HoverCardPrimitive`.

```ts
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
```

This block of code defines the `HoverCardContent` component. It uses `React.forwardRef` to create a component that can accept a `ref` prop. The component takes several props, including `className`, `align`, `sideOffset`, and other props that are spread into the component. The `className` prop is combined with a long string of class names using the `cn` utility function. The `displayName` of the component is set to the `displayName` of the `Content` component from `HoverCardPrimitive`.

```ts
export { HoverCard, HoverCardTrigger, HoverCardContent }
```

Finally, the `HoverCard`, `HoverCardTrigger`, and `HoverCardContent` components are exported for use in other parts of the application.