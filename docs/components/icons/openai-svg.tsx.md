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