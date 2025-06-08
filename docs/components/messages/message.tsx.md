# Message Component

The `Message` component is a functional component that displays a single message in a chat interface. It provides features such as editing, copying, and regenerating messages. It also displays message sources and associated images.

## Props

The `Message` component accepts the following props:

- `message`: An object representing a single message from the `messages` table.
- `fileItems`: An array of file items associated with the message from the `file_items` table.
- `isEditing`: A boolean indicating if the message is currently being edited.
- `isLast`: A boolean indicating if the message is the last one in the chat.
- `onStartEdit`: A function that is called when the user starts editing a message.
- `onCancelEdit`: A function that is called when the user cancels editing a message.
- `onSubmitEdit`: A function that is called when the user submits an edited message. It accepts two arguments: the new message value and the sequence number of the message.

## State

The `Message` component maintains several pieces of state:

- `isHovering`: A boolean indicating if the mouse is hovering over the message.
- `editedMessage`: The current value of the message being edited.
- `showImagePreview`: A boolean indicating if the image preview is currently shown.
- `selectedImage`: The currently selected image to be previewed.
- `showFileItemPreview`: A boolean indicating if the file item preview is currently shown.
- `selectedFileItem`: The currently selected file item to be previewed.
- `viewSources`: A boolean indicating if the sources of the message are currently shown.

## Component Logic

The `Message` component uses the `ChatbotUIContext` to access various pieces of data such as the user's profile, the available models, and the current chat messages. It also uses the `useChatHandler` hook to handle sending messages.

The component handles several user interactions such as copying a message, starting and submitting an edit, and regenerating a message. It also handles showing and hiding previews for images and file items.

The component renders a message along with its associated actions and details. If the message is being edited, a textarea is shown for the user to input the new message. If the message has associated file items, a summary of the sources is shown. If the message has associated images, these are displayed as well.

## Subcomponents

The `Message` component uses several subcomponents:

- `MessageActions`: Displays actions that can be performed on a message such as copying, editing, and regenerating.
- `MessageMarkdown`: Renders the content of a message as Markdown.
- `FilePreview`: Displays a preview of an image or file item.
- `Button`: A generic button component.
- `TextareaAutosize`: A textarea that automatically adjusts its size based on its content.
- `WithTooltip`: A wrapper component that displays a tooltip when its child is hovered over.
- `ModelIcon`: Displays an icon representing a model.
- `FileIcon`: Displays an icon representing a file type.