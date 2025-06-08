---
source: components/ui/calendar.tsx
generated: '2025-06-08T13:21:01.639Z'
tags: []
hash: bf50c80406e9c616a19fad76d64c8fc1f4b33ccf1c0fe50f0eecbaf5b197a05e
---
# Calendar Component

The `Calendar` component is a wrapper around the `DayPicker` component from the `react-day-picker` library. It provides a styled calendar interface with navigation buttons.

## Props

The `Calendar` component accepts the following props:

- `className`: (optional) A string representing additional CSS classes to apply to the calendar.
- `classNames`: (optional) An object containing CSS classes for different parts of the calendar. These classes will be merged with the default classes.
- `showOutsideDays`: (optional) A boolean value that determines whether or not to display the days from the previous and next months. The default value is `true`.
- `...props`: Any additional props will be passed directly to the `DayPicker` component.

## Usage

```jsx
import { Calendar } from "@/components/ui/Calendar"

function MyComponent() {
  return <Calendar />
}
```

## Styling

The `Calendar` component uses Tailwind CSS for styling. The default styles can be overridden by passing a `classNames` prop with the desired classes.

## Dependencies

- `react`
- `react-day-picker`
- `lucide-react`
- `@/lib/utils`
- `@/components/ui/button`

## Export

The `Calendar` component is the default export of this module.
