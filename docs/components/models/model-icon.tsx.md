---
source: components/models/model-icon.tsx
generated: 2025-06-08T21:36:49.219Z
tags: []
hash: b74da4da4136e6bd2be25062708003469b6b97238cfb5ea7ba8dfeb1e429b1f2
---

# ModelIcon Component Documentation

This document explains the purpose and logic of the `ModelIcon` component in the file `/Users/garymason/chatbot-ui/components/models/model-icon.tsx`.

## Overview

The `ModelIcon` component is a functional component in React that displays an icon based on the model provider. It supports multiple providers such as OpenAI, Mistral, Groq, Anthropic, Google, and Perplexity. The component also supports dark and light themes.

## Imports

The component imports several libraries and assets:

- `cn` utility function from "@/lib/utils" for class name manipulation.
- Images for Mistral, Groq, and Perplexity providers.
- `ModelProvider` type from "@/types".
- `IconSparkles` from "@tabler/icons-react" for the default icon.
- `useTheme` from "next-themes" to get the current theme.
- `Image` from "next/image" for image rendering.
- `FC`, `HTMLAttributes` from "react" for defining the component and its props.
- SVG icons for OpenAI, Anthropic, and Google from "../icons".

## Props

The `ModelIcon` component accepts the following props:

- `provider`: The model provider. It's a required prop.
- `height`: The height of the icon. It's a required prop.
- `width`: The width of the icon. It's a required prop.
- `...props`: Any other props that can be applied to a `div` element.

## Component Logic

The component uses a switch statement to determine which icon to render based on the `provider` prop. For each case, it returns an SVG or Image component with the corresponding icon. The `className` prop of these components is determined by the `cn` function, which combines several class names based on the current theme.

If the `provider` prop doesn't match any of the cases, the component returns the `IconSparkles` component as a default icon.

## Code

```ts
export const ModelIcon: FC<ModelIconProps> = ({
  provider,
  height,
  width,
  ...props
}) => {
  const { theme } = useTheme()

  switch (provider as ModelProvider) {
    case "openai":
      // Render OpenAI SVG icon
      // ...
    case "mistral":
      // Render Mistral image icon
      // ...
    case "groq":
      // Render Groq image icon
      // ...
    case "anthropic":
      // Render Anthropic SVG icon
      // ...
    case "google":
      // Render Google SVG icon
      // ...
    case "perplexity":
      // Render Perplexity image icon
      // ...
    default:
      // Render default icon
      return <IconSparkles size={width} />
  }
}
```

In each case, the `className`, `width`, and `height` props are provided to the icon component. The `className` prop is determined by the `cn` function, which combines several class names based on the current theme.