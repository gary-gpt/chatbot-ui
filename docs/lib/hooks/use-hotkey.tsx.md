---
source: lib/hooks/use-hotkey.tsx
generated: '2025-06-08T13:21:01.647Z'
tags: []
hash: f949b947160c07d2fd7f1153c53bf43103e427a1e31a8b36fc37313f85ff4b0d
---
# useHotkey Hook

This module exports a custom React Hook called `useHotkey`.

## Function Signature

```typescript
const useHotkey = (key: string, callback: () => void): void
```

## Parameters

- `key` (string): The key combination that will trigger the callback function. This should be a string representing a keyboard key. For example, "a" for the 'A' key, "b" for the 'B' key, etc.

- `callback` (function): The function that will be executed when the specified key combination is pressed. This function should not return anything.

## Description

The `useHotkey` hook listens for a specific key combination to be pressed and then executes a callback function when that key combination is detected. The key combination is defined as the Meta key (commonly known as the Command key on macOS or the Windows key on Windows) and the Shift key, in addition to the key specified by the `key` parameter.

The hook uses the `useEffect` hook from React to set up an event listener on the `window` object when the component mounts. This event listener listens for the "keydown" event. When a "keydown" event occurs, the event listener checks if the Meta key, the Shift key, and the specified key are all pressed at the same time. If they are, it prevents the default action for the keydown event and then executes the callback function.

When the component unmounts, the `useEffect` hook removes the event listener from the `window` object.

## Example

```javascript
import useHotkey from './useHotkey';

function ExampleComponent() {
  useHotkey('a', () => {
    console.log('Hotkey activated');
  });

  return <div>Press Cmd+Shift+A</div>;
}
```

In this example, the `useHotkey` hook is used in a component called `ExampleComponent`. When the user presses the Meta key, the Shift key, and the 'A' key at the same time, the message "Hotkey activated" is logged to the console.
