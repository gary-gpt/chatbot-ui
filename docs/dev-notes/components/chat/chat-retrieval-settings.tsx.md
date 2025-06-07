**📄 Source File:** `/components/chat/chat-retrieval-settings.tsx`  
**🕒 Generated:** 2025-06-07 13:29:49 UTC  
**🤖 Model:** gpt-4

---

# ChatRetrievalSettings.tsx

This file is a part of a chatbot UI and it defines a component that allows users to adjust the retrieval settings of the chatbot. The component is named `ChatRetrievalSettings`.

## Exports

The file exports a single component, `ChatRetrievalSettings`, which is a functional component in React. This component does not take any props.

## Functions and Types

The `ChatRetrievalSettings` component uses the `ChatbotUIContext` to get and set the `sourceCount` state. This state likely determines the number of sources the chatbot uses to retrieve information.

The component uses a `useState` hook to manage the state of a dialog box, which is opened and closed by the user. The dialog box contains a slider that allows the user to adjust the `sourceCount` value.

## Usage

The `ChatRetrievalSettings` component is likely used in a larger chatbot UI. When rendered, it shows an icon that, when clicked, opens a dialog box. This dialog box contains a slider that allows the user to adjust the `sourceCount` value. The new value is saved when the user clicks the "Save & Close" button.

## Structure and Nuance

The component uses several UI components from a shared UI library, such as `Button`, `Dialog`, `DialogContent`, `DialogTrigger`, `Label`, and `Slider`. It also uses a `WithTooltip` component to show a tooltip when the user hovers over the icon that opens the dialog box.

The `Slider` component is controlled by the `sourceCount` state, and it allows the user to select a value between 1 and 10. When the slider's value changes, the `sourceCount` state is updated.

The `sourceCount` value is also displayed in a label within the dialog box. This label is updated whenever the `sourceCount` state changes.