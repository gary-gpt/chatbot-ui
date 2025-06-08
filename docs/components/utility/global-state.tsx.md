# GlobalState Component

The `GlobalState` component is a functional component that serves as a global state provider for the application. It uses React's Context API to provide state to its children components. 

## Props

This component accepts only one prop:

- `children`: React.ReactNode - The child elements of the `GlobalState` component.

## State

The `GlobalState` component maintains a large number of state variables, which are used to store different kinds of data for the application. 

- Profile Store: Stores the user's profile data.
- Items Store: Stores various items related to the user such as assistants, collections, chats, files, folders, models, presets, prompts, tools, and workspaces.
- Models Store: Stores the available hosted, local, and open router models.
- Workspace Store: Stores the selected workspace and workspace images.
- Preset Store: Stores the selected preset.
- Assistant Store: Stores the selected assistant, assistant images, and OpenAI assistants.
- Passive Chat Store: Stores user input, chat messages, chat settings, selected chat, and chat file items.
- Active Chat Store: Stores the state of chat generation, the state of the first token received, and the abort controller.
- Chat Input Command Store: Stores the state of various chat input commands and focus states.
- Attachment Store: Stores chat files, chat images, new message files, new message images, and the state of the files display.
- Retrieval Store: Stores the state of retrieval usage and the source count.
- Tool Store: Stores the selected tools and the tool in use.

## Methods

- `fetchStartingData`: This async method fetches the initial data for the user session, sets the profile, and fetches the workspaces and workspace images.

## Usage

Wrap the components that need access to the global state with the `GlobalState` component:

```jsx
<GlobalState>
  <YourComponent />
</GlobalState>
```

To access the global state in a child component, use the `useContext` hook:

```jsx
import { ChatbotUIContext } from "@/context/context"

const YourComponent = () => {
  const { profile, setProfile } = useContext(ChatbotUIContext)
  // ...
}
```

## Dependencies

This component relies on several external libraries and internal modules:

- `react`: For creating the functional component and using hooks.
- `next/navigation`: For routing.
- `@/context/context`: For providing and consuming context.
- `@/db/profile`, `@/db/workspaces`, `@/db/storage/workspace-images`: For fetching data from the database.
- `@/lib/blob-to-b64`: For converting blob data to base64.
- `@/lib/models/fetch-models`: For fetching models.
- `@/lib/supabase/browser-client`: For interacting with Supabase.
- `@/supabase/types`, `@/types`, `@/types/images/assistant-image`, `@/types/valid-keys`: For TypeScript types.