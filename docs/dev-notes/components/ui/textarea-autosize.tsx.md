**📄 Source File:** `/components/ui/textarea-autosize.tsx`  
**🕒 Generated:** 2025-06-07 14:00:34 UTC  
**🤖 Model:** gpt-4

---

# TextareaAutosize.tsx

This file is a React component that wraps the `ReactTextareaAutosize` component, providing additional functionality and customization options. The `ReactTextareaAutosize` component is a textarea that automatically adjusts its height to fit its content.

## Exports

This file exports a single component, `TextareaAutosize`.

## Types

The `TextareaAutosizeProps` interface is used to type check the props for the `TextareaAutosize` component. It includes the following properties:

- `value`: The current value of the textarea.
- `onValueChange`: A function that is called when the value of the textarea changes.
- `textareaRef`: A ref object that can be used to interact with the textarea directly.
- `className`: A string that can be used to apply additional CSS classes to the textarea.
- `placeholder`: The placeholder text for the textarea.
- `minRows`: The minimum number of rows that the textarea should have.
- `maxRows`: The maximum number of rows that the textarea should have.
- `maxLength`: The maximum length of the text that can be entered into the textarea.
- `onKeyDown`: A function that is called when a key is pressed down in the textarea.
- `onPaste`: A function that is called when text is pasted into the textarea.
- `onCompositionStart`: A function that is called when the composition of a character sequence is started in the textarea.
- `onCompositionEnd`: A function that is called when the composition of a character sequence is ended in the textarea.

## Usage

The `TextareaAutosize` component can be used in a similar way to a regular textarea, but with additional props for controlling the number of rows and handling various events. For example:

```jsx
<TextareaAutosize
  value={this.state.text}
  onValueChange={this.handleTextChange}
  minRows={3}
  maxRows={10}
/>
```

In this example, the textarea will start with 3 rows and automatically grow to a maximum of 10 rows as text is entered. The `handleTextChange` method will be called whenever the text changes.

## Structure and Nuance

The `TextareaAutosize` component uses the `ReactTextareaAutosize` component from the `react-textarea-autosize` library. This library provides a textarea that automatically adjusts its height to fit its content, which is a common requirement in many applications.

The `cn` function from the `@/lib/utils` module is used to combine the default CSS classes with any additional classes that are passed in through the `className` prop.

The `minRows` and `maxRows` props are used to control the minimum and maximum number of rows that the textarea can have. If `minRows` is greater than `maxRows`, then `minRows` is used as the maximum number of rows. This ensures that the textarea always has at least as many rows as specified by `minRows`.

The `onKeyDown`, `onPaste`, `onCompositionStart`, and `onCompositionEnd` props are used to handle various events. If these props are not provided, then default no-op functions are used. This ensures that the component always has valid functions for these props, avoiding the need to check for their existence before calling them.