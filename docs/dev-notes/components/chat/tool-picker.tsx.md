**📄 Source File:** `/components/chat/tool-picker.tsx`  
**🕒 Generated:** 2025-06-07 13:32:22 UTC  
**🤖 Model:** gpt-4

---

# ToolPicker.tsx

The `ToolPicker.tsx` file is a React component that provides a user interface for selecting a tool from a list of available tools. The tools are filtered based on a command input, and the tool picker can be opened and closed. The component also handles keyboard events for navigation and selection of tools.

## Exports

The file exports a single component, `ToolPicker`, which is a function component that takes no props.

## Functions and Types

### `ToolPicker`

This is the main and only exported component from this file. It uses the `ChatbotUIContext` to get the current state and functions related to the tool picker. It also uses the `usePromptAndCommand` hook to get the `handleSelectTool` function.

The component uses a `useEffect` hook to focus on the first tool when the `focusTool` changes. It also filters the tools based on the `toolCommand` and handles opening and closing of the tool picker.

The component also defines a `callSelectTool` function that calls `handleSelectTool` and closes the tool picker, and a `getKeyDownHandler` function that handles keyboard events for navigation and selection of tools.

The component returns a JSX element that renders the tool picker if it's open. If there are no matching tools, it displays a message. Otherwise, it maps over the filtered tools and renders a div for each tool with an `onClick` handler that calls `callSelectTool` and an `onKeyDown` handler that calls `getKeyDownHandler`.

### `ToolPickerProps`

This is an empty interface used as the type for the props of the `ToolPicker` component. This indicates that the component doesn't take any props.

## Usage

The `ToolPicker` component is likely used in a larger component or page that includes a chatbot UI. It would be used alongside other components that use the `ChatbotUIContext`, and it would be responsible for rendering the tool picker part of the UI.

## Interesting Structure or Nuance

The component uses a `useRef` hook to store a reference to each tool div. This is used in the `useEffect` hook to focus on the first tool and in the `getKeyDownHandler` function to navigate between tools.

The `getKeyDownHandler` function is a higher-order function that returns a function that handles a keyboard event. It uses the index of the tool to determine how to handle the event. For example, if the "Enter" key is pressed, it calls `callSelectTool` with the tool at the current index. If the "ArrowDown" key is pressed, it focuses on the next tool, or the first tool if the current tool is the last one.