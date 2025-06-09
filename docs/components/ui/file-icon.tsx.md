---
source: components/ui/file-icon.tsx
generated: 2025-06-08T22:01:05.089Z
tags: []
hash: 7b062fa339b949caf23428d2de93d18fce9ecb96155d8356b5d5d893256d7359
---

# File Icon Component Documentation

This document provides an overview of the `FileIcon` component located at `/Users/garymason/chatbot-ui/components/ui/file-icon.tsx`.

## Summary

The `FileIcon` component is a functional component written in TypeScript that takes a file type and an optional size as props, and returns the corresponding icon for that file type. If the file type is not recognized, it defaults to a generic file icon.

## Import Statements

The component imports several specific file type icons from the `@tabler/icons-react` package. It also imports the `FC` (Functional Component) type from the `react` package.

```ts
import {
  IconFile,
  IconFileText,
  IconFileTypeCsv,
  IconFileTypeDocx,
  IconFileTypePdf,
  IconJson,
  IconMarkdown,
  IconPhoto
} from "@tabler/icons-react"
import { FC } from "react"
```

## Interface

The `FileIconProps` interface is defined to type-check the props that the `FileIcon` component receives. It expects a `type` prop of type `string` and an optional `size` prop of type `number`.

```ts
interface FileIconProps {
  type: string
  size?: number
}
```

## Component

The `FileIcon` component is a functional component that takes `FileIconProps` as props. It uses a series of conditional checks to determine which icon to return based on the `type` prop. If no specific match is found, it defaults to the `IconFile` icon. The `size` prop is used to determine the size of the icon, with a default value of `32` if no size is provided.

```ts
export const FileIcon: FC<FileIconProps> = ({ type, size = 32 }) => {
  if (type.includes("image")) {
    return <IconPhoto size={size} />
  } else if (type.includes("pdf")) {
    return <IconFileTypePdf size={size} />
  } else if (type.includes("csv")) {
    return <IconFileTypeCsv size={size} />
  } else if (type.includes("docx")) {
    return <IconFileTypeDocx size={size} />
  } else if (type.includes("plain")) {
    return <IconFileText size={size} />
  } else if (type.includes("json")) {
    return <IconJson size={size} />
  } else if (type.includes("markdown")) {
    return <IconMarkdown size={size} />
  } else {
    return <IconFile size={size} />
  }
}
```

## Usage

To use this component, import it from its location and pass in the appropriate `type` prop. The `size` prop is optional.

```ts
import { FileIcon } from '/Users/garymason/chatbot-ui/components/ui/file-icon.tsx';

<FileIcon type="pdf" size={48} />
```

This will render a PDF icon with a size of `48`.