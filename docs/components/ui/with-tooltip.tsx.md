---
source: components/ui/with-tooltip.tsx
generated: '2025-06-08T13:21:01.644Z'
tags: []
hash: f7acdf9681fa455c1d6d3151ba672fd2531581ee9d518f9e0bd87ce6c8d3c643
---
# WithTooltip Component Documentation

The `WithTooltip` component is a functional component that uses the Tooltip functionality to provide additional information when a user interacts with an element.

## Props

The `WithTooltip` component accepts the following props:

- `display` (React.ReactNode): The content to be displayed within the tooltip. This prop is required.

- `trigger` (React.ReactNode): The content that triggers the tooltip when interacted with. This prop is required.

- `delayDuration` (number, optional): The delay in milliseconds before the tooltip appears. Default value is 500ms.

- `side` (string, optional): The side where the tooltip will appear relative to the trigger. Accepts the following values: "left", "right", "top", "bottom". Default value is "right".

## Usage

```jsx
import { WithTooltip } from './WithTooltip';

<WithTooltip 
  display={<div>Tooltip Content</div>}
  trigger={<button>Hover me</button>}
  delayDuration={300}
  side="top"
/>
```

In the example above, hovering over the button will display the tooltip on the top side after a delay of 300ms.

## Dependencies

This component depends on the `Tooltip`, `TooltipContent`, `TooltipProvider`, and `TooltipTrigger` components from the `./tooltip` module.
