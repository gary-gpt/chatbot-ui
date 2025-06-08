# HomePage Component Documentation

## Overview

The `HomePage` component is the main landing page of the application. It displays a chatbot UI icon, a title, and a button to navigate to the login page.

## Import Statements

This component imports several modules:

- `ChatbotUISVG` from "@/components/icons/chatbotui-svg": This is a custom SVG icon for the chatbot UI.
- `IconArrowRight` from "@tabler/icons-react": This is an arrow icon from the Tabler Icons library.
- `useTheme` from "next-themes": This is a hook for accessing the current theme of the application.
- `Link` from "next/link": This is a component for creating navigational links.

## Function Definition

`HomePage` is a functional component that uses the `useTheme` hook to access the current theme of the application.

## Return Statement

The component returns a `div` element with several child elements:

- A `div` that contains the `ChatbotUISVG` component. The `theme` prop of `ChatbotUISVG` is set to "dark" if the current theme is "dark", and "light" otherwise. The `scale` prop is set to 0.3.
- A `div` that displays the text "Chatbot UI" in a large, bold font.
- A `Link` component that navigates to the "/login" page when clicked. This component contains the text "Start Chatting" and the `IconArrowRight` component.

## Styling

The component uses Tailwind CSS for styling. The main `div` is a flex container that centers its children both horizontally and vertically. The `Link` component has a blue background, rounded corners, and centered text. The `IconArrowRight` component is slightly offset to the right of the "Start Chatting" text.