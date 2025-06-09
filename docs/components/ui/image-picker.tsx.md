---
source: components/ui/image-picker.tsx
generated: 2025-06-08T22:02:39.512Z
tags: []
hash: 5c39fcbebe35ac2525500d95f62d0cedaecc699c2ff3a65100e7a1a408f4b52c
---

# Image Picker Component Documentation

This document describes the `ImagePicker` component found in the file `/Users/garymason/chatbot-ui/components/ui/image-picker.tsx`. The `ImagePicker` component is a React Functional Component (FC) that provides an interface for selecting and displaying an image.

## Code Overview

```ts
import Image from "next/image"
import { ChangeEvent, FC, useState } from "react"
import { toast } from "sonner"
import { Input } from "./input"
```

The code begins by importing necessary modules and components. `Image` from `next/image` is used to display the selected image, `ChangeEvent`, `FC`, and `useState` from `react` are used in the component definition and state management, `toast` from `sonner` is used for error notifications, and `Input` from `./input` is used to create the file input element.

## Component Props

The `ImagePicker` component accepts the following props:

- `src`: The initial source of the image.
- `image`: The initial image file.
- `onSrcChange`: A function to be called when the image source changes.
- `onImageChange`: A function to be called when the image file changes.
- `width` (optional): The width of the image. Defaults to 200.
- `height` (optional): The height of the image. Defaults to 200.

## Component State

The component maintains two pieces of state:

- `previewSrc`: The current source of the preview image.
- `previewImage`: The current image file for preview.

## Component Logic

The `handleImageSelect` function is the main logic of the component. It is triggered when a user selects a new image file. The function first checks if the selected file is larger than 6MB. If it is, an error toast is displayed and the function returns early.

If the file size is acceptable, the function creates a URL for the file and uses it to set the source of a new `Image` object. When the image loads, a square canvas is created with the size of the smaller dimension of the image. The image is then drawn onto the canvas, cropped to the square size.

The data URL of the canvas is then used to update the `previewSrc` state and the `onSrcChange` prop function is called with the new URL. The `previewImage` state is also updated with the new file and the `onImageChange` prop function is called with the new file.

## Component Return

The component returns a `div` containing the `Image` component for displaying the preview image (if `previewSrc` is not null) and an `Input` component for selecting a new image file. The `Input` component has the `type` set to `"file"` and `accept` set to `"image/png, image/jpeg, image/jpg"` to only accept these image file types. The `onChange` prop of the `Input` component is set to the `handleImageSelect` function.

## Export

The `ImagePicker` component is exported as the default export of the module.