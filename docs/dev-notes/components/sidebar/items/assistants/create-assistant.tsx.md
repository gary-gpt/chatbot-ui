**📄 Source File:** `/components/sidebar/items/assistants/create-assistant.tsx`  
**🕒 Generated:** 2025-06-07 13:39:23 UTC  
**🤖 Model:** gpt-4

---

# CreateAssistant.tsx

This TypeScript file is part of a chatbot UI and is responsible for creating a new assistant. It provides a form for users to input details about the new assistant, such as its name, description, image, chat settings, associated files and collections, and tools. The file uses React and TypeScript, along with various imported components and contexts.

## Exports

The file exports a single component: `CreateAssistant`. This is a functional component that takes in props of type `CreateAssistantProps`.

### CreateAssistantProps

This is an interface that describes the props expected by the `CreateAssistant` component. It includes:

- `isOpen`: a boolean indicating whether the assistant creation form is open.
- `onOpenChange`: a function that takes a boolean and returns void. This function is used to change the state of `isOpen`.

## Functions

### CreateAssistant

This is the main function of the file. It uses the `ChatbotUIContext` to access the user's profile and selected workspace. It also maintains several pieces of state related to the assistant being created, such as its name, description, chat settings, and selected image.

The function includes several helper functions to handle user interactions, such as selecting retrieval items and tools. It also checks whether the selected model is compatible with tools.

The function returns a `SidebarCreateItem` component, which is used to display the assistant creation form. If the user's profile or selected workspace is not available, the function returns null.

## Interesting Structure or Nuance

The `CreateAssistant` function uses the `useContext` hook to access the `ChatbotUIContext`, which provides information about the user's profile and selected workspace. It also uses the `useState` hook to manage several pieces of state related to the assistant being created.

The function includes a `useEffect` hook that updates the assistant's chat settings whenever its name changes. This ensures that the assistant's prompt is always up-to-date.

The function uses the `Tables` and `TablesInsert` types from the `@/supabase/types` module to describe the structure of the assistant's retrieval items and tools. These types are used in the `handleRetrievalItemSelect` and `handleToolSelect` functions, as well as in the `createState` prop of the `SidebarCreateItem` component.

## Usage

This file is likely used in a larger application where users can create and manage chatbot assistants. The `CreateAssistant` component would be rendered when a user wants to create a new assistant, and the `isOpen` and `onOpenChange` props would be controlled by the parent component.