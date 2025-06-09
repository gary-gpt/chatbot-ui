---
source: components/ui/limit-display.tsx
generated: 2025-06-08T22:03:29.859Z
tags: []
hash: ec85fcdf6674304660cfe17baa951b726a45688d2e5abdbe418e9ebddbced895
---

# Limit Display Component Documentation

This document provides an overview of the `LimitDisplay` component found in the file `/Users/garymason/chatbot-ui/components/ui/limit-display.tsx`.

## Overview

The `LimitDisplay` component is a simple, functional component written in TypeScript that displays the current usage and the limit of a certain resource. It is a part of a chatbot user interface.

## Code Breakdown

```ts
import { FC } from "react"
```

The component imports `FC` (FunctionComponent) from the `react` library. This is a type used for functional components in TypeScript.

```ts
interface LimitDisplayProps {
  used: number
  limit: number
}
```

This interface defines the props that the `LimitDisplay` component expects to receive. Both `used` and `limit` are numbers. `used` represents the current usage of a resource, and `limit` represents the maximum allowed usage of that resource.

```ts
export const LimitDisplay: FC<LimitDisplayProps> = ({ used, limit }) => {
  return (
    <div className="text-xs italic">
      {used}/{limit}
    </div>
  )
}
```

This is the definition of the `LimitDisplay` component. It is a functional component that takes `LimitDisplayProps` as props. The component returns a `div` element with the class `text-xs italic` that displays the current usage and the limit of a resource, separated by a slash.

## Usage

To use the `LimitDisplay` component, import it from its file and use it in JSX, passing the `used` and `limit` props as numbers:

```ts
import { LimitDisplay } from './components/ui/limit-display';

// In a component render method
<LimitDisplay used={5} limit={10} />
```

This will render a `div` that displays "5/10", indicating that half of the resource is currently in use.