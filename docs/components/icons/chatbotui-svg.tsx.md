# ChatbotUISVG Component

`ChatbotUISVG` is a functional component that renders a SVG (Scalable Vector Graphics) for a chatbot UI. The SVG is customizable through the props passed to the component.

## Props

The component accepts the following props:

### `theme`

This prop is used to set the color theme of the SVG. It accepts either `"dark"` or `"light"` as values.

- Type: `"dark" | "light"`
- Required: Yes

### `scale`

This prop is used to set the scale of the SVG. It multiplies the default width and height (189 x 194) of the SVG.

- Type: `number`
- Required: No
- Default: `1`

## Example

```jsx
<ChatbotUISVG theme="dark" scale={2} />
```

This will render a dark themed SVG with double the default size.

## SVG Details

The SVG consists of three main elements:

1. A rectangle that serves as the main body of the chatbot UI. The fill and stroke color depends on the `theme` prop.

2. A path that represents a message bubble. The fill color depends on the `theme` prop.

3. Another path that represents the chatbot's UI buttons. The fill color depends on the `theme` prop.