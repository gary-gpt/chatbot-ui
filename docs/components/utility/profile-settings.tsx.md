---
source: components/utility/profile-settings.tsx
generated: 2025-06-08T22:16:20.424Z
tags: []
hash: b5fe68f0cda7f63ec3798a8699ff0b2f95abdcfa10e19b4395289e9820513ffa
---

# Profile Settings Component

This document explains the purpose and logic of the `ProfileSettings` component in the file `/Users/garymason/chatbot-ui/components/utility/profile-settings.tsx`.

## Overview

The `ProfileSettings` component is a functional component that provides a user interface for managing user profile settings in a chatbot application. It allows users to update their profile information, including their username, profile image, chat display name, and AI instructions. It also provides an interface for managing API keys for various AI services.

## Imports

The component imports various hooks, components, utilities, and constants from different libraries and modules. These include:

- `ChatbotUIContext` from the context module, which provides access to the global state and actions of the application.
- Constants from the `limits` module, which define the maximum lengths for various profile fields.
- Database functions from the `profile` and `profile-images` modules, which are used to update the user's profile and upload profile images.
- Utility functions from the `export-old-data` and `fetch-models` modules, which are used to export old data and fetch models.
- The `LLM_LIST_MAP` constant from the `llm-list` module, which maps providers to their models.
- The `supabase` client from the `browser-client` module, which is used to interact with the Supabase database.
- The `cn` utility function from the `utils` module, which is used to conditionally join class names.
- Various icons from the `@tabler/icons-react` library, which are used in the user interface.
- The `Image` component from the `next/image` library, which is used to display images.
- The `useRouter` hook from the `next/navigation` library, which is used to navigate between pages.
- The `FC` type and `useCallback`, `useContext`, `useRef`, and `useState` hooks from the `react` library, which are used to define the component and manage its state and side effects.
- The `toast` function from the `sonner` library, which is used to display toast notifications.
- The `SIDEBAR_ICON_SIZE` constant from the `sidebar-switcher` module, which defines the size of the sidebar icons.
- Various components from the `ui` module, which are used in the user interface.
- The `ThemeSwitcher` component from the current module, which is used to switch between different themes.

## Component Definition

The `ProfileSettings` component is defined as a functional component that takes no props. It uses the `ChatbotUIContext` to access the global state and actions of the application.

## State Variables

The component uses several state variables to manage its state:

- `isOpen` determines whether the profile settings sheet is open.
- `displayName`, `username`, `usernameAvailable`, `loadingUsername`, `profileImageSrc`, `profileImageFile`, and `profileInstructions` store the user's display name, username, whether the username is available, whether the username is being loaded, the source of the profile image, the profile image file, and the profile instructions, respectively.
- `useAzureOpenai`, `openaiAPIKey`, `openaiOrgID`, `azureOpenaiAPIKey`, `azureOpenaiEndpoint`, `azureOpenai35TurboID`, `azureOpenai45TurboID`, `azureOpenai45VisionID`, `azureEmbeddingsID`, `anthropicAPIKey`, `googleGeminiAPIKey`, `mistralAPIKey`, `groqAPIKey`, `perplexityAPIKey`, and `openrouterAPIKey` store the user's API keys and related settings for various AI services.

## Event Handlers

The component defines several event handlers:

- `handleSignOut` signs the user out and redirects them to the login page.
- `handleSave` updates the user's profile and refreshes the available models.
- `debounce` is a utility function that debounces another function, preventing it from being called too frequently.
- `checkUsernameAvailability` checks whether a username is available.
- `handleKeyDown` triggers the save button when the Enter key is pressed.

## Render Method

The render method returns a `Sheet` component that contains the user interface for managing the user's profile settings. It includes inputs for the user's username, profile image, chat display name, and AI instructions, as well as tabs for managing the user's API keys. It also includes a theme switcher and a download button for exporting old data.

## Export

The `ProfileSettings` component is exported as a named export from the module.