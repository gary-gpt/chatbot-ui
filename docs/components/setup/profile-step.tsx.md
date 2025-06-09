---
source: components/setup/profile-step.tsx
generated: 2025-06-08T21:38:43.090Z
tags: []
hash: 3f0f5cd4b9000d16ad782d4c97d63534bce0dac3a498590f6d3ba44ccd24c691
---

# ProfileStep Component Documentation

This document provides an overview of the `ProfileStep` component in the `chatbot-ui` project. This component is located at `/Users/garymason/chatbot-ui/components/setup/profile-step.tsx`.

## Overview

The `ProfileStep` component is a functional component that allows users to set up their profile by entering a username and display name. It checks the availability of the username and displays the result. It also limits the length of the username and display name according to predefined constants.

## Component Props

The `ProfileStep` component accepts the following props:

- `username`: A string representing the username.
- `usernameAvailable`: A boolean indicating whether the username is available.
- `displayName`: A string representing the display name.
- `onUsernameAvailableChange`: A function that updates the `usernameAvailable` state.
- `onUsernameChange`: A function that updates the `username` state.
- `onDisplayNameChange`: A function that updates the `displayName` state.

## Component Logic

The `ProfileStep` component uses React hooks for state management and side effects. The `useState` hook is used to manage the loading state of the component, which is set to `true` when the username availability is being checked and `false` when the check is complete.

The `useCallback` hook is used to create a memoized version of the `checkUsernameAvailability` function. This function is debounced to prevent excessive API calls when the user is typing the username. The function checks if the username is valid and available. If the username is not valid or available, the `onUsernameAvailableChange` function is called with `false` and an error message is displayed using the `toast` function.

The `ProfileStep` component returns a JSX element that includes two input fields for the username and display name. The username input field includes an icon indicating the availability of the username. The `LimitDisplay` component is used to display the remaining characters for the username and display name.

## Code Sample

```ts
// Import necessary modules and components
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  PROFILE_DISPLAY_NAME_MAX,
  PROFILE_USERNAME_MAX,
  PROFILE_USERNAME_MIN
} from "@/db/limits"
import {
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconLoader2
} from "@tabler/icons-react"
import { FC, useCallback, useState } from "react"
import { LimitDisplay } from "../ui/limit-display"
import { toast } from "sonner"

// Define the props interface
interface ProfileStepProps {
  username: string
  usernameAvailable: boolean
  displayName: string
  onUsernameAvailableChange: (isAvailable: boolean) => void
  onUsernameChange: (username: string) => void
  onDisplayNameChange: (name: string) => void
}

// Define the ProfileStep component
export const ProfileStep: FC<ProfileStepProps> = ({
  username,
  usernameAvailable,
  displayName,
  onUsernameAvailableChange,
  onUsernameChange,
  onDisplayNameChange
}) => {
  // Define the component logic here
  // ...
}

```

## Conclusion

The `ProfileStep` component is a crucial part of the `chatbot-ui` project, providing a user-friendly interface for users to set up their profile. It ensures that usernames are unique and display names are within the specified length limits.