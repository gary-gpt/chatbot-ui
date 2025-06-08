---
source: components/ui/select.tsx
generated: '2025-06-08T13:21:01.642Z'
tags: []
hash: 9e6b60f29488a3e679d7d2bec19e87194ab6bd8687258bdd4def41354ab62499
---
# Select Component Documentation

This file exports several components that are used to create a customizable select dropdown menu. The components are built using the `@radix-ui/react-select` library.

## Components

### `Select`

The root component of the select dropdown.

### `SelectGroup`

A component that groups related options in the dropdown.

### `SelectValue`

A component that represents the selected value of the dropdown.

### `SelectTrigger`

A component that triggers the opening and closing of the dropdown. It includes a `ChevronDown` icon.

### `SelectContent`

A component that contains the dropdown content. It includes a `SelectScrollUpButton` and `SelectScrollDownButton` for scrolling through the dropdown options.

### `SelectLabel`

A component that represents the label of the dropdown.

### `SelectItem`

A component that represents an option in the dropdown. It includes a `Check` icon to indicate the selected option.

### `SelectSeparator`

A component that separates groups of related options in the dropdown.

### `SelectScrollUpButton`

A button that scrolls up through the dropdown options. It includes a `ChevronUp` icon.

### `SelectScrollDownButton`

A button that scrolls down through the dropdown options. It includes a `ChevronDown` icon.

## Usage

Import the components from the file and use them to construct a select dropdown. The `Select` component should be the parent component, with the other components nested inside as needed. Use the `SelectTrigger` to open and close the dropdown, and use the `SelectItem` component to represent each option in the dropdown. If you have groups of related options, use the `SelectGroup` component to group them, and use the `SelectSeparator` to separate different groups. The `SelectValue` component represents the currently selected option.
