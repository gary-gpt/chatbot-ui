---
source: components/models/model-option.tsx
generated: 2025-06-08T21:37:10.620Z
tags: []
hash: 55cdfec9c364bb6c38e5c95958f94dc47e8feae911a595dff2f98ea45caa5853
---

# Model Option Component Documentation

This document provides a detailed explanation of the `model-option.tsx` file located at `/Users/garymason/chatbot-ui/components/models/`. The file contains a React component named `ModelOption` that is used to display a selectable model option with a tooltip.

## Table of Contents

- [Imports](#imports)
- [Props Interface](#props-interface)
- [ModelOption Component](#modeloption-component)

## Imports

The file imports several modules and components necessary for its functionality:

- `LLM` type from "@/types"
- `FC` (Functional Component) from "react"
- `ModelIcon` component from "./model-icon"
- `IconInfoCircle` from "@tabler/icons-react"
- `WithTooltip` component from "../ui/with-tooltip"

```ts
import { LLM } from "@/types"
import { FC } from "react"
import { ModelIcon } from "./model-icon"
import { IconInfoCircle } from "@tabler/icons-react"
import { WithTooltip } from "../ui/with-tooltip"
```

## Props Interface

The `ModelOptionProps` interface is defined to type check the props that the `ModelOption` component should receive. It expects two props:

- `model`: An object of type `LLM`.
- `onSelect`: A function that will be executed when the model option is selected.

```ts
interface ModelOptionProps {
  model: LLM
  onSelect: () => void
}
```

## ModelOption Component

The `ModelOption` component is a functional component that receives props of type `ModelOptionProps`. It returns a `WithTooltip` component that displays detailed information about the model when hovered over. The tooltip displays the input cost and output cost (if available) of the model. 

The model option itself is a clickable div that displays the model's icon and name. When clicked, it triggers the `onSelect` function passed in the props.

```ts
export const ModelOption: FC<ModelOptionProps> = ({ model, onSelect }) => {
  return (
    <WithTooltip
      display={...}
      side="bottom"
      trigger={
        <div
          className="hover:bg-accent flex w-full cursor-pointer justify-start space-x-3 truncate rounded p-2 hover:opacity-50"
          onClick={onSelect}
        >
          <div className="flex items-center space-x-2">
            <ModelIcon provider={model.provider} width={28} height={28} />
            <div className="text-sm font-semibold">{model.modelName}</div>
          </div>
        </div>
      }
    />
  )
}
```

Note: The `ModelIcon` component is used to display the icon of the model's provider.