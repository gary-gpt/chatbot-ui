---
source: components/ui/submit-button.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: 25ef4b8e77b4bd3a230f61e81155228fd2926f7df4e797013118a5a58c71eb3b
---
# SubmitButton Component

This file exports a `SubmitButton` component that is used to submit forms in the application. This component is built using React and takes advantage of the `useFormStatus` hook from `react-dom` to handle form submission status.

## Import Statements

```jsx
import React from "react"
import { useFormStatus } from "react-dom"
import { Button, ButtonProps } from "./button"
```

The `React` library is imported to create and manage the `SubmitButton` component.

The `useFormStatus` hook from `react-dom` is used to fetch the current status of the form.

The `Button` and `ButtonProps` are imported from a local file `button.js`. The `Button` is a component that is used to render the button, and `ButtonProps` is a TypeScript interface that defines the props that the `Button` component accepts.

## SubmitButton Component

```jsx
const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { pending } = useFormStatus()

    return <Button disabled={pending} ref={ref} {...props} />
  }
)
```

The `SubmitButton` component is a functional component that uses the `forwardRef` function from React to pass a `ref` to the `Button` component. This `ref` can be used to access the `Button` component directly.

The `useFormStatus` hook is used inside the `SubmitButton` component to fetch the current status of the form. If the form is in the `pending` state, the `Button` is disabled.

## Export Statement

```jsx
export { SubmitButton }
```

The `SubmitButton` component is exported for use in other parts of the application.
