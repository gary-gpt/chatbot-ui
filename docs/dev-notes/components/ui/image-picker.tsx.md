**📄 Source File:** `/components/ui/image-picker.tsx`  
**🕒 Generated:** 2025-06-07 13:53:47 UTC  
**🤖 Model:** gpt-4

---

# ImagePicker.tsx

This file exports a React functional component named `ImagePicker`. The component allows users to select an image file, validates the file size, creates a square preview of the image, and triggers callbacks with the new image file and its data URL.

## Interface: ImagePickerProps

This interface defines the props that the `ImagePicker` component accepts:

- `src`: A string representing the source of the image.
- `image`: A `File` object representing the image file or `null`.
- `onSrcChange`: A function that gets called when the image source changes. It receives the new source string as an argument.
- `onImageChange`: A function that gets called when the image file changes. It receives the new `File` object as an argument.
- `width` (optional): A number representing the width of the image. Defaults to 200.
- `height` (optional): A number representing the height of the image. Defaults to 200.

## Function: ImagePicker

This is a React functional component that uses the `ImagePickerProps` interface for its props. It maintains its own state for the preview source and image file using the `useState` hook.

The component includes a function `handleImageSelect` that gets called when the user selects a file. This function validates the file size (it must be less than 6MB), creates a square preview of the image, and triggers the `onSrcChange` and `onImageChange` callbacks with the new image data.

The component renders an `Image` component if there is a preview source, and an `Input` component for the user to select a file. The `Image` component uses the `next/image` package for optimized image rendering.

## Usage

To use the `ImagePicker` component, import it from its file and include it in your JSX. Provide the necessary props such as `src`, `image`, `onSrcChange`, and `onImageChange`. You can optionally provide `width` and `height` props to control the size of the image.

```jsx
import ImagePicker from './ImagePicker';

// In your component
<ImagePicker 
  src={yourSrc} 
  image={yourImage} 
  onSrcChange={handleSrcChange} 
  onImageChange={handleImageChange} 
/>
```

## Interesting Structure or Nuance

The `handleImageSelect` function uses the `URL.createObjectURL` method to create a blob URL representing the image file. It then creates a new `Image` object and sets its source to this URL. When the image loads, it creates a canvas and draws the image onto it, cropping it to a square. It then gets the data URL of the canvas image and sets it as the new preview source. This is a clever way to create a square preview of an image.