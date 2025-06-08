# Toast Component Documentation

This file contains the implementation of a toast notification system, inspired by the `react-hot-toast` library. It exports two main functions: `useToast` and `toast`.

## Constants

- `TOAST_LIMIT`: The maximum number of toasts that can be displayed at a time.
- `TOAST_REMOVE_DELAY`: The delay (in milliseconds) before a toast is automatically removed.

## Types

- `ToasterToast`: An object representing a toast notification. It extends the `ToastProps` type and includes an `id`, `title`, `description`, and `action`.

- `ActionType`: An object representing the different types of actions that can be performed on a toast. These include `ADD_TOAST`, `UPDATE_TOAST`, `DISMISS_TOAST`, and `REMOVE_TOAST`.

- `Action`: A union type representing the different actions that can be dispatched to the reducer. Each action includes a `type` and may include a `toast` or `toastId`.

- `State`: An object representing the state of the toast system. It includes an array of `ToasterToast` objects.

## Functions

- `genId`: Generates a unique ID for each toast.

- `addToRemoveQueue`: Adds a toast to the removal queue, which will remove the toast after a delay.

- `reducer`: A reducer function that updates the state based on the dispatched action.

- `dispatch`: Dispatches an action to the reducer and updates the state.

- `toast`: Creates a new toast notification and returns an object with the `id`, `dismiss`, and `update` functions.

- `useToast`: A custom React hook that provides the current state of the toast system and functions to create and dismiss toasts.

## Usage

To use the `useToast` hook in a component:

```jsx
import { useToast } from './toast';

function MyComponent() {
  const { toast, dismiss } = useToast();

  // To create a toast
  const newToast = toast({ title: 'Hello, world!' });

  // To dismiss a toast
  dismiss(newToast.id);
}
```

To use the `toast` function directly:

```jsx
import { toast } from './toast';

// To create a toast
const newToast = toast({ title: 'Hello, world!' });

// To dismiss a toast
newToast.dismiss();
```

## Note

This toast system uses a memory state and listeners to update the state. When the state changes, all listeners are notified and update their state accordingly. This allows multiple components to use the `useToast` hook and stay in sync with the global toast state.