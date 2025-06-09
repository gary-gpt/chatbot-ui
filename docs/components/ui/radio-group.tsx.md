---
source: components/ui/radio-group.tsx
generated: 2025-06-08T22:06:04.417Z
tags: []
hash: d19ffc7eb749e039776ca6c4fdbd0d1611074ab2c051d433f726d2d5e77db47f
---

# Radio Group Component Documentation

This file contains the implementation of two React components: `RadioGroup` and `RadioGroupItem`. These components are used to create a group of radio buttons in the user interface. The file is located at `/Users/garymason/chatbot-ui/components/ui/radio-group.tsx`.

## Imports

The code begins by importing necessary modules and components:

- `React` from the "react" library.
- `RadioGroupPrimitive` from the "@radix-ui/react-radio-group" library, which provides primitive components for creating a radio group.
- `Circle` from the "lucide-react" library, which is used to create the circular indicator inside each radio button.
- `cn` from "@/lib/utils", a utility function for class name manipulation.

## RadioGroup Component

The `RadioGroup` component is a wrapper around the `RadioGroupPrimitive.Root` component from the Radix UI library. It uses the `React.forwardRef` function to create a ref-forwarding component, which allows the ref to be passed to the `RadioGroupPrimitive.Root` component.

The component takes a `className` prop and other props (`...props`), and passes them to the `RadioGroupPrimitive.Root` component. The `className` prop is used to add additional CSS classes to the component.

```ts
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName
```

## RadioGroupItem Component

The `RadioGroupItem` component is a wrapper around the `RadioGroupPrimitive.Item` component from the Radix UI library. Similar to the `RadioGroup` component, it uses the `React.forwardRef` function to create a ref-forwarding component.

The component takes a `className` prop and other props (`...props`), and passes them to the `RadioGroupPrimitive.Item` component. The `className` prop is used to add additional CSS classes to the component.

Inside the `RadioGroupPrimitive.Item` component, a `RadioGroupPrimitive.Indicator` component is used to create the circular indicator inside each radio button.

```ts
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square size-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
```

## Exports

The `RadioGroup` and `RadioGroupItem` components are exported for use in other parts of the application.

```ts
export { RadioGroup, RadioGroupItem }
```