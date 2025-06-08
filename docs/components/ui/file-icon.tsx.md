# FileIcon Component

The `FileIcon` component is a functional component that returns an icon based on the file type passed as a prop. It uses the `@tabler/icons-react` library to display the relevant icon.

## Props

The `FileIcon` component accepts the following props:

- `type` (required): A string representing the file type. The component uses this prop to determine which icon to display. The component checks for the following file types: 'image', 'pdf', 'csv', 'docx', 'plain', 'json', 'markdown'. If the file type does not match any of these, a default file icon is displayed.
- `size` (optional): A number representing the size of the icon. The default size is 32.

## Usage

Here's an example of how to use the `FileIcon` component:

```jsx
<FileIcon type="pdf" size={40} />
```

In this example, the `FileIcon` component will display a PDF icon of size 40.

## Import Statement

```jsx
import { FileIcon } from "<path-to-component>"
```

Replace `<path-to-component>` with the actual path where the `FileIcon` component is located.