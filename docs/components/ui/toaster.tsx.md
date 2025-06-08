---
source: components/ui/toaster.tsx
generated: '2025-06-08T13:21:01.644Z'
tags: []
hash: 18fddb907082698393718136c520d7d9121d18e6f5b65a6d5003e37399a76261
---
# Toaster Component

The `Toaster` component is a part of the UI that handles the display of toast notifications in the application. It uses the `ToastProvider` to wrap all the toast notifications and the `ToastViewport` to display them.

## Importing

```javascript
import { Toaster } from "@/components/ui/toast"
```

## Usage

```javascript
<Toaster />
```

## Component Details

This component uses the `useToast` hook to fetch the list of toasts to be displayed. Each toast is a `Toast` component that has a unique `id`, `title`, `description`, and `action`. The `Toast` component also accepts additional props.

### Toast Component

Each toast notification is wrapped in a `Toast` component. The `Toast` component has the following sub-components:

- `ToastTitle`: This component displays the title of the toast notification. It is only displayed if the `title` prop is provided.
- `ToastDescription`: This component displays the description of the toast notification. It is only displayed if the `description` prop is provided.
- `ToastClose`: This component displays a close button for the toast notification.

All the sub-components are wrapped in a `div` with a grid layout and a gap of 1.

### ToastProvider

The `ToastProvider` wraps all the toast notifications. It is responsible for managing the state of the toasts.

### ToastViewport

The `ToastViewport` is the component where the toast notifications are displayed.

## Props

The `Toaster` component does not accept any props. However, the `Toast` component accepts the following props:

- `id`: A unique identifier for the toast notification.
- `title`: The title of the toast notification.
- `description`: The description of the toast notification.
- `action`: An action to be performed when the toast notification is clicked.
- `...props`: Additional props to be passed to the `Toast` component.
