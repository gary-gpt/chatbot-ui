---
source: components/ui/progress.tsx
generated: '2025-06-08T13:21:01.642Z'
tags: []
hash: 84c465932ee14ee930f5277533cdb9fcc21bba58f1863d2929dec1cdde5cefd3
---
# Progress Component

This file exports a `Progress` component. This component is a wrapper around the `ProgressPrimitive.Root` component from the `@radix-ui/react-progress` package. It is used to display a progress bar.

## Importing

```jsx
import { Progress } from 'path-to-this-file';
```

## Props

The `Progress` component accepts all props that can be passed to the `ProgressPrimitive.Root` component, with the addition of the following:

- `className`: A string that represents the CSS classes to be applied to the component.
- `value`: A number that represents the current progress. It should be between 0 and 100.

## Usage

```jsx
<Progress className="my-progress" value={50} />
```

In the above example, a `Progress` component is rendered with a `className` of `my-progress` and a `value` of `50`.

## Styling

The `Progress` component has the following default styles:

- `bg-secondary`: The background color of the progress bar is secondary.
- `relative`: The position is set to relative.
- `h-4`: The height is 4 units.
- `w-full`: The width is 100% of its parent.
- `overflow-hidden`: The overflow is hidden.
- `rounded-full`: The corners are fully rounded.

The progress indicator has the following default styles:

- `bg-primary`: The background color of the progress indicator is primary.
- `size-full`: The size is 100% of its parent.
- `flex-1`: The flex grow factor is 1.
- `transition-all`: All properties will transition.

The progress indicator's horizontal position is transformed based on the `value` prop. The transformation translates the progress indicator to the left by an amount that represents the remaining progress. For example, if the `value` prop is `50`, the progress indicator is translated to the left by `50%`.
