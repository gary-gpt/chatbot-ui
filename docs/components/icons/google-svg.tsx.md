---
source: components/icons/google-svg.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: d89017258f59c6c77381dc8dcedb94baa5eadad0b11969782231561d9346343e
---
# GoogleSVG Component

The `GoogleSVG` is a functional component from the `react` library. This component renders a Google logo SVG.

## Props

The `GoogleSVG` component accepts the following props:

- `height` (optional): A number that sets the height of the SVG. The default value is `40`.
- `width` (optional): A number that sets the width of the SVG. The default value is `40`.
- `className` (optional): A string that sets the CSS class of the SVG.

## Usage

Here is an example of how to use the `GoogleSVG` component:

```jsx
<GoogleSVG height={50} width={50} className="my-svg-class" />
```

In this example, a Google logo SVG is rendered with a height and width of `50` and a CSS class of `my-svg-class`.

## SVG Details

The SVG rendered by this component is a Google logo. It consists of four `<path>` elements, each representing a different color in the Google logo. The colors are represented in hexadecimal format:

- `#FFC107`: Yellow
- `#FF3D00`: Red
- `#4CAF50`: Green
- `#1976D2`: Blue

The `viewBox` attribute on the SVG element is set to `"0 0 48 48"`, which means the aspect ratio of the SVG is preserved when scaling.
