---
source: components/ui/calendar.tsx
generated: 2025-06-08T21:57:38.458Z
tags: []
hash: f2b45e7b252273f0ecf0c0857804d299a06ceffc8730929615479d2ba1eb34c5
---

# Calendar Component Documentation

This document provides an overview of the Calendar component in the file `/Users/garymason/chatbot-ui/components/ui/calendar.tsx`. This component is a user interface element that displays a calendar, allowing users to select dates.

## Dependencies

This component is written in TypeScript and uses the following libraries:

- React: A JavaScript library for building user interfaces.
- lucide-react: A library that provides a set of SVG icons for React applications.
- react-day-picker: A flexible date picker component for React.
- @/lib/utils: A custom utility library.
- @/components/ui/button: A custom button component.

## Component Props

The `Calendar` component accepts all the props of the `DayPicker` component from the `react-day-picker` library. This includes:

- `className`: A string that specifies the CSS class of the component.
- `classNames`: An object that specifies the CSS classes of the different elements of the component.
- `showOutsideDays`: A boolean that determines whether or not to display the days from the previous and next months.

## Component Logic

The `Calendar` component is a functional component that returns a `DayPicker` component. It uses the `showOutsideDays` prop to determine whether or not to display the days from the previous and next months. It also uses the `className` and `classNames` props to customize the CSS classes of the different elements of the component.

The `DayPicker` component is customized with a set of predefined CSS classes and components. The CSS classes are used to style the different elements of the component, such as the months, month, caption, navigation buttons, table, rows, cells, and days. The components are used to replace the default left and right icons with `ChevronLeft` and `ChevronRight` icons from the `lucide-react` library.

## Code Summary

```ts
"use client"

// Import dependencies
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// Define component props
export type CalendarProps = React.ComponentProps<typeof DayPicker>

// Define component
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      // Pass props to DayPicker component
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        // Define CSS classes for different elements
        // ...
        ...classNames
      }}
      components={{
        // Replace default icons with ChevronLeft and ChevronRight icons
        IconLeft: ({ ...props }) => <ChevronLeft className="size-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="size-4" />
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

// Export component
export { Calendar }
```

## Conclusion

The `Calendar` component is a customizable calendar component that can be used in any React application. It provides a flexible and user-friendly way to select dates.