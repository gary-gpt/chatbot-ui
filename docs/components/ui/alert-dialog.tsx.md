---
source: components/ui/alert-dialog.tsx
generated: 2025-06-08T21:55:08.743Z
tags: []
hash: 895965528d43d9bf26c5fc1c99ccd6954bdf750dd2d813e401eb88c068e179c0
---

# AlertDialog Component Documentation

This document provides an overview of the `AlertDialog` component in the `chatbot-ui` project. The component is located in the file `/Users/garymason/chatbot-ui/components/ui/alert-dialog.tsx`.

## Overview

The `AlertDialog` component is a custom alert dialog box built using the `@radix-ui/react-alert-dialog` library. It consists of several sub-components that together form the complete alert dialog box. These sub-components include `AlertDialogTrigger`, `AlertDialogPortal`, `AlertDialogOverlay`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, and `AlertDialogCancel`.

## Code Summary

### Imports

The component begins by importing necessary dependencies, including React and the `@radix-ui/react-alert-dialog` library. It also imports a utility function `cn` and `buttonVariants` from the project's own codebase.

### AlertDialog

`AlertDialog` is the root component of the alert dialog box. It is directly derived from `AlertDialogPrimitive.Root`.

### AlertDialogTrigger

`AlertDialogTrigger` is the component that triggers the alert dialog box. It is directly derived from `AlertDialogPrimitive.Trigger`.

### AlertDialogPortal

`AlertDialogPortal` is the component that provides a React Portal for the alert dialog box. It is directly derived from `AlertDialogPrimitive.Portal`.

### AlertDialogOverlay

`AlertDialogOverlay` is the component that provides an overlay for the alert dialog box. It is a forward ref component that wraps `AlertDialogPrimitive.Overlay` and adds custom styles.

### AlertDialogContent

`AlertDialogContent` is the component that provides the content for the alert dialog box. It is a forward ref component that wraps `AlertDialogPrimitive.Content` and adds custom styles.

### AlertDialogHeader

`AlertDialogHeader` is a functional component that provides the header for the alert dialog box. It accepts `className` and `props` and returns a `div` with custom styles.

### AlertDialogFooter

`AlertDialogFooter` is a functional component that provides the footer for the alert dialog box. It accepts `className` and `props` and returns a `div` with custom styles.

### AlertDialogTitle

`AlertDialogTitle` is a forward ref component that provides the title for the alert dialog box. It wraps `AlertDialogPrimitive.Title` and adds custom styles.

### AlertDialogDescription

`AlertDialogDescription` is a forward ref component that provides the description for the alert dialog box. It wraps `AlertDialogPrimitive.Description` and adds custom styles.

### AlertDialogAction

`AlertDialogAction` is a forward ref component that provides the action button for the alert dialog box. It wraps `AlertDialogPrimitive.Action` and adds custom styles.

### AlertDialogCancel

`AlertDialogCancel` is a forward ref component that provides the cancel button for the alert dialog box. It wraps `AlertDialogPrimitive.Cancel` and adds custom styles.

### Exports

Finally, all the components are exported for use in other parts of the application.

## Usage

To use the `AlertDialog` component, import the necessary sub-components from the `alert-dialog.tsx` file and use them to construct the alert dialog box. The `AlertDialogTrigger` component can be used to trigger the dialog box, and the `AlertDialogContent` component can be used to provide the content of the dialog box. The other sub-components can be used to customize the appearance and behavior of the dialog box.