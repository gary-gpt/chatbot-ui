**📄 Source File:** `/components/utility/profile-settings.tsx`  
**🕒 Generated:** 2025-06-07 14:07:18 UTC  
**🤖 Model:** gpt-4

---

# ProfileSettings.tsx

This TypeScript file is part of a chatbot UI and is responsible for managing and updating the user's profile settings. It provides a user interface for viewing and editing various profile settings, including the user's username, profile image, display name, and API keys for various services.

## Exports

The file exports a single component, `ProfileSettings`. This is a functional component that takes no props.

## Usage

The `ProfileSettings` component is likely used in a larger user settings or profile management context within the application. It provides a form for the user to view and update their profile settings, and handles the logic for saving these changes.

## Structure and Nuance

The component uses several hooks for managing state, including `useState` for local state and `useContext` to access the global `ChatbotUIContext`. It also uses `useCallback` to create a debounced function for checking username availability, which prevents unnecessary API requests as the user types.

The component uses several custom UI components, such as `Sheet`, `Tabs`, `Button`, and `Input`, to build the user interface. It also uses the `toast` function from the `sonner` library to display success and error messages to the user.

The `handleSave` function is responsible for saving the user's changes. It first checks if a new profile image has been uploaded, and if so, uploads the image and updates the profile image URL. It then updates the rest of the profile settings and displays a success message. Finally, it checks if any new API keys have been added and updates the available models accordingly.

The `handleSignOut` function signs the user out and redirects them to the login page.

The component returns a `Sheet` component that contains the form for updating the user's profile settings. The form is divided into two tabs: "Profile" and "API Keys". The "Profile" tab contains fields for the username, profile image, display name, and profile context. The "API Keys" tab contains fields for the API keys of various services. The form also includes a "Save" button that calls the `handleSave` function when clicked.