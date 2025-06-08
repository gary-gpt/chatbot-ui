---
source: components/ui/screen-loader.tsx
generated: '2025-06-08T13:21:01.642Z'
tags: []
hash: c11e1712c2ae113df2aa72852b1099bc5218e56508010eb24b224e7b4963ee48
---
# ScreenLoader Component Documentation

## Overview
The `ScreenLoader` component is a functional component in React that displays a loading icon on the screen. This component is useful when you want to indicate that a certain operation is in progress, such as data fetching or a page transition.

## Importing
```javascript
import { ScreenLoader } from './ScreenLoader';
```

## Props
The `ScreenLoader` component does not accept any props.

## Usage
```javascript
<ScreenLoader />
```

## Description
The `ScreenLoader` component renders a `div` element with the following CSS classes: `flex`, `size-full`, `flex-col`, `items-center`, `justify-center`. These classes are responsible for the positioning and sizing of the loading icon.

Inside the `div`, the `IconLoader2` component from `@tabler/icons-react` package is rendered. This component displays the loading icon. It has the following CSS classes: `mt-4`, `size-12`, `animate-spin`. These classes control the margin, size, and animation of the icon.

## Dependencies
This component depends on the following packages:
- `react` for creating the functional component.
- `@tabler/icons-react` for the `IconLoader2` component which displays the loading icon.
