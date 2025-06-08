---
source: 'app/[locale]/[workspaceid]/page.tsx'
generated: '2025-06-08T13:21:01.648Z'
tags: []
hash: fd2a83cbb74d959b9e9b60454d04742c1b12224d8c28576ea0ace3a0a7339fd3
---
# WorkspacePage Component Documentation

## Overview

The `WorkspacePage` component is a React component that is used to display the name of the currently selected workspace in a chatbot UI.

## Imports

- `ChatbotUIContext` from "@/context/context": This is the context object that provides access to the current state of the chatbot UI.
- `useContext` from "react": This is a React hook that allows you to use the value of the context.

## Component Structure

The `WorkspacePage` component is a functional component that uses the `useContext` hook to access the `ChatbotUIContext`. It extracts the `selectedWorkspace` from the context.

The component returns a `div` element that is styled to be a full-screen flex container centered both vertically and horizontally. Inside this `div`, another `div` is returned that displays the name of the `selectedWorkspace` in a large font size.

## Code

```jsx
"use client"

import { ChatbotUIContext } from "@/context/context"
import { useContext } from "react"

export default function WorkspacePage() {
  const { selectedWorkspace } = useContext(ChatbotUIContext)

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-4xl">{selectedWorkspace?.name}</div>
    </div>
  )
}
```

## Usage

This component does not accept any props. It should be used as a standalone component within a React application that has `ChatbotUIContext` provider in its component tree. The `selectedWorkspace` value should be set in the context before this component is rendered.
