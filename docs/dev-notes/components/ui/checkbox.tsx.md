**📄 Source File:** `/components/ui/checkbox.tsx`  
**🕒 Generated:** 2025-06-07 13:50:19 UTC  
**🤖 Model:** gpt-4

---

# Checkbox.tsx

This file is a React component that creates a custom checkbox using the Radix UI library. It uses the `@radix-ui/react-checkbox` primitive to create a checkbox with custom styles and functionality.

## Exports

This file exports a single component, `Checkbox`.

### Checkbox

`Checkbox` is a React component that renders a checkbox with custom styles. It uses the `@radix-ui/react-checkbox` primitive for the base functionality and structure of the checkbox, and applies custom styles and behaviors.

The `Checkbox` component is a forward ref component, which means it can accept a `ref` prop and pass it to the underlying DOM element. This is useful for managing focus, scrolling, or measuring the size or position of the checkbox.

The `Checkbox` component accepts all the same props as the `@radix-ui/react-checkbox` primitive, with the addition of a `className` prop for applying custom styles.

The `Checkbox` component uses the `cn` utility function from `@/lib/utils` to combine class names. It applies a variety of styles to the checkbox, including border color, background color, text color, size, border radius, focus styles, and disabled styles.

Inside the `Checkbox` component, it renders a `CheckboxPrimitive.Indicator` component, which is used to display the checkmark when the checkbox is checked. The checkmark is rendered using the `Check` component from `lucide-react`.

The `Checkbox` component sets its `displayName` to the `displayName` of the `CheckboxPrimitive.Root` component, which helps with debugging and testing.

## Usage

To use the `Checkbox` component, you can import it and use it in your JSX like any other React component:

```jsx
import { Checkbox } from './Checkbox';

function MyComponent() {
  return (
    <div>
      <Checkbox />
    </div>
  );
}
```

You can pass all the same props to `Checkbox` as you would to the `@radix-ui/react-checkbox` primitive, and they will be forwarded to the underlying checkbox element. You can also pass a `className` prop to apply custom styles.

## Structure and Nuance

The `Checkbox` component uses the `cn` utility function to combine class names, which allows for more flexible styling. It also uses the `React.forwardRef` function to create a ref-forwarding component, which allows the parent component to interact with the underlying checkbox element.

The `Checkbox` component uses the `@radix-ui/react-checkbox` primitive as a base, which provides a solid foundation of accessibility and usability features. It then applies custom styles and behaviors on top of this base to create a unique checkbox component.