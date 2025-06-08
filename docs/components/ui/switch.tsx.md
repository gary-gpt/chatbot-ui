---
source: components/ui/switch.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: c1b79319ca3d55e8bd2ce4787aaf05c31674f3a207aaf9b5e549fa2b77fb4701
---
# Switch Component

This is a React component that uses the `@radix-ui/react-switch` package to create a customizable switch UI element.

## Importing

```javascript
import { Switch } from 'path-to-this-file';
```

## Props

This component accepts all props that can be passed to the `SwitchPrimitives.Root` component from the `@radix-ui/react-switch` package. In addition, it accepts the following prop:

- `className` (string): This is used to add additional CSS classes to the root element of the switch.

## Usage

```javascript
<Switch className="my-custom-class" />
```

This will render a switch with the additional CSS class `my-custom-class`.

## Styling

The switch is styled using Tailwind CSS. The root element of the switch has a number of classes applied to it by default, including classes for focus, checked and unchecked states, and disabled state. The thumb of the switch also has a number of classes applied to it by default.

## Refs

This component uses the `React.forwardRef` API, which means that a ref can be passed to it. This ref will be forwarded to the `SwitchPrimitives.Root` component.

## Display Name

The display name of this component is the same as the display name of the `SwitchPrimitives.Root` component.
