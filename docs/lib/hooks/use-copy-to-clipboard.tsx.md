---
source: lib/hooks/use-copy-to-clipboard.tsx
generated: 2025-06-08T22:31:57.800Z
tags: []
hash: 6fa3fd386a03bb6cbbb84e989b4fcad8ee52ffc6acca98a816d1de1a45ca74b1
---

# Documentation for useCopyToClipboard Hook

This document provides an overview of the `useCopyToClipboard` hook located in the file `/Users/garymason/chatbot-ui/lib/hooks/use-copy-to-clipboard.tsx`.

## Summary

The `useCopyToClipboard` hook is a custom React hook that allows you to copy a string value to the clipboard. It also provides a state variable `isCopied` that indicates whether a value has been copied to the clipboard.

## Interface: useCopyToClipboardProps

```ts
export interface useCopyToClipboardProps {
  timeout?: number
}
```

This interface defines the properties that can be passed to the `useCopyToClipboard` hook. Currently, it only contains an optional `timeout` property. This property specifies the duration (in milliseconds) for which the `isCopied` state remains `true` after a value has been copied to the clipboard. The default value is 2000 milliseconds (or 2 seconds).

## Function: useCopyToClipboard

```ts
export function useCopyToClipboard({
  timeout = 2000
}: useCopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState<Boolean>(false)

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
      return
    }

    if (!value) {
      return
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, timeout)
    })
  }

  return { isCopied, copyToClipboard }
}
```

This is the main function of the hook. It takes an object of `useCopyToClipboardProps` as an argument and returns an object with two properties: `isCopied` and `copyToClipboard`.

- `isCopied`: A state variable that is `true` if a value has been copied to the clipboard and `false` otherwise.

- `copyToClipboard`: A function that takes a string value as an argument and copies it to the clipboard. If the `window` object is undefined or the `navigator.clipboard.writeText` method is not available, the function returns without doing anything. If the value is empty, the function also returns without doing anything. After successfully copying the value to the clipboard, the function sets `isCopied` to `true` and then sets it back to `false` after the specified `timeout` duration.