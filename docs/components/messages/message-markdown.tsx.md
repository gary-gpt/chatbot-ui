---
source: components/messages/message-markdown.tsx
generated: '2025-06-08T13:21:01.636Z'
tags: []
hash: bf5626aa818c90f7d8335861406f5ee549e2f24faf1d495185899c87c208d79a
---
# MessageMarkdown Component Documentation

## Overview

`MessageMarkdown` is a functional component in React that uses the `MessageMarkdownMemoized` component to render markdown content. It uses `remarkGfm` and `remarkMath` plugins for markdown parsing and supports custom rendering for paragraph, image, and code elements.

## Import Statement

```jsx
import { MessageMarkdown } from './path-to-component';
```

## Props

The component accepts the following props:

- `content` (string): The markdown content to be rendered.

## Usage

```jsx
<MessageMarkdown content="## This is a heading" />
```

## Custom Rendering

The component supports custom rendering for the following elements:

- **Paragraph (`p`)**: Paragraphs are rendered with a bottom margin of `2` except for the last paragraph.

- **Image (`img`)**: Images are rendered with a maximum width of `67%`.

- **Code (`code`)**: Code blocks are rendered differently based on their content. If the first child of the code block is a string and does not include a newline character, it is rendered as an inline code block. Otherwise, it is rendered using the `MessageCodeBlock` component. The language for syntax highlighting is determined by the `className` prop, which should be in the format `language-{language}`.

## Styling

The component uses Tailwind CSS for styling. The rendered markdown content has a minimum width of `100%`, a vertical spacing of `6`, and word break. It also includes specific styles for dark mode.

## Dependencies

- `react`
- `remark-gfm`
- `remark-math`
- `MessageCodeBlock`
- `MessageMarkdownMemoized`
