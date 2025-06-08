---
source: components/utility/change-password.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 68b58feb5567d2f5f997705b0754933fd92f2c69e30d01841ca5bc2a1c038314
---
# ChangePassword Component

This is a functional component in React that provides an interface for users to change their password.

## Imports

- `supabase` from "@/lib/supabase/browser-client": This is the Supabase client used for interacting with the Supabase backend.
- `useRouter` from "next/navigation": This is a hook from Next.js that allows you to control navigation within your application.
- `FC, useState` from "react": These are React hooks for creating functional components and managing state within them.
- `Button` from "../ui/button": This is a UI component for a button.
- `Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle` from "../ui/dialog": These are UI components for creating a dialog box.
- `Input` from "../ui/input": This is a UI component for an input field.
- `toast` from "sonner": This is a library for displaying toast notifications.

## Props

This component does not accept any props.

## State

- `newPassword`: This state variable holds the value of the new password input field.
- `confirmPassword`: This state variable holds the value of the confirm password input field.

## Functions

- `handleResetPassword`: This asynchronous function is triggered when the user clicks the "Confirm Change" button. It first checks if the `newPassword` state variable is empty, and if so, it displays a toast notification asking the user to enter their new password. If `newPassword` is not empty, it calls `supabase.auth.updateUser` to update the user's password, displays a success toast notification, and redirects the user to the login page.

## Return

This component returns a `Dialog` component with the following children:

- `DialogContent`: This is the main content of the dialog. It contains the following:
  - `DialogHeader`: This contains the `DialogTitle`, which is set to "Change Password".
  - Two `Input` components: These are for the new password and confirm password fields. Their values are bound to the `newPassword` and `confirmPassword` state variables respectively, and they update these state variables whenever their values change.
  - `DialogFooter`: This contains a `Button` component that triggers the `handleResetPassword` function when clicked.
