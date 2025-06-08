---
source: components/utility/command-k.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 0d16a147fe447ce631b4a3e4b2587b251790d05f64027ac49c02aa4270f554dd
---
# CommandK Component

This is a documentation for the `CommandK` component in React.

## Import Statements

```jsx
import { ChatbotUIContext } from "@/context/context"
import useHotkey from "@/lib/hooks/use-hotkey"
import { IconLoader2, IconSend } from "@tabler/icons-react"
import { FC, useContext, useState } from "react"
import { Dialog, DialogContent } from "../ui/dialog"
import { TextareaAutosize } from "../ui/textarea-autosize"
```

## Props

The `CommandK` component does not accept any props:

```jsx
interface CommandKProps {}
```

## Component Functionality

The `CommandK` component is a functional component that uses the `ChatbotUIContext` to get the user's profile. It also defines several state variables:

- `isOpen`: Boolean state to control the visibility of the dialog.
- `value`: State to hold the value of the input.
- `loading`: Boolean state to control the loading state.
- `content`: State to hold the content received from the API.

The component also defines a hotkey "k" to toggle the visibility of the dialog.

The `handleCommandK` function is an async function that makes a POST request to the "/api/command" endpoint with the current value of the input as the body. It then sets the content state with the received data, resets the value state and sets the loading state to false.

The `handleKeyDown` function is used to trigger the `handleCommandK` function when the Enter key is pressed without the Shift key.

The component returns a `Dialog` component that contains a `DialogContent` and a `TextareaAutosize` for user input. If the `loading` state is true, it displays a loading icon, otherwise, it displays a send icon. If the user's profile does not have an OpenAI API key, it prompts the user to add it in the settings.

## Usage

```jsx
<CommandK />
```

This component does not accept any props.
