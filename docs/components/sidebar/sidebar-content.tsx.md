---
source: components/sidebar/sidebar-content.tsx
generated: 2025-06-08T21:52:01.760Z
tags: []
hash: 3312c8b5bbcddd2599bd3df81439ef6d612a522a9ba817977d2921eabbe53143
---

# SidebarContent Component Documentation

This document provides an overview of the `SidebarContent` component located at `/Users/garymason/chatbot-ui/components/sidebar/sidebar-content.tsx`. This component is used to render the content of the sidebar in the chatbot UI, including create buttons, a search bar, and a list of data.

## Imports

The component imports several modules and components:

- `Tables` from "@/supabase/types": This is a type used for the `folders` prop.
- `ContentType` and `DataListType` from "@/types": These are types used for the `contentType` and `data` props respectively.
- `FC` and `useState` from "react": `FC` (Function Component) is a type used for defining functional components in TypeScript. `useState` is a React Hook that lets you add state to your functional components.
- `SidebarCreateButtons`, `SidebarDataList`, and `SidebarSearch` from the current directory: These are components used within the `SidebarContent` component.

## Props

The `SidebarContent` component accepts the following props:

- `contentType`: This prop is of type `ContentType` and represents the type of content being displayed in the sidebar.
- `data`: This prop is of type `DataListType` and represents the list of data to be displayed in the sidebar.
- `folders`: This prop is of type `Tables<"folders">[]` and represents the list of folders to be displayed in the sidebar.

## Component Logic

The component uses the `useState` hook to manage a `searchTerm` state, which is used to filter the data displayed in the sidebar.

The `filteredData` constant is computed by filtering the `data` prop based on whether each item's name includes the `searchTerm`.

The component's return statement renders a div containing the `SidebarCreateButtons`, `SidebarSearch`, and `SidebarDataList` components. The `SidebarCreateButtons` and `SidebarSearch` components are wrapped in divs for styling purposes.

## Code

```ts
export const SidebarContent: FC<SidebarContentProps> = ({
  contentType,
  data,
  folders
}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData: any = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex max-h-[calc(100%-50px)] grow flex-col">
      <div className="mt-2 flex items-center">
        <SidebarCreateButtons
          contentType={contentType}
          hasData={data.length > 0}
        />
      </div>

      <div className="mt-2">
        <SidebarSearch
          contentType={contentType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <SidebarDataList
        contentType={contentType}
        data={filteredData}
        folders={folders}
      />
    </div>
  )
}
```

This component is exported as a functional component that takes `SidebarContentProps` as its props. The component maintains a state for the search term and filters the data based on this term. It then renders the sidebar content, including create buttons, a search bar, and a data list.