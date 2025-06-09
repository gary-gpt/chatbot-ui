---
source: components/ui/separator.tsx
generated: 2025-06-08T22:07:15.638Z
tags: []
hash: 87a41e747b3a427c77ce1aee211f89fd3ece781334fe8d27fc0c67b025bf61f5
---

# Code Documentation for separator.tsx

This file is a React component that creates a UI separator. It uses the `@radix-ui/react-separator` package to create a separator line that can be either horizontal or vertical. The separator is primarily used for decorative purposes to visually separate different sections of the UI.

## Import Statements

```ts
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"
```

The above code imports the necessary modules and utilities. It imports the entire `React` library, the `SeparatorPrimitive` from the `@radix-ui/react-separator` package, and a utility function `cn` from the local utilities library.

## Separator Component

```ts
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName
```

The `Separator` component is a wrapper around the `SeparatorPrimitive.Root` component from the `@radix-ui/react-separator` package. It uses `React.forwardRef` to create a ref and pass it to the `SeparatorPrimitive.Root` component.

The component accepts several props:

- `className`: a string that defines the CSS class for the separator.
- `orientation`: a string that specifies the orientation of the separator. It defaults to "horizontal".
- `decorative`: a boolean that indicates whether the separator is for decorative purposes. It defaults to true.
- `...props`: any other props that should be passed to the `SeparatorPrimitive.Root` component.

The `SeparatorPrimitive.Root` component is rendered with the passed props. The `className` prop is generated using the `cn` utility function, which concatenates the class names. The class names include "bg-border shrink-0", and depending on the `orientation` prop, either "h-px w-full" (for horizontal separators) or "h-full w-px" (for vertical separators).

Finally, the `displayName` of the `Separator` component is set to the `displayName` of the `SeparatorPrimitive.Root` component.

## Export Statement

```ts
export { Separator }
```

The `Separator` component is exported for use in other modules.