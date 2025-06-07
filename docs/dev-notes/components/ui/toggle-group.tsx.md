**📄 Source File:** `/components/ui/toggle-group.tsx`  
**🕒 Generated:** 2025-06-07 14:01:59 UTC  
**🤖 Model:** gpt-4

---

# Filename: ToggleGroup.tsx

This file is a TypeScript/React module that exports two components: `ToggleGroup` and `ToggleGroupItem`. These components are used to create a group of toggle buttons, using the `@radix-ui/react-toggle-group` package as a base.

## Exports

### `ToggleGroup`

This is a React component that creates a group of toggle buttons. It uses the `ToggleGroupPrimitive.Root` component from the `@radix-ui/react-toggle-group` package as a base. 

The `ToggleGroup` component accepts all the props that `ToggleGroupPrimitive.Root` does, plus the `VariantProps` of `toggleVariants`. The `VariantProps` are used to customize the appearance of the toggle buttons. 

The `ToggleGroup` component also provides a context for its children, which includes the `variant` and `size` props. These props are used by the `ToggleGroupItem` component to customize its appearance.

### `ToggleGroupItem`

This is a React component that creates a single toggle button within a `ToggleGroup`. It uses the `ToggleGroupPrimitive.Item` component from the `@radix-ui/react-toggle-group` package as a base.

The `ToggleGroupItem` component accepts all the props that `ToggleGroupPrimitive.Item` does, plus the `VariantProps` of `toggleVariants`. The `VariantProps` are used to customize the appearance of the toggle button.

The `ToggleGroupItem` component also uses the context provided by its parent `ToggleGroup` to customize its appearance. If the `variant` or `size` prop is not provided to `ToggleGroupItem`, it will use the `variant` or `size` from the `ToggleGroup` context.

## Usage

To use these components, import them from the module and use them in your JSX. Here's an example:

```jsx
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'

function MyComponent() {
  return (
    <ToggleGroup variant="primary" size="large">
      <ToggleGroupItem>Option 1</ToggleGroupItem>
      <ToggleGroupItem>Option 2</ToggleGroupItem>
      <ToggleGroupItem>Option 3</ToggleGroupItem>
    </ToggleGroup>
  )
}
```

In this example, a group of three toggle buttons is created. The `ToggleGroup` is given a `variant` of "primary" and a `size` of "large", which will be used to customize the appearance of the `ToggleGroupItem` components. Each `ToggleGroupItem` component represents a single toggle button within the group.