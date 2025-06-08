# HoverCard Component Documentation

This file exports three components: `HoverCard`, `HoverCardTrigger`, and `HoverCardContent`. These components are built using the `@radix-ui/react-hover-card` library.

## Importing the Components

```javascript
import { HoverCard, HoverCardTrigger, HoverCardContent } from './path_to_this_file';
```

## HoverCard

This is the root component for the hover card. It doesn't accept any props.

## HoverCardTrigger

This component is used to trigger the hover card. It doesn't accept any props.

## HoverCardContent

This component is used to display the content of the hover card. It accepts the following props:

- `className` (optional): A string to specify CSS classes.
- `align` (optional): A string to specify the alignment of the hover card. Default is `"center"`.
- `sideOffset` (optional): A number to specify the offset from the side. Default is `4`.

It also accepts all other props that can be passed to a `React.ElementRef` of `HoverCardPrimitive.Content`.

The `HoverCardContent` component also has a `displayName` property which is set to `HoverCardPrimitive.Content.displayName`.

## Usage

```javascript
<HoverCard>
  <HoverCardTrigger>
    Hover over me
  </HoverCardTrigger>
  <HoverCardContent className="custom-class" align="left" sideOffset={10}>
    I am the content of the hover card.
  </HoverCardContent>
</HoverCard>
```

In this example, when the user hovers over the text "Hover over me", a hover card with the text "I am the content of the hover card." will be displayed. The hover card will be aligned to the left and will have an offset of 10 from the side. The hover card will also have the CSS class "custom-class".