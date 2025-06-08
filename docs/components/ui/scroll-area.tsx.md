---
source: components/ui/scroll-area.tsx
generated: '2025-06-08T13:21:01.642Z'
tags: []
hash: 61a424794469cde3f32769500dbf70b63c0d8bc1f6a5263ea6f6ae1183a09d57
---
# ScrollArea and ScrollBar Component Documentation

This file exports two React components: `ScrollArea` and `ScrollBar`.

## Importing the Components

```javascript
import { ScrollArea, ScrollBar } from './path-to-this-file';
```

## ScrollArea Component

`ScrollArea` is a wrapper component that provides a scrollable area with a custom scrollbar. It uses the `ScrollAreaPrimitive.Root` component from the `@radix-ui/react-scroll-area` library.

### Props

In addition to the standard React props, `ScrollArea` accepts the following:

- `className`: A string that defines the CSS classes to apply to the component.
- `children`: The child elements to be displayed within the scrollable area.

### Example Usage

```javascript
<ScrollArea className="custom-class">
  <div>Scrollable content</div>
</ScrollArea>
```

## ScrollBar Component

`ScrollBar` is a component that provides a custom scrollbar. It uses the `ScrollAreaPrimitive.ScrollAreaScrollbar` component from the `@radix-ui/react-scroll-area` library.

### Props

In addition to the standard React props, `ScrollBar` accepts the following:

- `className`: A string that defines the CSS classes to apply to the component.
- `orientation`: A string that defines the orientation of the scrollbar. It can be either "vertical" or "horizontal". The default value is "vertical".

### Example Usage

```javascript
<ScrollBar className="custom-class" orientation="horizontal" />
```

Note: `ScrollBar` is used internally by `ScrollArea` and may not typically be used directly.
