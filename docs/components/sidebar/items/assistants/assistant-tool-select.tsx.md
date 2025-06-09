---
source: components/sidebar/items/assistants/assistant-tool-select.tsx
generated: 2025-06-08T21:44:39.880Z
tags: []
hash: a095e96d6ae014c772f1cf0236e5308b7917e78217bc0f2351e5634233034b56
---

# Assistant Tool Select Component Documentation

This document provides an overview of the `AssistantToolSelect` component in the file `/Users/garymason/chatbot-ui/components/sidebar/items/assistants/assistant-tool-select.tsx`. This component is used to select tools for a chatbot assistant in a dropdown menu.

## Code Overview

```ts
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ChatbotUIContext } from "@/context/context"
import { Tables } from "@/supabase/types"
import {
  IconBolt,
  IconChevronDown,
  IconCircleCheckFilled
} from "@tabler/icons-react"
import { FC, useContext, useEffect, useRef, useState } from "react"
```

The above section imports the necessary dependencies for the component. This includes UI components like `Button`, `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuTrigger`, and `Input`, as well as context, types, and icons.

### AssistantToolSelectProps Interface

```ts
interface AssistantToolSelectProps {
  selectedAssistantTools: Tables<"tools">[]
  onAssistantToolsSelect: (tool: Tables<"tools">) => void
}
```

This interface defines the props for the `AssistantToolSelect` component. It expects an array of selected assistant tools and a function to handle the selection of an assistant tool.

### AssistantToolSelect Component

```ts
export const AssistantToolSelect: FC<AssistantToolSelectProps> = ({
  selectedAssistantTools,
  onAssistantToolsSelect
}) => {
  // Component logic and return statement...
}
```

The `AssistantToolSelect` component uses the `AssistantToolSelectProps` interface for its props. It uses the `ChatbotUIContext` to get the available tools and maintains local state for the dropdown open status and search input.

The `useEffect` hook is used to focus the input when the dropdown is opened. The `handleToolSelect` function calls the `onAssistantToolsSelect` prop function with the selected tool.

The component returns a `DropdownMenu` with a trigger button that shows the number of selected tools and a content section that includes a search input and a list of selectable tools.

### AssistantToolItemProps Interface

```ts
interface AssistantToolItemProps {
  tool: Tables<"tools">
  selected: boolean
  onSelect: (tool: Tables<"tools">) => void
}
```

This interface defines the props for the `AssistantToolItem` component. It expects a tool, a boolean indicating whether the tool is selected, and a function to handle the selection of the tool.

### AssistantToolItem Component

```ts
const AssistantToolItem: FC<AssistantToolItemProps> = ({
  tool,
  selected,
  onSelect
}) => {
  // Component logic and return statement...
}
```

The `AssistantToolItem` component uses the `AssistantToolItemProps` interface for its props. It handles the selection of a tool and returns a div that displays the tool name and a check icon if the tool is selected.