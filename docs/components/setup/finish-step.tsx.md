---
source: components/setup/finish-step.tsx
generated: 2025-06-08T21:38:22.442Z
tags: []
hash: 66eb46b7ffcf908ccb6f35630d807e255e7d128104f3075ff9af4421cf19e0ef
---

# FinishStep Component Documentation

This markdown file documents the `FinishStep` component located at `/Users/garymason/chatbot-ui/components/setup/finish-step.tsx`. This component is part of a chatbot user interface and is used to display a welcome message to the user.

## Code Overview

```ts
import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        Welcome to Chatbot UI
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div>Click next to start chatting.</div>
    </div>
  )
}
```

## Import Statements

```ts
import { FC } from "react"
```

The `FC` (Functional Component) type from `react` is imported. This is a TypeScript type used to describe functional components.

## Interface

```ts
interface FinishStepProps {
  displayName: string
}
```

The `FinishStepProps` interface is defined to type check the props that the `FinishStep` component expects. It expects one prop:

- `displayName`: A string that represents the name of the user.

## FinishStep Component

```ts
export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        Welcome to Chatbot UI
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div>Click next to start chatting.</div>
    </div>
  )
}
```

The `FinishStep` component is a functional component that receives `displayName` as a prop. It returns a JSX element that displays a welcome message to the user. If `displayName` is provided and is not an empty string, the first word of `displayName` is appended to the welcome message. If `displayName` is not provided or is an empty string, no name is appended to the welcome message.

The component also displays a message instructing the user to click next to start chatting.