---
source: components/utility/command-k.tsx
generated: 2025-06-08T22:14:40.732Z
tags: []
hash: 7567d354fe16f6c6d15bdcd140b2daa2ed877ecadd19e1f3982b919712ab774a
---

# CommandK Component Documentation

This file is located at `/Users/garymason/chatbot-ui/components/utility/command-k.tsx`. It is a TypeScript (`.tsx`) file, which means it is a React component written in TypeScript.

## Overview

The `CommandK` component is a dialog box that opens when the user presses the 'k' key. It allows the user to input commands and send them to an API endpoint for processing. The dialog box also displays the results of the command execution.

## Imports

The component imports several hooks and components from different libraries and local files. These include:

- `ChatbotUIContext` from "@/context/context"
- `useHotkey` from "@/lib/hooks/use-hotkey"
- `IconLoader2` and `IconSend` from "@tabler/icons-react"
- `FC`, `useContext`, and `useState` from "react"
- `Dialog` and `DialogContent` from "../ui/dialog"
- `TextareaAutosize` from "../ui/textarea-autosize"

## Props

The `CommandK` component does not take any props.

## State Variables

The component uses several state variables:

- `isOpen`: A boolean that determines whether the dialog box is open or not.
- `value`: The current value of the text input field in the dialog box.
- `loading`: A boolean that indicates whether the component is currently waiting for a response from the API.
- `content`: The content returned from the API.

## Functions

### `handleCommandK`

This asynchronous function is triggered when the user hits the 'Enter' key in the text input field. It sends a POST request to the "/api/command" endpoint with the current value of the text input field. The response from the API is then stored in the `content` state variable.

### `handleKeyDown`

This function is triggered when a key is pressed in the text input field. If the 'Enter' key is pressed without the 'Shift' key, it prevents the default action and calls the `handleCommandK` function.

## Render

The component returns null if there is no profile in the `ChatbotUIContext`. Otherwise, it returns a `Dialog` component that contains a `DialogContent` component. The `DialogContent` component contains a `TextareaAutosize` component for user input and either an `IconLoader2` or `IconSend` component depending on the state of the `loading` variable.

If the profile has an `openai_api_key`, the component displays a list of commands and a text input field. If not, it displays a message instructing the user to add their OpenAI API key in the settings.

```ts
if (!profile) return null

return (
  isOpen && (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent onKeyDown={handleKeyDown}>
        {profile.openai_api_key ? (
          // Display list of commands and text input field
        ) : (
          <div>Add your OpenAI API key in the settings to unlock CMD+K.</div>
        )}
      </DialogContent>
    </Dialog>
  )
)
```

## Hotkey

The `useHotkey` hook is used to toggle the `isOpen` state variable when the 'k' key is pressed. This opens and closes the dialog box.

```ts
useHotkey("k", () => setIsOpen(prevState => !prevState))
```