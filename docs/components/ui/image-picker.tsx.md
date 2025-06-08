# ImagePicker Component

The `ImagePicker` component is a functional component that allows users to select an image file, which is then displayed as a preview. The selected image is also processed to create a square image, which is then used for the preview and passed to the parent component through callback functions.

## Props

The `ImagePicker` component accepts the following props:

- `src` (string): The source URL of the image to be displayed initially.
- `image` (File | null): The initial image file.
- `onSrcChange` (function): A callback function that is invoked when the source URL of the image changes. It receives the new source URL as a parameter.
- `onImageChange` (function): A callback function that is invoked when the image file changes. It receives the new image file as a parameter.
- `width` (number, optional): The width of the image. Defaults to 200.
- `height` (number, optional): The height of the image. Defaults to 200.

## Usage

The `ImagePicker` component can be used as follows:

```jsx
<ImagePicker
  src={initialSrc}
  image={initialImage}
  onSrcChange={handleSrcChange}
  onImageChange={handleImageChange}
/>
```

## Internal State

The `ImagePicker` component maintains the following internal state:

- `previewSrc` (string): The source URL of the image to be displayed as a preview.
- `previewImage` (File | null): The image file to be displayed as a preview.

## Event Handlers

The `ImagePicker` component has the following event handler:

- `handleImageSelect` (function): This function is invoked when the user selects an image file. It processes the selected image to create a square image, updates the internal state, and invokes the callback functions with the new values. If the selected image file is larger than 6MB, an error message is displayed and the function returns early.

## Rendered Output

The `ImagePicker` component renders a `div` element that contains an `Image` component for displaying the preview image and an `Input` component for the file input. The `Image` component is only rendered if `previewSrc` is truthy. The `Input` component is configured to accept PNG, JPEG, and JPG files.