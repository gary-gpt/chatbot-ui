---
source: components/ui/menubar.tsx
generated: 2025-06-08T22:04:36.324Z
tags: []
hash: 6e465fa4b2569efb65ce1f2c17af6058ad1cef069531fd0c656f8e9c16d02b0c
---

# Menubar Component Documentation

This TypeScript file is a part of a chatbot user interface. It defines a Menubar component and its related sub-components using the Radix UI library and React. The Menubar component is a common UI element that provides a set of options or actions available to the user.

## Code Overview

The code starts by importing necessary dependencies from React, Radix UI, and Lucide React libraries. It also imports a utility function `cn` from a local module.

Then, it defines several components that make up the Menubar:

- `Menubar`: The main component that serves as the root of the Menubar.
- `MenubarTrigger`: A component that triggers the appearance of the Menubar.
- `MenubarSubTrigger`: A component that triggers the appearance of a submenu within the Menubar.
- `MenubarContent`: The main content of the Menubar.
- `MenubarItem`: An individual item within the Menubar.
- `MenubarCheckboxItem`: A special type of Menubar item that behaves like a checkbox.
- `MenubarRadioItem`: A special type of Menubar item that behaves like a radio button.
- `MenubarLabel`: A label for a group of items within the Menubar.
- `MenubarSeparator`: A separator line to distinguish groups of items within the Menubar.
- `MenubarShortcut`: A component that displays keyboard shortcuts for Menubar items.

Each of these components is a wrapper around a corresponding component from the Radix UI library, with additional styling and behavior defined.

## Component Details

### Menubar

The `Menubar` component is the root of the Menubar. It uses the `MenubarPrimitive.Root` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "bg-background flex h-10 items-center space-x-1 rounded-md border p-1",
      className
    )}
    {...props}
  />
))
```

### MenubarTrigger

The `MenubarTrigger` component is used to trigger the appearance of the Menubar. It uses the `MenubarPrimitive.Trigger` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none",
      className
    )}
    {...props}
  />
))
```

### MenubarItem

The `MenubarItem` component represents an individual item within the Menubar. It uses the `MenubarPrimitive.Item` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
```

### MenubarCheckboxItem

The `MenubarCheckboxItem` component represents a special type of Menubar item that behaves like a checkbox. It uses the `MenubarPrimitive.CheckboxItem` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="size-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
```

### MenubarRadioItem

The `MenubarRadioItem` component represents a special type of Menubar item that behaves like a radio button. It uses the `MenubarPrimitive.RadioItem` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="size-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
```

### MenubarLabel

The `MenubarLabel` component is used to provide a label for a group of items within the Menubar. It uses the `MenubarPrimitive.Label` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
```

### MenubarSeparator

The `MenubarSeparator` component is used to provide a separator line to distinguish groups of items within the Menubar. It uses the `MenubarPrimitive.Separator` component from the Radix UI library. The `className` prop allows custom styles to be applied, and the `ref` prop is used for referencing the component instance.

```ts
const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
))
```

### MenubarShortcut

The `MenubarShortcut` component is used to display keyboard shortcuts for Menubar items. It is a simple span element with some styling applied.

```ts
const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}
```

## Exports

Finally, all the components are exported for use in other parts of the application.

```ts
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut
}
```