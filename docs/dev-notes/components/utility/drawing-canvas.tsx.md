**📄 Source File:** `/components/utility/drawing-canvas.tsx`  
**🕒 Generated:** 2025-06-07 14:04:48 UTC  
**🤖 Model:** gpt-4

---

# DrawingCanvas.tsx

This file defines and exports a React functional component `DrawingCanvas` which is used to create a drawing canvas for a chatbot UI. The canvas allows users to draw on an image and the drawn image can be sent as a message.

## Interface

The file defines a TypeScript interface `DrawingCanvasProps` which is used to type check the props of the `DrawingCanvas` component. It has a single property `imageItem` of type `MessageImage`.

## Functional Component

The `DrawingCanvas` component uses the `ChatbotUIContext` to get the `setNewMessageImages` function. This function is used to update the image messages in the chatbot UI context.

The component uses the `useRef` hook to create a reference to the canvas HTML element. It also uses the `useState` hook to manage a boolean state `isDrawing` which is used to track whether the user is currently drawing on the canvas.

The `useEffect` hook is used to load the image onto the canvas when the component mounts. The image is resized to fit within the parent element while maintaining its aspect ratio.

The component defines three event handler functions: `startDrawing`, `draw`, and `finishDrawing`. These functions handle the `onMouseDown`, `onMouseMove`, and `onMouseUp`/`onMouseLeave` events respectively. They control the drawing process on the canvas.

When the drawing is finished, the `finishDrawing` function converts the canvas to a data URL and then to a blob. This blob is then converted to a `File` object and added to the chatbot UI context using the `setNewMessageImages` function.

## Usage

The `DrawingCanvas` component is used by passing an `imageItem` prop of type `MessageImage`. The `imageItem` should contain the URL of the image to be loaded onto the canvas. The component can be used in the JSX of a parent component like so:

```jsx
<DrawingCanvas imageItem={someImageItem} />
```

Where `someImageItem` is an object of type `MessageImage`.

## Interesting Structure or Nuance

The component uses the `useEffect` hook to load the image onto the canvas when the component mounts. This ensures that the image is loaded onto the canvas as soon as it is available.

The `startDrawing`, `draw`, and `finishDrawing` functions are used to control the drawing process on the canvas. They use the `isDrawing` state to track whether the user is currently drawing on the canvas.

The `finishDrawing` function converts the canvas to a data URL and then to a blob. This blob is then converted to a `File` object and added to the chatbot UI context. This allows the drawn image to be sent as a message in the chatbot UI.