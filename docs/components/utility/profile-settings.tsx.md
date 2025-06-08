---
source: components/utility/profile-settings.tsx
generated: '2025-06-08T13:21:01.638Z'
tags: []
hash: 65f94628762ca6cac4e730e2f87ce2285027697e14e8ce0152acf8524acff492
---
# ProfileSettings Component

This component is used to manage the user's profile settings.

## Props

The `ProfileSettings` component does not take any props.

## State

The component maintains several state variables:

- `isOpen`: A boolean value indicating whether the settings sheet is open.
- `displayName`: The display name of the user.
- `username`: The username of the user.
- `usernameAvailable`: A boolean value indicating whether the entered username is available.
- `loadingUsername`: A boolean value indicating whether the username availability is being checked.
- `profileImageSrc`: The source URL of the profile image.
- `profileImageFile`: The profile image file.
- `profileInstructions`: The profile instructions provided by the user.
- `useAzureOpenai`: A boolean value indicating whether to use Azure OpenAI.
- `openaiAPIKey`: The OpenAI API key.
- `openaiOrgID`: The OpenAI organization ID.
- `azureOpenaiAPIKey`: The Azure OpenAI API key.
- `azureOpenaiEndpoint`: The Azure OpenAI endpoint.
- `azureOpenai35TurboID`: The Azure OpenAI GPT-3.5 Turbo deployment name.
- `azureOpenai45TurboID`: The Azure OpenAI GPT-4.5 Turbo deployment name.
- `azureOpenai45VisionID`: The Azure OpenAI GPT-4.5 Vision deployment name.
- `azureEmbeddingsID`: The Azure OpenAI embeddings deployment name.
- `anthropicAPIKey`: The Anthropic API key.
- `googleGeminiAPIKey`: The Google Gemini API key.
- `mistralAPIKey`: The Mistral API key.
- `groqAPIKey`: The Groq API key.
- `perplexityAPIKey`: The Perplexity API key.
- `openrouterAPIKey`: The OpenRouter API key.

## Functions

The component defines several functions:

- `handleSignOut`: Signs out the user and redirects them to the login page.
- `handleSave`: Saves the updated profile settings.
- `debounce`: A utility function for debouncing function calls.
- `checkUsernameAvailability`: Checks if the entered username is available.
- `handleKeyDown`: Handles the `Enter` key press to save the settings.

## Render

The component renders a `Sheet` component which contains the user settings. The settings are divided into two tabs: `Profile` and `API Keys`. The `Profile` tab allows the user to update their username, profile image, chat display name, and profile context. The `API Keys` tab allows the user to update their API keys for various services. The bottom of the sheet contains a `ThemeSwitcher` component and a download button for exporting Chatbot UI 1.0 data as JSON. The sheet also contains a `Save` button to save the updated settings.
