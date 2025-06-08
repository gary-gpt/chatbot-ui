# Slider Component

This document provides information about the `Slider` component in the source code.

## Overview

The `Slider` component is a custom slider UI component built using the `@radix-ui/react-slider` library. It is a forward-ref React component that accepts all props applicable to the `SliderPrimitive.Root` component from the `@radix-ui/react-slider` library.

## Importing

```javascript
import { Slider } from "<path-to-slider-component>";
```

## Props

The `Slider` component accepts all the props that the `SliderPrimitive.Root` component accepts. It also accepts a `className` prop to provide additional custom styling.

### className

Type: `string`

The `className` prop allows you to pass additional CSS classes to the `Slider` component. This is useful for adding custom styling.

## Usage

```javascript
<Slider className="custom-slider" />
```

In the above example, the `Slider` component is used with a custom CSS class `custom-slider`.

## Structure

The `Slider` component consists of three main parts:

- `SliderPrimitive.Root`: This is the root element of the slider. It has a relative positioning and is a flex container. It also has some utility classes for width, touch behavior, and selection behavior.

- `SliderPrimitive.Track`: This is the track of the slider. It has a relative positioning and some utility classes for height, width, growth behavior, overflow behavior, and rounded corners.

- `SliderPrimitive.Thumb`: This is the thumb of the slider. It has some utility classes for border color, background color, ring offset color, focus visibility, block size, cursor behavior, rounded corners, border width, transition colors, focus outline, focus ring, focus ring offset, pointer events when disabled, and opacity when disabled.

## Display Name

The display name of the `Slider` component is set to the display name of the `SliderPrimitive.Root` component.

## Export

The `Slider` component is exported for use in other parts of the application.