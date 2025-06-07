**📄 Source File:** `/components/sidebar/items/chat/chat-item.tsx`  
**🕒 Generated:** 2025-06-07 13:39:39 UTC  
**🤖 Model:** gpt-4

---

# ChatItem.tsx

This file defines and exports a functional component `ChatItem` in React. The component is used to display individual chat items in a chat interface. It includes features such as displaying the assistant's image or model icon, the chat name, and options to update or delete the chat.

## Exports

The file exports a single functional component `ChatItem`.

### `ChatItem`

This is a functional component that takes a `chat` object as a prop. The `chat` object is of type `Tables<"chats">` which is defined in the `@/supabase/types` module.

The component uses several hooks and context values:

- `useContext(ChatbotUIContext)`: To access the chatbot UI context which provides several values related to the chatbot UI.
- `useRouter()`: To access the Next.js router for navigating between pages.
- `useParams()`: To access the route parameters.
- `useRef()`: To create a reference to the chat item's div element.

The component defines several event handlers:

- `handleClick()`: Navigates to the chat's page when the chat item is clicked.
- `handleKeyDown()`: Triggers a click event on the chat item when the Enter key is pressed.

The component renders a div element that represents the chat item. The div contains an image or icon representing the assistant, the chat name, and options to update or delete the chat.

## Interesting Structure or Nuance

The component uses the `cn` function from the `@/lib/utils` module to conditionally apply CSS classes to the chat item's div element. The `isActive` variable is used to determine whether the chat item is the currently selected chat, and if so, the "bg-accent" class is applied.

The component also uses the `WithTooltip` component from the `@/components/ui/with-tooltip` module to display a tooltip with the model's name when the model icon is hovered over.

The `UpdateChat` and `DeleteChat` components are used to render buttons for updating and deleting the chat. These buttons are only visible when the chat item is active or being hovered over.