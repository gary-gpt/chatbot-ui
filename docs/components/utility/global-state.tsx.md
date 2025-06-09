---
source: components/utility/global-state.tsx
generated: 2025-06-08T22:15:25.990Z
tags: []
hash: fd913a489faab8dc2a77892c69b99e5e8bd61392d65cde4c11e3fb6c8b542532
---

# GlobalState Component Documentation

This document provides an overview of the `GlobalState` component located at `/Users/garymason/chatbot-ui/components/utility/global-state.tsx`. This component is a part of a chatbot UI and is responsible for managing the global state of the application.

## Table of Contents

- [Imports](#imports)
- [GlobalStateProps Interface](#globalstateprops-interface)
- [GlobalState Component](#globalstate-component)
  - [State Variables](#state-variables)
  - [UseEffect Hook](#useeffect-hook)
  - [FetchStartingData Function](#fetchstartingdata-function)
  - [Context Provider](#context-provider)

## Imports

The file imports several modules and components, including:

- `ChatbotUIContext` from the context directory, which provides the context for the chatbot UI.
- Several database functions to fetch user profile and workspace data.
- A function to convert Blob to Base64.
- Functions to fetch different types of models.
- The `supabase` client for browser.
- Several types from the types directory.
- The `useRouter` hook from Next.js for routing.
- The `FC` (Function Component) type, `useEffect`, and `useState` hooks from React.

## GlobalStateProps Interface

This interface defines the props for the `GlobalState` component. It includes a single prop `children` of type `React.ReactNode`, which represents the child components to be rendered.

## GlobalState Component

The `GlobalState` component is a functional component that takes `GlobalStateProps` as props. It uses the `useRouter` hook to access the Next.js router.

### State Variables

The component defines a large number of state variables using the `useState` hook. These variables store various pieces of data related to the chatbot UI, including:

- User profile data
- Data for various items such as assistants, collections, chats, files, folders, models, presets, prompts, tools, and workspaces
- Data for various models
- Workspace data
- Preset data
- Assistant data
- Chat data
- Active chat data
- Chat input command data
- Attachment data
- Retrieval data
- Tool data

### UseEffect Hook

The `useEffect` hook is used to fetch starting data and set the state variables when the component mounts. It fetches the user's profile, hosted models, open router models, and local models, and sets the corresponding state variables.

### FetchStartingData Function

This async function fetches the starting data for the user. It gets the user's session, fetches the user's profile and workspaces, and sets the corresponding state variables. If the user has not onboarded, it redirects them to the setup page.

### Context Provider

The component returns a `ChatbotUIContext.Provider` that provides the state variables and their setters to the child components. This allows the child components to access and modify the global state.

## Conclusion

The `GlobalState` component is a crucial part of the chatbot UI, managing the global state of the application. It fetches the necessary data when the component mounts and provides the state to the child components through context.