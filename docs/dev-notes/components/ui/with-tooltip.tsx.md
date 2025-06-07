**📄 Source File:** `/components/ui/with-tooltip.tsx`  
**🕒 Generated:** 2025-06-07 14:03:25 UTC  
**🤖 Model:** gpt-4

---

# withTooltip.tsx

The `withTooltip.tsx` file is a React component that provides a tooltip functionality. It uses the Tooltip, TooltipContent, TooltipProvider, and TooltipTrigger components from the same directory to create a tooltip that can be displayed on different sides of a trigger element.

## WithTooltipProps Interface

The `WithTooltipProps` interface defines the properties that the `WithTooltip` component accepts:

- `display`: A React node that will be displayed inside the tooltip.
- `trigger`: A React node that will trigger the tooltip when interacted with.
- `delayDuration` (optional): A number that sets the delay duration (in milliseconds) before the tooltip is displayed. The default value is 500.
- `side` (optional): A string that sets the side where the tooltip will be displayed relative to the trigger. It can be "left", "right", "top", or "bottom". The default value is "right".

## WithTooltip Component

The `WithTooltip` component is a functional component that uses the `WithTooltipProps` interface for its props. It uses the `TooltipProvider` component to set the delay duration for the tooltip. Inside the `TooltipProvider`, it uses the `Tooltip` component to wrap the `TooltipTrigger` and `TooltipContent` components. The `TooltipTrigger` component contains the `trigger` prop, and the `TooltipContent` component contains the `display` prop and sets the side where the tooltip will be displayed.

### Usage

The `WithTooltip` component can be used in a React application like this:

```jsx
<WithTooltip
  display={<div>Tooltip Content</div>}
  trigger={<button>Hover me</button>}
  delayDuration={1000}
  side="left"
/>
```

In this example, when the button is hovered over, a tooltip will appear to the left of the button after a delay of 1 second. The tooltip will contain the text "Tooltip Content".