---
source: components/messages/message-markdown-memoized.tsx
generated: '2025-06-08T13:21:01.636Z'
tags: []
hash: 501db7ea9b3f2fd00789a09e7dd3b536d1d22e6d915b4a3ac99783ed747565e7
---
# MessageMarkdownMemoized Component

This is a React functional component that uses the `memo` method from React to optimize rendering. It's a memoized version of the `ReactMarkdown` component.

## Import Statements

```jsx
import { FC, memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
```

The `FC` (Functional Component) and `memo` are imported from the `react` library. The `ReactMarkdown` and `Options` are imported from the `react-markdown` library.

## Component Definition

```jsx
export const MessageMarkdownMemoized: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)
```

The `MessageMarkdownMemoized` component is a memoized version of the `ReactMarkdown` component. It uses the `memo` function from React to avoid unnecessary re-renders. The `memo` function takes two arguments: the component and a comparison function.

The comparison function checks if the `children` and `className` props of the previous and next props are the same. If they are, the component will not re-render.

## Props

The `MessageMarkdownMemoized` component accepts all the props that the `ReactMarkdown` component accepts, as defined by the `Options` type from the `react-markdown` library.

## Usage

This component can be used wherever a `ReactMarkdown` component is used, but with the added benefit of optimized rendering. It will only re-render if the `children` or `className` props change.
