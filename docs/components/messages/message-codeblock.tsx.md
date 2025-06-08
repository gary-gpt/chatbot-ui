---
source: components/messages/message-codeblock.tsx
generated: '2025-06-08T13:21:01.635Z'
tags: []
hash: 352b69d4610ff75993d5f7306d45a341038e735f16a498eed27428a8a14b2767
---
# MessageCodeBlock Component

This is a React component that displays a block of code with syntax highlighting and provides options to copy the code to clipboard or download it as a file.

## Importing

```javascript
import { MessageCodeBlock } from "path/to/component"
```

## Props

| Prop     | Type   | Description                                        |
|----------|--------|----------------------------------------------------|
| language | string | The programming language of the code block.        |
| value    | string | The code to be displayed in the code block.        |

## Usage

```jsx
<MessageCodeBlock language="javascript" value="console.log('Hello, world!');" />
```

This will render a block of JavaScript code with syntax highlighting. The block will have a button to copy the code to clipboard and another button to download the code as a file.

## Dependencies

This component uses the following external packages:

- `@tabler/icons-react` for icons.
- `react-syntax-highlighter` for syntax highlighting.

## Helper Functions

- `generateRandomString(length: number, lowercase: boolean)`: Generates a random string of specified length. If `lowercase` is `true`, the string will be in lowercase.

## Constants

- `programmingLanguages`: An object mapping programming language names to their file extensions.

## Hooks

- `useCopyToClipboard({ timeout: number })`: A custom hook that provides functionality to copy text to clipboard. It returns an object with `isCopied` (a boolean indicating whether the text has been copied) and `copyToClipboard` (a function to copy text to clipboard). The `timeout` parameter specifies the duration for which `isCopied` remains `true` after `copyToClipboard` is called.

## Styling

This component uses Tailwind CSS for styling.
