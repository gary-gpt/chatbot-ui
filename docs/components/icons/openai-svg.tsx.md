---
source: components/icons/openai-svg.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: bb9e74512864466efa64f7af3ca7a1181f544b907846e363b62e5a8cc0a567e4
---
# OpenAISVG Component

This component is a functional component from React that renders an SVG image. The SVG image is designed to be customizable with adjustable height, width, and CSS class.

## Props

The `OpenAISVG` component accepts the following props:

- `height` (optional): The height of the SVG image. It is a number and defaults to 40 if not provided.
- `width` (optional): The width of the SVG image. It is a number and defaults to 40 if not provided.
- `className` (optional): The CSS class to apply to the SVG image. It is a string.

## Usage

Here is an example of how to use the `OpenAISVG` component:

```jsx
import { OpenAISVG } from './OpenAISVG';

function MyComponent() {
  return (
    <div>
      <OpenAISVG height={50} width={50} className="my-svg-class" />
    </div>
  );
}
```

In this example, the `OpenAISVG` component is used with a height and width of 50, and a CSS class of "my-svg-class".
