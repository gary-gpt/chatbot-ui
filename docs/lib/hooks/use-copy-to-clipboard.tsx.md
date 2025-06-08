---
source: lib/hooks/use-copy-to-clipboard.tsx
generated: '2025-06-08T13:21:01.647Z'
tags: []
hash: 385305363302b4bdcf1db08698eacd9ff70751fd415f8978e5ce4aa68c02e14c
---
# useCopyToClipboard Hook

The `useCopyToClipboard` hook is a custom React hook that allows you to copy a string to the clipboard and manage the state of whether the copy operation was successful.

## Props

The `useCopyToClipboard` hook accepts an object with the following properties:

### `timeout` (optional)

The `timeout` property is an optional number that specifies the duration (in milliseconds) for which the `isCopied` state remains `true` after a successful copy operation. The default value is `2000` (2 seconds).

## Return Value

The `useCopyToClipboard` hook returns an object with the following properties:

### `isCopied`

The `isCopied` property is a boolean that indicates whether the last copy operation was successful. It remains `true` for the duration specified by the `timeout` prop after a successful copy operation, and then reverts back to `false`.

### `copyToClipboard`

The `copyToClipboard` property is a function that accepts a string as an argument. When invoked, it attempts to copy the provided string to the clipboard. If the copy operation is successful, it sets the `isCopied` state to `true` for the duration specified by the `timeout` prop.

## Usage

```jsx
import { useCopyToClipboard } from './useCopyToClipboard'

const Component = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 3000 })

  return (
    <button onClick={() => copyToClipboard('Hello, world!')}>
      {isCopied ? 'Copied!' : 'Copy to clipboard'}
    </button>
  )
}
```

In the above example, clicking the button copies the string 'Hello, world!' to the clipboard. The button's label changes to 'Copied!' for 3 seconds after a successful copy operation, and then reverts back to 'Copy to clipboard'.
