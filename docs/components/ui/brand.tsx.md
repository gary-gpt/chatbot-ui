---
source: components/ui/brand.tsx
generated: 2025-06-08T21:56:58.413Z
tags: []
hash: 840b05236cd6273c70f498dfe4ca98060376cbd67eb489472a0d7626c6df9aa3
---

# Brand Component Documentation

This file is located at `/Users/garymason/chatbot-ui/components/ui/brand.tsx`. It exports a single component, `Brand`, which is a functional component that displays a link to the Chatbot UI website.

## Imports

```ts
import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"
```

The `Brand` component uses three imports:

- `Link` from `next/link`, which is a component provided by Next.js for client-side transitions between routes.
- `FC` (Function Component) from `react`, which is a type used for functional components in TypeScript.
- `ChatbotUISVG` from `../icons/chatbotui-svg`, which is a custom SVG component for the Chatbot UI logo.

## Props

```ts
interface BrandProps {
  theme?: "dark" | "light"
}
```

The `Brand` component accepts a single prop, `theme`, which is optional and can be either "dark" or "light". This prop is used to determine the color theme of the `ChatbotUISVG` component.

## Component

```ts
export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://www.chatbotui.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="text-4xl font-bold tracking-wide">Chatbot UI</div>
    </Link>
  )
}
```

The `Brand` component is a functional component that renders a `Link` component. This `Link` component has several props:

- `className`: This is a string of CSS classes that style the link.
- `href`: This is the URL that the link points to.
- `target`: This is set to `_blank` to open the link in a new tab.
- `rel`: This is set to `noopener noreferrer` for security reasons.

Inside the `Link` component, there are two `div` elements:

- The first `div` contains the `ChatbotUISVG` component, which displays the Chatbot UI logo. The `theme` prop of the `ChatbotUISVG` component is set based on the `theme` prop of the `Brand` component, and the `scale` prop is set to `0.3`.
- The second `div` contains the text "Chatbot UI", which is styled with several CSS classes.