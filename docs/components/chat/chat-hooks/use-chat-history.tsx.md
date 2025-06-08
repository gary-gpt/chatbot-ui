# useChatHistoryHandler Hook

This is a custom hook that handles chat history in the chat component. It provides functions to set the new message content to the previous or next user message in the chat history.

## Usage

```javascript
import { useChatHistoryHandler } from 'path/to/hook';

const { setNewMessageContentToPreviousUserMessage, setNewMessageContentToNextUserMessage } = useChatHistoryHandler();
```

## Functions

### setNewMessageContentToPreviousUserMessage

This function sets the new message content to the previous user message.

```javascript
setNewMessageContentToPreviousUserMessage();
```

### setNewMessageContentToNextUserMessage

This function sets the new message content to the next user message in the chat history. If there is a next user message, it updates the user input and message history index accordingly. If there is no next user message, it resets the user input and sets the message history index to the end of the chat history.

```javascript
setNewMessageContentToNextUserMessage();
```

## Dependencies

This hook depends on the `ChatbotUIContext` for getting the current user input, chat messages, and the status of message generation. It also uses the `useContext`, `useEffect`, and `useState` hooks from React.

## State

The hook maintains a local state `messageHistoryIndex` which keeps track of the current index in the chat history.

## Side Effects

The hook has a side effect that runs whenever the `chatMessages`, `isGenerating`, or `messageHistoryIndex` changes. If messages get deleted the history index pointed could be out of bounds, so it sets the `messageHistoryIndex` to `chatMessages.length`.