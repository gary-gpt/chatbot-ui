**📄 Source File:** `/lib/hooks/use-copy-to-clipboard.tsx`  
**🕒 Generated:** 2025-06-07 14:22:22 UTC  
**🤖 Model:** gpt-4

---

# useCopyToClipboard.ts

This TypeScript file provides a custom React hook, `useCopyToClipboard`, which allows you to copy text to the user's clipboard and track the copy status.

## Exports

### `useCopyToClipboardProps`

This is an interface for the properties accepted by the `useCopyToClipboard` function. It has one optional property:

- `timeout`: This is the duration (in milliseconds) for which the `isCopied` state will remain `true` after a successful copy operation. The default value is `2000` (2 seconds).

### `useCopyToClipboard`

This is a custom React hook that provides functionality to copy text to the clipboard and track the copy status. It accepts an object of type `useCopyToClipboardProps` as an argument.

The hook uses the `useState` hook from React to manage a boolean state, `isCopied`, which indicates whether a copy operation has been performed.

The hook returns an object with two properties:

- `isCopied`: A boolean indicating whether a copy operation has been performed.
- `copyToClipboard`: A function that accepts a string value to be copied to the clipboard.

## Usage

To use this hook, import it in your React component and call it with an optional `timeout` value. The `copyToClipboard` function can then be used to copy text to the clipboard, and the `isCopied` state can be used to track the copy status.

```jsx
import { useCopyToClipboard } from './useCopyToClipboard'

function MyComponent() {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 3000 })

  // ...

  return (
    // ...
  )
}
```

## Interesting Structure or Nuance

The `copyToClipboard` function checks if the `window` object and the `navigator.clipboard.writeText` function are available before attempting to copy text to the clipboard. This is to ensure that the function can be safely used in environments where these APIs may not be available, such as server-side rendering.

The function also checks if the value to be copied is truthy before proceeding with the copy operation. This prevents unnecessary operations when the value is falsy (e.g., `null`, `undefined`, or an empty string).

After a successful copy operation, the `isCopied` state is set to `true` and then reset to `false` after the specified `timeout` duration. This allows you to give feedback to the user that a copy operation has been performed, such as displaying a "Copied!" message for a few seconds.