---
source: components/ui/toggle-group.tsx
generated: 2025-06-08T22:11:54.731Z
tags: []
hash: f2c9b9f3dade80c6ded413b969e4690690eaa1670c69821250106c8f681ad6ea
---

# Documentation for `toggle-group.tsx`

This file exports two components: `ToggleGroup` and `ToggleGroupItem`. These components are used to create a group of toggle buttons where only one button can be selected at a time.

## Import Statements

```ts
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"
```

The import statements bring in necessary dependencies from React, Radix UI, a utility function, and a custom toggle variant.

## Context Creation

```ts
const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default"
})
```

A context `ToggleGroupContext` is created using React's `createContext` method. This context will provide a way to pass the `size` and `variant` props down to child components without having to pass props manually at every level.

## ToggleGroup Component

```ts
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))
```

`ToggleGroup` is a wrapper component that uses the `ToggleGroupPrimitive.Root` component from Radix UI. It uses `React.forwardRef` to get a ref from its parent component and passes it down to `ToggleGroupPrimitive.Root`. The `ToggleGroupContext.Provider` is used to provide the `size` and `variant` props to all child components.

## ToggleGroupItem Component

```ts
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
```

`ToggleGroupItem` is a component that represents an individual item within the `ToggleGroup`. It uses the `ToggleGroupPrimitive.Item` component from Radix UI. It also uses `React.forwardRef` to get a ref from its parent component and passes it down to `ToggleGroupPrimitive.Item`. It uses the `ToggleGroupContext` to get the `size` and `variant` props.

## Export Statements

```ts
export { ToggleGroup, ToggleGroupItem }
```

The `ToggleGroup` and `ToggleGroupItem` components are exported for use in other parts of the application.