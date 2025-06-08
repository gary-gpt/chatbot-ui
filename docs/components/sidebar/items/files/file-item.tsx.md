# FileItem Component

This component is used to display a file item in the sidebar.

## Props

The component takes the following props:

- `file`: An object representing a file. It's an instance of `Tables<"files">`.

## State

The component maintains the following state:

- `name`: The name of the file. Initial value is `file.name`.
- `isTyping`: A boolean indicating whether the user is typing. Initial value is `false`.
- `description`: The description of the file. Initial value is `file.description`.

## Functions

The component defines the following functions:

- `getLinkAndView`: An async function that fetches a link to the file from storage and opens it in a new tab.

## Render

The component renders a `SidebarItem` with the following props:

- `item`: The file object.
- `isTyping`: The current state of `isTyping`.
- `contentType`: A string indicating the type of content, in this case "files".
- `icon`: A `FileIcon` component with the type and size of the file.
- `updateState`: An object containing the current state of `name` and `description`.
- `renderInputs`: A function that returns JSX for displaying the file details and inputs for editing the name and description.

# formatFileSize Function

This function takes a size in bytes and returns a string representing the size in the appropriate unit (bytes, KB, MB, or GB). The size is rounded to two decimal places.