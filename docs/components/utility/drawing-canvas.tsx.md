---
source: components/utility/drawing-canvas.tsx
generated: 2025-06-08T22:15:02.231Z
tags: []
hash: ecb87fe98e7857fee54a9760a3fe526629ce73c9120d3b2179c8b7b49dd93539
---

# DrawingCanvas Component Documentation

This document provides an overview of the `DrawingCanvas` component in the `chatbot-ui` project. This component is located in the file `/Users/garymason/chatbot-ui/components/utility/drawing-canvas.tsx`.

## Overview

The `DrawingCanvas` component is a functional component that provides a canvas for drawing. It uses the `ChatbotUIContext` to update the chatbot's messages with new images. The component allows users to draw on a loaded image and save the drawing as a new image.

## Code Breakdown

### Imports

```ts
import { ChatbotUIContext } from "@/context/context"
import { MessageImage } from "@/types"
import { FC, MouseEvent, useContext, useEffect, useRef, useState } from "react"
```

The component imports necessary dependencies, including the `ChatbotUIContext` from the application's context, the `MessageImage` type, and several hooks and types from `react`.

### Component Props

```ts
interface DrawingCanvasProps {
  imageItem: MessageImage
}
```

The `DrawingCanvas` component accepts a single prop `imageItem` of type `MessageImage`.

### Component Definition

```ts
export const DrawingCanvas: FC<DrawingCanvasProps> = ({ imageItem }) => {
  ...
}
```

The `DrawingCanvas` component is a functional component that takes `DrawingCanvasProps` as its props.

### State and Context

```ts
const { setNewMessageImages } = useContext(ChatbotUIContext)
const canvasRef = useRef<HTMLCanvasElement>(null)
const [isDrawing, setIsDrawing] = useState(false)
```

The component uses the `useContext` hook to access the `setNewMessageImages` function from the `ChatbotUIContext`. It also uses the `useRef` hook to create a reference to the canvas element, and the `useState` hook to manage a boolean state indicating whether the user is currently drawing.

### useEffect Hook

```ts
useEffect(() => {
  ...
}, [imageItem.url])
```

The `useEffect` hook is used to perform side effects when the `imageItem.url` prop changes. It loads the image from the provided URL, calculates the appropriate dimensions to maintain the image's aspect ratio within the parent element, and draws the image onto the canvas.

### Event Handlers

```ts
const startDrawing = ({ nativeEvent }: MouseEvent) => { ... }
const draw = ({ nativeEvent }: MouseEvent) => { ... }
const finishDrawing = () => { ... }
```

These functions are event handlers for mouse events. `startDrawing` is called when the mouse button is pressed, initializing the drawing process. `draw` is called when the mouse moves, drawing a line if the user is currently drawing. `finishDrawing` is called when the mouse button is released or leaves the canvas, finalizing the drawing and saving it as a new image.

### Component Return

```ts
return (
  <canvas
    ref={canvasRef}
    className="cursor-crosshair rounded"
    width={2000}
    height={2000}
    onMouseDown={startDrawing}
    onMouseUp={finishDrawing}
    onMouseMove={draw}
    onMouseLeave={finishDrawing}
    style={{
      maxHeight: "67vh",
      maxWidth: "67vw"
    }}
  />
)
```

The component returns a `canvas` element with attached event handlers for drawing and a ref to the canvas element. It has a fixed width and height, and a maximum height and width defined in viewport units to ensure it fits within the viewport.