---
source: components/ui/input.tsx
generated: '2025-06-08T13:21:01.641Z'
tags: []
hash: 8369c3d41f042982a794b0e2f0531dbac2a73974a8b0e9a1c8f92fc7afdb60eb
---
# Input Component

This is a reusable `Input` component that extends the standard HTML input element's attributes. It is built using React.

## Importing

```javascript
import { Input } from 'path-to-component';
```

## Props

This component accepts all standard HTML input attributes (`React.InputHTMLAttributes<HTMLInputElement>`). Here are some of the main props you might use:

- `className`: This is used to add custom classes to the input component.
- `type`: This is used to specify the type of the input field. For example, `text`, `password`, `email`, etc.
- `...props`: Any other standard input attribute can be passed to this component.

## Usage

```javascript
<Input className="custom-class" type="text" placeholder="Enter text" />
```

In the above example, a text input field is rendered with a placeholder of "Enter text". The `className` prop is used to add a custom class to the input field.

## Styling

This component uses Tailwind CSS for styling. The default styles include a border, background color, placeholder text color, focus styles, and disabled styles. These can be overridden by passing a `className` prop.

## Forward Ref

This component uses `React.forwardRef` to create a ref that can be attached to the input element. This allows parent components to directly interact with the input element if necessary.
