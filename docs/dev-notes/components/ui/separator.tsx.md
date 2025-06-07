**📄 Source File:** `/components/ui/separator.tsx`  
**🕒 Generated:** 2025-06-07 13:57:41 UTC  
**🤖 Model:** gpt-4

---

# Separator.tsx

This TypeScript file defines and exports a `Separator` component that is used to create a visual divider in a user interface. The component is built using the `SeparatorPrimitive` from the `@radix-ui/react-separator` library.

## Exports

The file exports a single component, `Separator`.

## Separator Component

The `Separator` component is a wrapper around the `SeparatorPrimitive.Root` component from the `@radix-ui/react-separator` library. It uses the `React.forwardRef` function to create a ref-forwarding component, which means that the ref passed to `Separator` will be forwarded to the `SeparatorPrimitive.Root` component.

The `Separator` component accepts all the props that `SeparatorPrimitive.Root` does, with the exception of `ref`, which is handled by `React.forwardRef`. It also accepts a `className` prop, which is appended to the component's default class names.

The `Separator` component has two additional default props:

- `orientation`: This prop determines the orientation of the separator. It defaults to "horizontal", but can also be set to "vertical".
- `decorative`: This prop determines whether the separator is purely decorative or not. It defaults to `true`.

The `Separator` component applies a set of default class names to the `SeparatorPrimitive.Root` component, and these class names change based on the `orientation` prop. If `orientation` is "horizontal", the class names "h-px w-full" are applied. If `orientation` is "vertical", the class names "h-full w-px" are applied.

The `Separator` component also sets its `displayName` to `SeparatorPrimitive.Root.displayName`, which helps with debugging and testing.

## Usage

To use the `Separator` component, you can import it from its module and use it in your JSX like any other React component. You can pass it any props that `SeparatorPrimitive.Root` accepts, as well as a `className` prop to add additional CSS classes. Here's an example:

```jsx
import { Separator } from './Separator'

function MyComponent() {
  return (
    <div>
      <p>Some content</p>
      <Separator className="my-separator" orientation="vertical" />
      <p>Some more content</p>
    </div>
  )
}
```

In this example, the `Separator` component will create a vertical separator with the additional CSS class "my-separator".