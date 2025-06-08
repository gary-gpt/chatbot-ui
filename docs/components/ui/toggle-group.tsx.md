---
source: "components/ui/toggle-group.tsx"
generated: "2025-06-08T17:01:09.144Z"
hash: "37e34300bfa1c0ad381e1d3c2a35963ba16b77128c066764c56ffdbaac7eaf86"
tags: []
---

# Documentation for `toggle-group.tsx`

This file exports two components, `ToggleGroup` and `ToggleGroupItem`, which are used to create a group of toggle buttons. These components are built using the `@radix-ui/react-toggle-group` library.

## Import Statements

```ts
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"
```

- `React` is imported for creating and managing the components.
- `ToggleGroupPrimitive` is the base component from the `@radix-ui/react-toggle-group` library.
- `VariantProps` is a type from the `class-variance-authority` library, used for managing different variants of the components.
- `cn` is a utility function for class name manipulation.
- `toggleVariants` is a function that returns the appropriate class names based on the variant and size of the toggle button.

## ToggleGroupContext

```ts
const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default"
})
```

A context is created to share the `size` and `variant` properties across all the child components of `ToggleGroup`. The default values for `size` and `variant` are both "default".

## ToggleGroup

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

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
```

`ToggleGroup` is a wrapper component for `ToggleGroupPrimitive.Root` from the `@radix-ui/react-toggle-group` library. It uses the `ToggleGroupContext` to provide the `size` and `variant` properties to its children.

## ToggleGroupItem

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

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
```

`ToggleGroupItem` is a wrapper component for `ToggleGroupPrimitive.Item` from the `@radix-ui/react-toggle-group` library. It uses the `ToggleGroupContext` to get the `size` and `variant` properties, and falls back to its own `size` and `variant` props if the context does not provide them.

## Exports

```ts
export { ToggleGroup, ToggleGroupItem }
```

The `ToggleGroup` and `ToggleGroupItem` components are exported for use in other parts of the application.