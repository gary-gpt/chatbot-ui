---
source: components/ui/alert.tsx
generated: '2025-06-08T13:21:01.639Z'
tags: []
hash: 3e67d40d6b0ed487fe8cea2f5d212eefc6283578b59049b489aebd49bdd8726f
---
# Alert Component Documentation

This file exports three main components: `Alert`, `AlertTitle`, and `AlertDescription`. These components are used to display alert messages to the user.

## Alert

The `Alert` component is a wrapper for an alert message. It accepts all standard HTML div attributes as well as a `variant` prop for styling.

### Props

- `className` (string): Applies custom class names to the component.
- `variant` (string): Determines the style of the alert. Options include `default` and `destructive`.

## AlertTitle

The `AlertTitle` component is used to display the title of an alert message. It accepts all standard HTML heading attributes.

### Props

- `className` (string): Applies custom class names to the component.

## AlertDescription

The `AlertDescription` component is used to display the description of an alert message. It accepts all standard HTML paragraph attributes.

### Props

- `className` (string): Applies custom class names to the component.

## Usage

```jsx
import { Alert, AlertTitle, AlertDescription } from './Alert';

function Example() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
    </Alert>
  );
}
```

In this example, an alert with a destructive variant is displayed. The alert contains a title and a description.
