---
source: lib/hooks/use-hotkey.tsx
generated: 2025-06-08T22:32:17.361Z
tags: []
hash: 8cd78b8be8f6d89203e9ac5de0c70b3c121ab355a27abf5ab40c122c018ecd55
---

# Documentation for useHotkey Hook

This document provides an overview of the `useHotkey` hook located at `/Users/garymason/chatbot-ui/lib/hooks/use-hotkey.tsx`. This hook is a custom React hook that allows you to assign a callback function to a specific keyboard shortcut.

## Code Overview

```ts
import { useEffect } from "react"

const useHotkey = (key: string, callback: () => void): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.metaKey && event.shiftKey && event.key === key) {
        event.preventDefault()
        callback()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [key, callback])
}

export default useHotkey
```

## Function: useHotkey

The `useHotkey` function is a custom React hook that takes two parameters: a `key` of type `string` and a `callback` function. This hook sets up a keyboard event listener that triggers the provided callback function when the user presses the specified key while holding down both the meta key (commonly the command key on Mac or the Windows key on Windows) and the shift key.

### Parameters

- `key` (string): The key that, when pressed in combination with the meta key and the shift key, will trigger the callback function.
- `callback` (function): The function that will be called when the specified key combination is pressed.

### Usage

The `useHotkey` hook is used inside a React component. When the component mounts, an event listener is added to the window object that listens for `keydown` events. If the event's `key` matches the `key` parameter and both the meta key and the shift key are being pressed, the event's default behavior is prevented and the callback function is executed.

When the component unmounts, the event listener is removed from the window object, preventing memory leaks.

### Example

```ts
import useHotkey from './hooks/use-hotkey'

const MyComponent = () => {
  useHotkey('s', () => {
    console.log('You pressed Meta+Shift+S!')
  })

  return <div>Press Meta+Shift+S to see a message in the console.</div>
}
```

In this example, the `useHotkey` hook is used in the `MyComponent` component to log a message to the console when the user presses Meta+Shift+S.