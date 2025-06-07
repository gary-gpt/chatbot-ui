**📄 Source File:** `/components/ui/tooltip.tsx`  
**🕒 Generated:** 2025-06-07 14:02:38 UTC  
**🤖 Model:** gpt-4

---

# Tooltip.tsx

This file is a part of a React/TypeScript project and it's used to create and manage tooltips in the application. It uses the `@radix-ui/react-tooltip` library to provide the base functionality and then extends it with custom styles and behaviors.

## Exports

The file exports four components: `Tooltip`, `TooltipTrigger`, `TooltipContent`, and `TooltipProvider`. 

### Tooltip

This is the root component for a tooltip. It's a wrapper that should contain both the `TooltipTrigger` and `TooltipContent` components.

### TooltipTrigger

This component is used to wrap the element that will trigger the tooltip to appear when interacted with (usually on hover or on click).

### TooltipContent

This component is used to wrap the content that will be displayed within the tooltip. It's a forward ref component that accepts all the props of the `TooltipPrimitive.Content` component from the `@radix-ui/react-tooltip` library, along with a `className` and `sideOffset` prop. The `sideOffset` prop is used to determine the offset of the tooltip from the trigger element and defaults to 4.

The `className` prop is used to apply custom styles to the tooltip content. By default, it applies a series of utility classes for background color, text color, animations, positioning, and more. These classes can be overridden by passing a `className` prop.

### TooltipProvider

This component is used to wrap the entire application or a part of it where tooltips are used. It provides context for all tooltips within it.

## Usage

To use these components, you would typically wrap your application (or a part of it) with the `TooltipProvider` component. Then, for each tooltip, you would use the `Tooltip` component to wrap both the `TooltipTrigger` and `TooltipContent` components.

```jsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      Hover over me
    </TooltipTrigger>
    <TooltipContent>
      I'm a tooltip
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Interesting Structure or Nuance

The `TooltipContent` component uses the `React.forwardRef` function to create a component that can accept a `ref` prop. This is useful for managing focus and other interactions.

The `TooltipContent` component also uses the `cn` function from the `@/lib/utils` module to concatenate class names. This allows for easy customization of the tooltip's appearance.