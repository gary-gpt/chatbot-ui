---
source: components/ui/radio-group.tsx
generated: '2025-06-08T13:21:01.642Z'
tags: []
hash: 187c090d8c4271c7471658a40c396a9508513e94f5a1beb57b86253670729734
---
# RadioGroup Component

This file exports two components: `RadioGroup` and `RadioGroupItem`.

## RadioGroup

The `RadioGroup` component is a wrapper for the `RadioGroupPrimitive.Root` component from `@radix-ui/react-radio-group`. It uses the `forwardRef` function from React to forward refs to the `RadioGroupPrimitive.Root` component.

### Props

The `RadioGroup` component accepts all props that can be passed to the `RadioGroupPrimitive.Root` component. It also accepts a `className` prop which is used to add additional CSS classes to the component.

### Usage

```jsx
<RadioGroup className="custom-class" {...props} />
```

## RadioGroupItem

The `RadioGroupItem` component is a wrapper for the `RadioGroupPrimitive.Item` component from `@radix-ui/react-radio-group`. It uses the `forwardRef` function from React to forward refs to the `RadioGroupPrimitive.Item` component.

Inside the `RadioGroupPrimitive.Item` component, it renders a `RadioGroupPrimitive.Indicator` component which contains a `Circle` component from `lucide-react`.

### Props

The `RadioGroupItem` component accepts all props that can be passed to the `RadioGroupPrimitive.Item` component. It also accepts a `className` prop which is used to add additional CSS classes to the component.

### Usage

```jsx
<RadioGroupItem className="custom-class" {...props} />
```

## Importing

To import these components, use the following syntax:

```jsx
import { RadioGroup, RadioGroupItem } from './path-to-file'
```
