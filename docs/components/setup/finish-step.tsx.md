---
source: components/setup/finish-step.tsx
generated: '2025-06-08T13:21:01.636Z'
tags: []
hash: 6b294c7a4876e8ec2162864ea2ac7101c3d9e879cb82e74fdf2be86da0e91517
---
# FinishStep Component

The `FinishStep` component is a functional component that displays a welcome message to the Chatbot UI. It optionally includes the first name of the user if a `displayName` is provided.

## Props

The `FinishStep` component takes the following props:

- `displayName` (string): The full name of the user. If this prop is provided, the first name of the user will be included in the welcome message.

## Usage

```jsx
import { FinishStep } from './FinishStep';

<FinishStep displayName="John Doe" />
```

In the above example, the `FinishStep` component will render the following:

```html
<div class="space-y-4">
  <div>Welcome to Chatbot UI, John!</div>
  <div>Click next to start chatting.</div>
</div>
```

If no `displayName` is provided, the component will render the following:

```html
<div class="space-y-4">
  <div>Welcome to Chatbot UI!</div>
  <div>Click next to start chatting.</div>
</div>
```

## Source Code

```jsx
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
