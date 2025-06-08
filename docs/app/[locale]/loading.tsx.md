---
source: 'app/[locale]/loading.tsx'
generated: '2025-06-08T13:21:01.633Z'
tags: []
hash: 612f7553374cbabcf55a4ca5bf9971a7de8cf066b1e1fb4cae462ce623f0b9c6
---
# Loading Component Documentation

## Overview

The `Loading` component is a simple, reusable component that displays a loading icon. This component is typically used to indicate that a certain process or action is still ongoing, and the user needs to wait for its completion.

## Importing

This component is exported as a default export from its module, so you can import it like this:

```javascript
import Loading from 'path-to-component';
```

Replace `'path-to-component'` with the actual path to the component file.

## Usage

Once imported, you can use the `Loading` component in your JSX like any other component:

```javascript
<Loading />
```

This will render a loading icon centered both vertically and horizontally within its parent container.

## Dependencies

This component depends on the `@tabler/icons-react` package for the loading icon. Specifically, it uses the `IconLoader2` icon.

## Styles

The component uses Tailwind CSS for styling. Here are the classes used:

- `flex`: This applies a flex layout context to the component.
- `size-full`: This sets both the width and height to 100%.
- `flex-col`: This sets the flex direction to column.
- `items-center`: This centers the children horizontally in the container.
- `justify-center`: This centers the children vertically in the container.
- `mt-4`: This applies a top margin to the icon.
- `size-12`: This sets the icon size.
- `animate-spin`: This applies a continuous spinning animation to the icon.
