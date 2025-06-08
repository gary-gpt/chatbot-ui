---
source: components/ui/separator.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: e17fd808b4d3dd353c727084a837877596a67206881d99c5ce9d0b50002235f2
---
# Separator Component

The `Separator` component is a React component that uses the `SeparatorPrimitive.Root` from the `@radix-ui/react-separator` package. It is a forward-ref component that accepts the same props as `SeparatorPrimitive.Root`.

## Props

The `Separator` component accepts the following props:

- `className` (optional): A string that represents the CSS class to apply to the separator.
- `orientation` (optional): A string that specifies the orientation of the separator. It can be either "horizontal" or "vertical". The default value is "horizontal".
- `decorative` (optional): A boolean that indicates whether the separator is decorative or not. The default value is `true`.
- `...props` (optional): Any other props that should be passed to the `SeparatorPrimitive.Root` component.

## Usage

Here's an example of how to use the `Separator` component:

```jsx
import { Separator } from './path-to-component';

function MyComponent() {
  return (
    <div>
      <p>Some content</p>
      <Separator orientation="vertical" />
      <p>Some other content</p>
    </div>
  );
}
```

In this example, a vertical separator is rendered between two paragraphs.

## Export

The `Separator` component is exported for use in other components or files.
