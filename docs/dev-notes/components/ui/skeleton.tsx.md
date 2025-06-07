**📄 Source File:** `/components/ui/skeleton.tsx`  
**🕒 Generated:** 2025-06-07 13:58:15 UTC  
**🤖 Model:** gpt-4

---

# Skeleton.tsx

This TypeScript file defines and exports a `Skeleton` component. This component is typically used as a placeholder while content is loading, providing a better user experience.

## Imports

The file imports a utility function `cn` from "@/lib/utils". This function is used to concatenate and manage CSS class names.

## Function: Skeleton

The `Skeleton` function is a React functional component that accepts an object of properties (`props`) conforming to the `React.HTMLAttributes<HTMLDivElement>` type, which includes all valid HTML attributes for a `div` element. 

The `className` property is destructured from the `props` object and used separately. This allows the component to accept a `className` prop that can be used to add additional CSS classes to the component.

The `Skeleton` component returns a `div` element with a set of predefined CSS classes: "bg-muted", "animate-pulse", and "rounded-md". These classes provide a muted background color, a pulsing animation, and rounded corners, respectively. 

The `className` prop, if provided, is appended to these predefined classes. This allows the user of the component to add additional styling if needed.

The remaining `props` are spread onto the `div` element, allowing any valid HTML attributes for a `div` to be passed to the component and added to the `div`.

## Exports

The `Skeleton` component is the only export of this file.

## Usage

To use the `Skeleton` component, import it from its module and use it like any other React component. You can pass any valid HTML attributes for a `div` as props to the component. If you want to add additional CSS classes, pass them as a string to the `className` prop.

```jsx
import { Skeleton } from './Skeleton';

function MyComponent() {
  return (
    <div>
      <Skeleton className="my-custom-class" id="my-skeleton" />
    </div>
  );
}
```

In the above example, the `Skeleton` component will have the id "my-skeleton" and the CSS classes "bg-muted", "animate-pulse", "rounded-md", and "my-custom-class".