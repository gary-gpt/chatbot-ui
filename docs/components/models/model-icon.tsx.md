# ModelIcon Component

The `ModelIcon` component is a functional component in React that displays an icon based on the provider of a model. It uses the `useTheme` hook from `next-themes` to adapt the appearance based on the current theme.

## Props

The component accepts the following props:

- `provider`: A `ModelProvider` type that indicates the provider of the model.
- `height`: A number indicating the height of the icon.
- `width`: A number indicating the width of the icon.
- `...props`: Other properties inherited from `HTMLAttributes<HTMLDivElement>`.

## Usage

The component can be used as follows:

```jsx
<ModelIcon provider="openai" height={50} width={50} />
```

This will render an icon for the OpenAI provider with a height and width of 50.

## Switch Cases

The component uses a switch statement to determine which icon to display based on the `provider` prop. The cases are as follows:

- `"openai"`: Displays the `OpenAISVG` icon.
- `"mistral"`: Displays the `mistral` image.
- `"groq"`: Displays the `groq` image.
- `"anthropic"`: Displays the `AnthropicSVG` icon.
- `"google"`: Displays the `GoogleSVG` icon.
- `"perplexity"`: Displays the `perplexity` image.
- `default`: Displays the `IconSparkles` icon.

## Styling

The component uses the `cn` function from `@/lib/utils` to conditionally apply classes based on the current theme. If the theme is dark, it applies a `bg-white` class, otherwise it applies a `border-DEFAULT border-black` class.