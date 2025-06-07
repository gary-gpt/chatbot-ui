**📄 Source File:** `/components/ui/calendar.tsx`  
**🕒 Generated:** 2025-06-07 13:49:17 UTC  
**🤖 Model:** gpt-4

---

# Calendar.tsx

This file is a React component that provides a customizable calendar interface. It uses the `DayPicker` component from the `react-day-picker` library and customizes it with additional styles and properties.

## Exports

The file exports the following:

### `CalendarProps` type

This is a type alias for the properties of the `DayPicker` component from the `react-day-picker` library. It is used to type check the props of the `Calendar` component.

### `Calendar` function

This is a functional React component that renders a calendar interface. It accepts all the props that the `DayPicker` component accepts, along with a few additional ones:

- `className`: A string that can be used to add additional CSS classes to the `DayPicker` component.
- `classNames`: An object that can be used to customize the CSS classes of the different parts of the `DayPicker` component.
- `showOutsideDays`: A boolean that determines whether or not to show the days from the previous and next months.

The `Calendar` component uses the `cn` function from the `@/lib/utils` module to concatenate CSS classes, and the `buttonVariants` function from the `@/components/ui/button` module to generate CSS classes for the buttons.

The `Calendar` component also customizes the left and right navigation icons of the `DayPicker` component using the `ChevronLeft` and `ChevronRight` components from the `lucide-react` library.

## Usage

The `Calendar` component can be used in a React application like any other component. Here is an example:

```jsx
import { Calendar } from './Calendar';

function MyApp() {
  return (
    <div>
      <Calendar />
    </div>
  );
}
```

## Interesting Structure or Nuance

The `Calendar` component uses the spread operator (`...props`) to pass any additional props to the `DayPicker` component. This makes the `Calendar` component very flexible, as it can accept any prop that the `DayPicker` component can accept.

The `Calendar` component also uses the `cn` function to concatenate CSS classes, and the `buttonVariants` function to generate CSS classes for the buttons. This allows for a high degree of customization of the appearance of the calendar.