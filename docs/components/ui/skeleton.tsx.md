---
source: components/ui/skeleton.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: af9c32c5d9b6a94c244b31c67f3cc2c490db9a812fdc365351012d23f9fe2122
---
# Skeleton Component

The `Skeleton` component is a functional component in React. It is designed to provide a placeholder or a loading effect while the actual content is still loading. This component uses the `cn` function from the utility library to handle class names.

## Importing the Component

```javascript
import { Skeleton } from 'path_to_component';
```

## Props

The `Skeleton` component accepts all properties that a standard `div` HTML element would accept (`React.HTMLAttributes<HTMLDivElement>`). It also accepts the following:

### `className: string`

The `className` prop is used to apply additional CSS classes to the `div` element. This is optional and the default value is `undefined`.

## Usage

```javascript
<Skeleton className="my-class" />
```

In the example above, the `Skeleton` component will render a `div` element with the classes `bg-muted`, `animate-pulse`, `rounded-md`, and `my-class`.

## Styling

The `Skeleton` component has the following default styles:

- `bg-muted`: Applies a muted background color.
- `animate-pulse`: Applies a pulsing animation.
- `rounded-md`: Applies a medium border radius.

These styles can be overridden by providing a `className` prop.
