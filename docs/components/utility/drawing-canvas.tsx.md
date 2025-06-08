# DrawingCanvas Component Documentation

The `DrawingCanvas` component is a React functional component that provides a drawing canvas interface for images. It allows users to draw on images with a red line and save the edited image.

## Props

The `DrawingCanvas` component accepts the following props:

- `imageItem`: An object of `MessageImage` type. It represents the image on which the user will draw.

## State Variables

- `isDrawing`: A boolean state variable that indicates whether the user is currently drawing on the canvas.

## Functions

- `startDrawing`: This function is triggered when the user presses the mouse button down. It starts the drawing process on the canvas.

- `draw`: This function is triggered when the user moves the mouse. It continues the drawing process on the canvas.

- `finishDrawing`: This function is triggered when the user releases the mouse button or leaves the canvas. It finishes the drawing process and saves the edited image.

## Usage

The `DrawingCanvas` component is used in the following way:

```jsx
<DrawingCanvas imageItem={imageItem} />
```

Where `imageItem` is an object of `MessageImage` type.

## Styles

The canvas has a `cursor-crosshair` and `rounded` classes applied to it. It also has a maximum height of 67vh and a maximum width of 67vw.

## Dependencies

This component uses the `ChatbotUIContext` to set new message images. It also uses the `MessageImage` type from `@/types`. The component is built using React hooks such as `useContext`, `useEffect`, `useRef`, and `useState`.