---
source: components/ui/with-tooltip.tsx
generated: 2025-06-08T22:13:14.039Z
tags: []
hash: 595025b4f874c926f9ba4fcfbfeee6e6ea586531c865aaf56de72ef4938c17cc
---

# Code Documentation for `with-tooltip.tsx`

This file is a TypeScript (`.tsx`) file located at `/Users/garymason/chatbot-ui/components/ui/`. It exports a functional component `WithTooltip` that is used to wrap any React component with a tooltip. This tooltip is displayed when the user interacts with the wrapped component (the trigger).

## Import Statements

```ts
import { FC } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./tooltip"
```

The file imports the `FC` (Functional Component) type from the `react` library. It also imports four components from a local file named `tooltip.tsx`: `Tooltip`, `TooltipContent`, `TooltipProvider`, and `TooltipTrigger`.

## Interface: `WithTooltipProps`

```ts
interface WithTooltipProps {
  display: React.ReactNode
  trigger: React.ReactNode

  delayDuration?: number
  side?: "left" | "right" | "top" | "bottom"
}
```

This interface defines the props that the `WithTooltip` component accepts. 

- `display`: This is the content that will be displayed inside the tooltip. It can be any valid React node.
- `trigger`: This is the component that will trigger the tooltip when interacted with. It can also be any valid React node.
- `delayDuration`: This optional prop defines the delay (in milliseconds) before the tooltip is displayed. If not provided, it defaults to `500`.
- `side`: This optional prop defines the side where the tooltip will be displayed relative to the trigger. It can be either "left", "right", "top", or "bottom". If not provided, it defaults to `"right"`.

## Functional Component: `WithTooltip`

```ts
export const WithTooltip: FC<WithTooltipProps> = ({
  display,
  trigger,

  delayDuration = 500,
  side = "right"
}) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>

        <TooltipContent side={side}>{display}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

This is the main functional component that is exported from this file. It uses the `WithTooltipProps` interface for its props. 

The component returns a `TooltipProvider` that wraps a `Tooltip` component. Inside the `Tooltip`, there are two children: `TooltipTrigger` and `TooltipContent`. 

- `TooltipTrigger` wraps the `trigger` prop, meaning that the tooltip will be displayed when this component is interacted with.
- `TooltipContent` wraps the `display` prop and is the content that will be displayed in the tooltip. The `side` prop is passed to it to determine where the tooltip will be displayed relative to the trigger.

The `delayDuration` prop is passed to the `TooltipProvider` to set the delay before the tooltip is displayed.