---
source: components/setup/step-container.tsx
generated: 2025-06-08T21:39:05.556Z
tags: []
hash: 19064992a91325c0f5be7d27eb87e739d488bd71055944bc2210b2166814dd85
---

# Step Container Component Documentation

This document describes the `StepContainer` component in the file `/Users/garymason/chatbot-ui/components/setup/step-container.tsx`.

## Overview

The `StepContainer` is a React functional component that renders a card UI for each step in a multi-step setup process. The card displays a title, description, and step number. It also optionally includes "Back" and "Next" buttons to navigate through the steps.

## Code Summary

```ts
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { FC, useRef } from "react"

export const SETUP_STEP_COUNT = 3

interface StepContainerProps {
  stepDescription: string
  stepNum: number
  stepTitle: string
  onShouldProceed: (shouldProceed: boolean) => void
  children?: React.ReactNode
  showBackButton?: boolean
  showNextButton?: boolean
}

export const StepContainer: FC<StepContainerProps> = ({
  stepDescription,
  stepNum,
  stepTitle,
  onShouldProceed,
  children,
  showBackButton = false,
  showNextButton = true
}) => {
  // ... component implementation
}
```

## Component Props

The `StepContainer` component accepts the following props:

- `stepDescription`: A string that describes the current step.
- `stepNum`: A number that represents the current step number.
- `stepTitle`: A string that represents the title of the current step.
- `onShouldProceed`: A callback function that is called when the user clicks the "Back" or "Next" button. It receives a boolean argument that indicates whether the user should proceed to the next step (`true`) or go back to the previous step (`false`).
- `children`: Any React nodes that should be rendered within the `CardContent` component.
- `showBackButton`: A boolean that determines whether the "Back" button should be displayed. It defaults to `false`.
- `showNextButton`: A boolean that determines whether the "Next" button should be displayed. It defaults to `true`.

## Component Logic

The `StepContainer` component uses a React ref (`buttonRef`) to reference the "Next" button. It defines a `handleKeyDown` function that simulates a click event on the "Next" button when the user presses the "Enter" key (but not the "Shift" key).

The component renders a `Card` that contains a `CardHeader`, `CardContent`, and `CardFooter`. The `CardHeader` displays the `stepTitle` and `stepNum`. The `CardContent` renders any `children` passed to the `StepContainer`. The `CardFooter` contains the "Back" and "Next" buttons, which are displayed based on the `showBackButton` and `showNextButton` props, respectively. When clicked, these buttons call the `onShouldProceed` callback with the appropriate argument.