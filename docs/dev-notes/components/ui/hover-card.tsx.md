**📄 Source File:** `/components/ui/hover-card.tsx`  
**🕒 Generated:** 2025-06-07 13:53:27 UTC  
**🤖 Model:** gpt-4

---

# HoverCard.tsx

This TypeScript file is a part of a React project and it is responsible for creating a HoverCard component. The HoverCard component is a UI element that displays additional information when the user hovers over a certain element. This file uses the `@radix-ui/react-hover-card` package to create the HoverCard component.

## Exports

This file exports three components:

1. `HoverCard`: This is the root component of the HoverCard. It is directly imported from the `@radix-ui/react-hover-card` package.

2. `HoverCardTrigger`: This component is used to trigger the display of the HoverCard. It is also directly imported from the `@radix-ui/react-hover-card` package.

3. `HoverCardContent`: This component is used to display the content of the HoverCard. It is a wrapper around the `Content` component from the `@radix-ui/react-hover-card` package, with some additional properties and styling.

## Usage

To use these components, you would typically wrap the `HoverCardTrigger` around the element that should trigger the HoverCard, and then use the `HoverCardContent` to display the actual content of the HoverCard.

## Interesting Structure or Nuance

The `HoverCardContent` component uses the `React.forwardRef` function to create a ref to the `Content` component from the `@radix-ui/react-hover-card` package. This allows the parent component to access the ref of the `Content` component if necessary.

The `HoverCardContent` component also accepts several props, including `className`, `align`, and `sideOffset`. The `align` prop is used to align the HoverCard, and it defaults to "center". The `sideOffset` prop is used to offset the HoverCard from the side of the screen, and it defaults to 4.

The `className` prop is used to add additional CSS classes to the HoverCard. The `cn` function from the `@/lib/utils` package is used to concatenate the default CSS classes with the `className` prop.

The `HoverCardContent` component also uses several data attributes to control the animation of the HoverCard. These data attributes change based on the state of the HoverCard and the side of the screen that the HoverCard is displayed on.