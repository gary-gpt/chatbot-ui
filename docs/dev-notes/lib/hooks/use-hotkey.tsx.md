**📄 Source File:** `/lib/hooks/use-hotkey.tsx`  
**🕒 Generated:** 2025-06-07 14:22:38 UTC  
**🤖 Model:** gpt-4

---

# useHotkey.ts

The `useHotkey.ts` file is a custom React hook that allows you to bind a specific keyboard shortcut to a callback function. This hook listens for a keydown event on the window object and triggers the callback function when the user presses a specific key while holding down the `Meta` (Command on Mac, Windows key on Windows) and `Shift` keys.

## Exported Function

### useHotkey

This file exports a single function, `useHotkey`. This function takes two arguments:

- `key`: A string representing the key that the user must press, in combination with the `Meta` and `Shift` keys, to trigger the callback function.
- `callback`: A function that will be called when the user presses the specified key combination.

The `useHotkey` function does not return a value.

## Usage

To use this hook, import it into your component and call it with the desired key and callback function. For example:

```jsx
import useHotkey from './useHotkey'

const MyComponent = () => {
  useHotkey('s', () => {
    console.log('The user pressed Meta+Shift+S')
  })

  return <div>My Component</div>
}
```

In this example, whenever the user presses `Meta+Shift+S`, the message "The user pressed Meta+Shift+S" will be logged to the console.

## Interesting Structure or Nuance

The `useHotkey` function uses the `useEffect` hook from React to add and remove the event listener when the component mounts and unmounts, respectively. This ensures that the event listener is properly cleaned up and prevents potential memory leaks.

The `useEffect` hook also has `key` and `callback` as its dependencies. This means that if the `key` or `callback` changes, the effect will run again, removing the old event listener and adding a new one with the updated `key` or `callback`. This allows the `useHotkey` hook to dynamically update the key combination or callback function during the component's lifecycle.