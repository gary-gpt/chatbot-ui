---
source: components/ui/textarea-autosize.tsx
generated: 2025-06-08T22:10:43.480Z
tags: []
hash: 956ef8d41dbfe937fe58c1516d18c41ebafa4b99b462e737574a29bf5bc75deb
---

# Textarea Autosize Component Documentation

This file is located at `/Users/garymason/chatbot-ui/components/ui/textarea-autosize.tsx` and it contains a single React functional component named `TextareaAutosize`. This component uses the `react-textarea-autosize` package to create a textarea input field that automatically adjusts its height based on the content.

## Interface: TextareaAutosizeProps

`TextareaAutosizeProps` is the interface for the props of `TextareaAutosize` component. It includes the following properties:

- `value`: The current value of the textarea.
- `onValueChange`: A function that is called when the value of the textarea changes.
- `textareaRef`: A ref object that can be used to access the textarea element directly.
- `className`: Additional CSS classes that can be added to the textarea.
- `placeholder`: Placeholder text for the textarea.
- `minRows`: The minimum number of rows the textarea should have.
- `maxRows`: The maximum number of rows the textarea can have.
- `maxLength`: The maximum length of the text that can be entered into the textarea.
- `onKeyDown`: A function that is called when a key is pressed down in the textarea.
- `onPaste`: A function that is called when text is pasted into the textarea.
- `onCompositionStart`: A function that is called when the composition of a character sequence has started.
- `onCompositionEnd`: A function that is called when the composition of a character sequence has ended.

## Component: TextareaAutosize

`TextareaAutosize` is a functional component that renders a textarea input field. It uses the `ReactTextareaAutosize` component from the `react-textarea-autosize` package to create a textarea that automatically adjusts its height based on the content.

The component uses the `cn` function from the `@/lib/utils` module to combine the default CSS classes with any additional classes that are passed in through the `className` prop.

The `minRows` and `maxRows` props are used to set the minimum and maximum number of rows for the textarea. If `minRows` is greater than `maxRows`, then `minRows` is used as the maximum number of rows.

The `placeholder`, `value`, `maxLength`, `onKeyDown`, `onPaste`, `onCompositionStart`, and `onCompositionEnd` props are passed directly to the `ReactTextareaAutosize` component.

The `onValueChange` prop is used as the `onChange` handler for the `ReactTextareaAutosize` component. It is called with the new value of the textarea whenever it changes.

```ts
export const TextareaAutosize: FC<TextareaAutosizeProps> = ({
  value,
  onValueChange,
  textareaRef,
  className,
  placeholder = "",
  minRows = 1,
  maxRows = 6,
  maxLength,
  onKeyDown = () => {},
  onPaste = () => {},
  onCompositionStart = () => {},
  onCompositionEnd = () => {}
}) => {
  // Component logic here
}
```

The `TextareaAutosize` component is exported as a named export from this module.