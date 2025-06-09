---
source: components/models/model-select.tsx
generated: 2025-06-08T21:37:28.068Z
tags: []
hash: 2953c503bd384b40918f3ad0f108f1f9a0f95131631da2bbd25e2d2d6735f41b
---

# Model Select Component Documentation

This document explains the purpose and logic of the `ModelSelect` component in the `model-select.tsx` file located at `/Users/garymason/chatbot-ui/components/models/`.

## Overview

The `ModelSelect` component is a functional component that provides an interface for selecting a model from a list of available models. The models can be filtered by provider and searched by name.

## Imports

The component imports several hooks and components from React and other libraries. It also imports several types and context from the application's own modules.

## Component Props

The `ModelSelect` component accepts two props:

- `selectedModelId`: The ID of the currently selected model.
- `onSelectModel`: A callback function that is called when a model is selected.

## Component State

The component maintains several pieces of state:

- `isOpen`: A boolean indicating whether the dropdown is open.
- `search`: A string for the current search query.
- `tab`: A string indicating the currently selected tab ("hosted" or "local").

## Component Logic

The component retrieves the current profile and available models from the `ChatbotUIContext`. It then groups the models by provider and finds the currently selected model.

When the dropdown is open, the input field is automatically focused. This is achieved using the `useEffect` hook and a `ref` to the input field.

When a model is selected, the `onSelectModel` callback is passed the selected model's ID, and the dropdown is closed.

## Component Rendering

The component returns a `DropdownMenu` component, which includes a trigger and content. The trigger is a button that displays the currently selected model, or a prompt to select a model if none is selected. The content includes tabs to switch between hosted and local models, an input field for searching models, and a list of models grouped by provider.

Each model in the list is wrapped in a `ModelOption` component. If a model is the currently selected model, a check icon is displayed next to it.

If no models are available, a message is displayed prompting the user to unlock models by entering API keys in their profile settings.

## Code Structure

The code is structured in a standard way for a React functional component. It begins with the import statements, followed by the component's prop types, the component function itself, and then the component's logic and rendering.