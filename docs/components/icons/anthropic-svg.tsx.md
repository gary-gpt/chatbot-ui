# AnthropicSVG Component

The `AnthropicSVG` component is a functional component that renders an SVG graphic. It is built using the `react` library's `FC` (Functional Component) type.

## Props

The `AnthropicSVG` component accepts the following props:

- `height` (optional): A number that sets the height of the SVG. If not provided, the default height is set to 40.
- `width` (optional): A number that sets the width of the SVG. If not provided, the default width is set to 40.
- `className` (optional): A string that sets the CSS class name for the SVG. This can be used to apply custom styles to the SVG.

## Usage

Here is an example of how to use the `AnthropicSVG` component:

```jsx
import { AnthropicSVG } from './AnthropicSVG'

const MyComponent = () => {
  return (
    <div>
      <AnthropicSVG height={50} width={50} className="my-svg-class" />
    </div>
  )
}
```

In this example, the `AnthropicSVG` component is rendered with a height and width of 50, and a CSS class name of "my-svg-class".