# Popover Component

This file exports three components: `Popover`, `PopoverTrigger`, and `PopoverContent`. These components are built using the `@radix-ui/react-popover` library.

## Importing the Components

```jsx
import { Popover, PopoverTrigger, PopoverContent } from './path_to_this_file';
```

## Components

### `Popover`

This is the root component of the popover. It is a wrapper for the `PopoverPrimitive.Root` from the `@radix-ui/react-popover` library.

### `PopoverTrigger`

This component is used to trigger the popover. It is a wrapper for the `PopoverPrimitive.Trigger` from the `@radix-ui/react-popover` library.

### `PopoverContent`

This component is used to display the content of the popover. It is a wrapper for the `PopoverPrimitive.Content` from the `@radix-ui/react-popover` library. It uses `React.forwardRef` to get a ref from its parent component and pass it to the `PopoverPrimitive.Content`.

The `PopoverContent` component accepts the following props:

- `className`: A string that represents the CSS classes to apply to the component.
- `align`: A string that represents the alignment of the popover. The default value is `"center"`.
- `sideOffset`: A number that represents the offset from the side of the popover. The default value is `4`.
- `...props`: Any other props passed to the component will be spread onto the `PopoverPrimitive.Content`.

The `PopoverContent` component also applies a series of CSS classes to control the appearance and animation of the popover.

## Usage

```jsx
<Popover>
  <PopoverTrigger>
    <button>Open Popover</button>
  </PopoverTrigger>
  <PopoverContent>
    <p>This is the content of the popover.</p>
  </PopoverContent>
</Popover>
```

In this example, clicking the button will open the popover, which will display the text "This is the content of the popover."