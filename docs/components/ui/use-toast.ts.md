---
source: components/ui/use-toast.ts
generated: 2025-06-08T22:12:54.015Z
tags: []
hash: 604be2f659994b62825a54b918f2fd5be996fcc6f55b55bc99071cc6b82aac47
---

# useToast.ts Documentation

This file contains the implementation of a custom React hook named `useToast`. This hook is used to manage toast notifications in a React application. The toast notifications are managed in a queue, with a limit of one toast at a time and a delay for automatic removal.

## Table of Contents

- [Type Definitions](#type-definitions)
- [Constants and Variables](#constants-and-variables)
- [Functions](#functions)
- [Exported Functions](#exported-functions)

## Type Definitions

- `ToasterToast`: This type extends the `ToastProps` type and adds additional properties like `id`, `title`, `description`, and `action`.

- `ActionType`: This type is derived from the `actionTypes` object.

- `Action`: This type is a union of different possible action objects.

- `State`: This interface represents the state of the toast system, which is an array of `ToasterToast` objects.

## Constants and Variables

- `TOAST_LIMIT`: This constant sets the maximum number of toasts that can be displayed at once.

- `TOAST_REMOVE_DELAY`: This constant sets the delay (in milliseconds) before a toast is automatically removed.

- `actionTypes`: This object defines the types of actions that can be dispatched to the toast system.

- `toastTimeouts`: This `Map` object stores the timeout IDs for each toast, keyed by the toast's ID.

## Functions

- `genId()`: This function generates a unique ID for each toast.

- `addToRemoveQueue(toastId: string)`: This function adds a toast to the removal queue.

- `reducer(state: State, action: Action)`: This function is the reducer for the toast system. It handles the different types of actions that can be dispatched.

- `dispatch(action: Action)`: This function dispatches an action to the toast system.

- `toast({ ...props }: Toast)`: This function creates a new toast and dispatches an `ADD_TOAST` action.

## Exported Functions

- `useToast()`: This is the main function exported from this file. It's a custom React hook that provides the state and functions needed to manage toast notifications.

- `toast`: This function is also exported for direct use in components.

## Code Summaries

- The `useToast` hook maintains a state of toasts and provides a function to add new toasts. It uses a reducer pattern to manage the state updates.

- The `reducer` function handles four types of actions: `ADD_TOAST`, `UPDATE_TOAST`, `DISMISS_TOAST`, and `REMOVE_TOAST`.

- The `toast` function creates a new toast with a unique ID and dispatches an `ADD_TOAST` action.

- The `addToRemoveQueue` function sets a timeout to automatically remove a toast after a certain delay.

- The `dispatch` function applies the reducer to the current state and the dispatched action, then updates the state and notifies all listeners.

- The `genId` function generates a unique ID for each new toast.