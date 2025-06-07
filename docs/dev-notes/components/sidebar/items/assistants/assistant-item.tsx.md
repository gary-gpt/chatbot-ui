**📄 Source File:** `/components/sidebar/items/assistants/assistant-item.tsx`  
**🕒 Generated:** 2025-06-07 13:38:29 UTC  
**🤖 Model:** gpt-4

---

# AssistantItem.tsx

This TypeScript file defines and exports a functional component `AssistantItem` that is used to manage and display individual assistant items in a chatbot user interface.

## Imports

The file imports several components, constants, and types from various modules. Notably, it imports `ChatSettingsForm`, `ImagePicker`, `Input`, and `Label` components from the UI components module, `ChatbotUIContext` from the context module, and several types from the `Tables` type in the Supabase types module.

## Interface

The `AssistantItemProps` interface is defined to type the `assistant` prop that the `AssistantItem` component receives. The `assistant` prop is of type `Tables<"assistants">`.

## Component

The `AssistantItem` component is a functional component that receives `assistant` as a prop. It uses several hooks to manage state and effects. The component uses the `ChatbotUIContext` to access the `selectedWorkspace` and `assistantImages`.

The component defines several state variables and functions to handle file, collection, and tool selection. It also defines an effect to set the `imageLink` state variable based on the `assistant` and `assistantImages` variables.

The component returns a `SidebarItem` component with several props and children. If the `profile` or `selectedWorkspace` is not available, it returns `null`.

## Functions

The file defines several functions to handle file, collection, and tool selection. These functions update the respective state variables based on whether the selected item is already in the state or not.

## Exports

The file exports the `AssistantItem` component.

## Usage

The `AssistantItem` component is likely used in a parent component that manages multiple assistant items. The parent component would map over an array of assistant data and render an `AssistantItem` component for each assistant.

## Structure and Nuance

The `AssistantItem` component is structured to handle its own state and effects, making it a self-contained component that can be used in various contexts. It uses the context API to access global state and uses local state for state that is specific to the component.

The component uses the `Tables` type from the Supabase types module to type its props and state, which suggests that the data it manages is stored in a Supabase database.

The component also uses several other components to build its UI, including `SidebarItem`, `ChatSettingsForm`, `ImagePicker`, `Input`, `Label`, `AssistantRetrievalSelect`, and `AssistantToolSelect`. This suggests that the component is part of a larger UI library or framework.