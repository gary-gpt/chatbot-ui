---
source: app/[locale]/loading.tsx
generated: 2025-06-08T21:16:17.717Z
tags: []
hash: a0b20a46e419656ac50f2c6a17a80c8a0c6dcd3685a367693d13553d811c8454
---

# Loading Component Documentation

This documentation provides an overview of the `Loading` component located in the file `/Users/garymason/chatbot-ui/app/[locale]/loading.tsx`.

## File Overview

This file exports a single React component named `Loading`. The primary purpose of this component is to display a loading spinner when the application is performing an action that requires some time to complete, such as fetching data from an API.

The `Loading` component uses the `IconLoader2` component from the `@tabler/icons-react` library to display the loading spinner.

## Component Summary

The `Loading` component is a functional component that returns a JSX element. The returned JSX element is a `div` that contains the `IconLoader2` component.

### JSX Structure

The `div` has the following CSS classes applied:

- `flex`: This class applies the CSS flexbox layout to the `div`, allowing its children to be laid out in any direction and have flexible widths and heights.
- `size-full`: This class sets the width and height of the `div` to 100% of its parent's width and height.
- `flex-col`: This class sets the direction of the flex items to be in a column.
- `items-center`: This class aligns the flex items along the center of the `div`'s cross axis.
- `justify-center`: This class aligns the flex items along the center of the `div`'s main axis.

The `IconLoader2` component has the following CSS classes applied:

- `mt-4`: This class applies a top margin to the icon.
- `size-12`: This class sets the size of the icon to 12 units.
- `animate-spin`: This class applies a spinning animation to the icon.

```ts
export default function Loading() {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <IconLoader2 className="mt-4 size-12 animate-spin" />
    </div>
  )
}
```

This component does not accept any props or manage any state. It simply renders a loading spinner in the center of its parent element.