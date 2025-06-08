# Documentation

## usePromptAndCommand Hook

This hook provides a set of methods to handle user input and selection of prompts, files, collections, tools, and assistants in a chatbot UI context.

### Importing

```javascript
import { usePromptAndCommand } from "<path-to-hook>";
```

### Usage

```javascript
const {
  handleInputChange,
  handleSelectPrompt,
  handleSelectUserFile,
  handleSelectUserCollection,
  handleSelectTool,
  handleSelectAssistant
} = usePromptAndCommand();
```

### Methods

#### `handleInputChange(value: string)`

Handles user input changes. It checks if the input matches certain patterns (e.g., starting with '@', '/', '#', '!') and opens the corresponding picker (assistant, prompt, file, tool). If no pattern is matched, it closes all pickers.

#### `handleSelectPrompt(prompt: Tables<"prompts">)`

Handles the selection of a prompt. It closes the prompt picker and appends the selected prompt content to the user input.

#### `handleSelectUserFile(file: Tables<"files">)`

Handles the selection of a file. It displays the selected file, closes the file picker, and removes the hashtag command from the user input. If the selected file is not already in the chat files or new message files, it is added to the new message files.

#### `handleSelectUserCollection(collection: Tables<"collections">)`

Handles the selection of a collection. It displays the selected collection, closes the file picker, and removes the hashtag command from the user input. It adds all files from the selected collection that are not already in the chat files or new message files to the new message files.

#### `handleSelectTool(tool: Tables<"tools">)`

Handles the selection of a tool. It closes the tool picker, removes the tool command from the user input, and adds the selected tool to the selected tools.

#### `handleSelectAssistant(assistant: Tables<"assistants">)`

Handles the selection of an assistant. It closes the assistant picker, removes the assistant command from the user input, sets the selected assistant, and updates the chat settings based on the assistant's properties. It also retrieves all files, collections, and tools associated with the selected assistant, adds them to the chat files or selected tools, and displays the files if any were added.