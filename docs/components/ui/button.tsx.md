# Button Component

This is a React component for a button with multiple variants and sizes. It uses the `@radix-ui/react-slot` and `class-variance-authority` libraries for managing variants and the `@/lib/utils` for utility functions.

## Dependencies

- `@radix-ui/react-slot`: A library for creating slots in React.
- `class-variance-authority`: A library for managing class variants in components.
- `react`: A JavaScript library for building user interfaces.
- `@/lib/utils`: A utility library.

## Variants

The `buttonVariants` constant defines the different variants and sizes of the button. The variants include:

- `default`: A primary button with primary text and background.
- `destructive`: A button with destructive text and background.
- `outline`: A button with input border and background.
- `secondary`: A button with secondary text and background.
- `ghost`: A button with accent text and background on hover.
- `link`: A text link with primary color and underline on hover.

The sizes include:

- `default`: A button with height 10, padding x-axis 4, and padding y-axis 2.
- `sm`: A small button with height 9, rounded medium, and padding x-axis 3.
- `lg`: A large button with height 11, rounded medium, and padding x-axis 8.
- `icon`: A button with size 10.

The default variant and size are both `default`.

## Props

The `ButtonProps` interface extends the `React.ButtonHTMLAttributes<HTMLButtonElement>` and `VariantProps<typeof buttonVariants>` interfaces. It includes an optional `asChild` prop which defaults to `false`.

## Component

The `Button` component is a forward ref component that accepts `ButtonProps`. It uses the `asChild` prop to determine whether to render a `Slot` or a `button`. It applies the class name from the `buttonVariants` function to the component.

The `Button` component is exported along with the `buttonVariants` constant.

## Usage

```jsx
import { Button } from 'path-to-button-component';

<Button variant="destructive" size="lg">Click Me</Button>
```

This will render a large, destructive button with the text "Click Me".