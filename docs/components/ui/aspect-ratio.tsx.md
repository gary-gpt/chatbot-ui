---
source: components/ui/aspect-ratio.tsx
generated: 2025-06-08T21:55:53.863Z
tags: []
hash: 589c299c27e2ad99c2e96c9a90e6ad49051cf99fc88f0c42a13465177379186f
---

# Aspect Ratio Component Documentation

This document provides a detailed explanation of the AspectRatio component located in the file `/Users/garymason/chatbot-ui/components/ui/aspect-ratio.tsx`.

## Overview

The AspectRatio component is a simple wrapper around the `@radix-ui/react-aspect-ratio` library's Root component. This component is used to maintain a specific aspect ratio for a container, regardless of the size of the viewport. This is particularly useful when you want to ensure that an image or video maintains its aspect ratio when the browser window is resized.

## Code Breakdown

```ts
"use client"
```

This line indicates that the code is intended to be run on the client-side.

```ts
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
```

Here, we import the `react-aspect-ratio` library from `@radix-ui`. This library provides a primitive component that allows us to maintain a specific aspect ratio for a container.

```ts
const AspectRatio = AspectRatioPrimitive.Root
```

We then create a constant named `AspectRatio` and assign it to `AspectRatioPrimitive.Root`. This is essentially creating a shorthand alias for `AspectRatioPrimitive.Root`, which we can then use throughout our application.

```ts
export { AspectRatio }
```

Finally, we export the `AspectRatio` constant so that it can be imported and used in other parts of our application.

## Usage

To use the `AspectRatio` component, you would import it into your file and then use it like any other React component. Here's an example:

```ts
import { AspectRatio } from './aspect-ratio'

function MyComponent() {
  return (
    <AspectRatio ratio={1 / 1}>
      <img src="my-image.jpg" alt="My Image" />
    </AspectRatio>
  )
}
```

In this example, the `AspectRatio` component ensures that the `img` element maintains a 1:1 aspect ratio, regardless of the size of the viewport.