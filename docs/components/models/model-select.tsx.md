---
source: components/models/model-select.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 2673c9499d3723d7e39fe0b4cf4a328419823bba731719bcc84a2e13d95f76dd
---
# ModelSelect Component

The `ModelSelect` component is a functional component that allows users to select a model from a dropdown menu. The dropdown menu includes a search bar for filtering models and tabs for switching between hosted and local models.

## Props

The component accepts the following props:

- `selectedModelId`: A string representing the ID of the currently selected model.
- `onSelectModel`: A function that is called when a model is selected. It takes the ID of the selected model as its argument.

## Context

The component uses the `ChatbotUIContext` to access the following data:

- `profile`: The user's profile information.
- `models`: An array of the user's models.
- `availableHostedModels`: An array of available hosted models.
- `availableLocalModels`: An array of available local models.
- `availableOpenRouterModels`: An array of available open router models.

## State

The component maintains the following state variables:

- `isOpen`: A boolean indicating whether the dropdown menu is open.
- `search`: A string representing the current search term.
- `tab`: A string representing the current tab ("hosted" or "local").

## Functionality

When the dropdown menu is opened, the search input is automatically focused. When a model is selected, the `onSelectModel` function is called with the ID of the selected model, and the dropdown menu is closed.

The component groups all models by their provider and filters them based on the current tab and search term. If no models match the filter, the dropdown menu displays a message instructing the user to enter API keys in their profile settings.

Each model option in the dropdown menu displays the model's name and an icon representing its provider. The currently selected model is indicated with a check icon.

## Styling

The component uses Tailwind CSS for styling. The dropdown menu trigger is a button with a "ghost" variant, and the dropdown menu content includes space between elements, an overflow scroll, and a width matching the trigger's width. The search input is full width, and the model options are displayed in a flex container with space between items.
