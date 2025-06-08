---
source: components/ui/accordion.tsx
generated: '2025-06-08T13:21:01.638Z'
tags: []
hash: 05ade7eea41935406358a31e56affbbd46e3082ba3c6d84ca3c8aa8070d26498
---
# Accordion Component Documentation

This file exports four components that together create an Accordion component. These components are built using the `@radix-ui/react-accordion` package. 

## Components

### `Accordion`

This is the root component of the Accordion. It uses the `Root` component from `@radix-ui/react-accordion`.

### `AccordionItem`

This component represents a single item within the Accordion. It is a wrapper around the `Item` component from `@radix-ui/react-accordion`. It accepts all the props that the `Item` component accepts, along with a `className` prop. The `className` prop is used to add additional CSS classes to the component.

### `AccordionTrigger`

This component represents the trigger that toggles the visibility of the content within an `AccordionItem`. It is a wrapper around the `Trigger` component from `@radix-ui/react-accordion`. It accepts all the props that the `Trigger` component accepts, along with a `className` prop. The `className` prop is used to add additional CSS classes to the component.

The `AccordionTrigger` component also includes a `ChevronDown` icon from the `lucide-react` package. This icon rotates 180 degrees when the `AccordionItem` is open.

### `AccordionContent`

This component represents the content that is shown or hidden when the `AccordionTrigger` is clicked. It is a wrapper around the `Content` component from `@radix-ui/react-accordion`. It accepts all the props that the `Content` component accepts, along with a `className` prop. The `className` prop is used to add additional CSS classes to the component.

## Usage

To use these components, import them from the file and use them in your JSX like so:

```jsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './path-to-this-file';

<Accordion>
  <AccordionItem>
    <AccordionTrigger>
      Trigger Text
    </AccordionTrigger>
    <AccordionContent>
      Content Text
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

Replace `'./path-to-this-file'` with the actual path to this file in your project. Replace `'Trigger Text'` and `'Content Text'` with the actual content you want to display in your Accordion.
