---
source: components/ui/chat-settings-form.tsx
generated: 2025-06-08T21:58:25.968Z
tags: []
hash: 9ca375c9367f40fcc05d4f49b490d71db8bdd5243a382e8962ee54dc22f66f28
---

# Chat Settings Form Component

This document explains the purpose and logic of the `ChatSettingsForm` component in the file `/Users/garymason/chatbot-ui/components/ui/chat-settings-form.tsx`.

## Overview

The `ChatSettingsForm` component is a form used to manage the settings of a chatbot. It allows users to select a model, set a prompt, and adjust advanced settings like temperature, context length, and whether to include profile context and workspace instructions.

## Imports

The component imports several dependencies, including:

- `ChatbotUIContext`: A React context object that provides access to the current state of the chatbot UI.
- `CHAT_SETTING_LIMITS`: A constant that defines the limits for various chat settings.
- `ChatSettings`: A TypeScript interface that describes the shape of a chat settings object.
- Several components used in the form, such as `ModelSelect`, `AdvancedSettings`, `Checkbox`, `Label`, `Select`, `Slider`, `TextareaAutosize`, and `WithTooltip`.

## Component Props

The `ChatSettingsForm` component accepts the following props:

- `chatSettings`: An object containing the current chat settings.
- `onChangeChatSettings`: A function that is called when the chat settings change.
- `useAdvancedDropdown`: A boolean indicating whether to use a dropdown for advanced settings. Defaults to `true`.
- `showTooltip`: A boolean indicating whether to show tooltips. Defaults to `true`.

## Component Logic

The component uses the `ChatbotUIContext` to access the current profile and models. If no profile is present, the component returns `null`.

The form is divided into several sections:

- **Model Selection**: The user can select a model from a dropdown. When a model is selected, the `onChangeChatSettings` function is called with the updated chat settings.
- **Prompt Input**: The user can input a prompt. When the prompt changes, the `onChangeChatSettings` function is called with the updated chat settings.
- **Advanced Settings**: If `useAdvancedDropdown` is `true`, the advanced settings are displayed in a dropdown. Otherwise, they are displayed directly in the form. The advanced settings include sliders for temperature and context length, checkboxes for including profile context and workspace instructions, and a dropdown for selecting an embeddings provider.

## Advanced Settings

The `AdvancedContent` component is used to display the advanced settings. It accepts the same props as `ChatSettingsForm`.

The component uses the `ChatbotUIContext` to access the current profile, selected workspace, available open router models, and models. It also determines whether the selected model is a custom model.

The component uses the `CHAT_SETTING_LIMITS` constant to get the limits for the selected model. If no limits are defined for the model, it uses default values.

The sliders for temperature and context length use the model limits as their min and max values. When the values of the sliders change, the `onChangeChatSettings` function is called with the updated chat settings.

The checkboxes for including profile context and workspace instructions call the `onChangeChatSettings` function with the updated chat settings when their checked state changes.

The embeddings provider dropdown allows the user to select between "openai" and "local". When the selected value changes, the `onChangeChatSettings` function is called with the updated chat settings.