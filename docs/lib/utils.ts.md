---
source: lib/utils.ts
generated: 2025-06-08T22:40:37.032Z
tags: []
hash: 4fcfeb677189c07cd93be66f8ea73e49202fc3c6dc076ab0ba6d211b862dc71d
---

# Documentation for `utils.ts`

This file contains utility functions that are used throughout the application. These functions provide common functionality that is used in multiple places, helping to keep the codebase DRY (Don't Repeat Yourself).

## Import Statements

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
```

The `clsx` function is a utility for constructing `className` strings conditionally. It is used in the `cn` function in this file. `ClassValue` is a type from `clsx` that represents the possible inputs to the `clsx` function.

`twMerge` is a utility function from `tailwind-merge` that merges multiple Tailwind CSS classes into one.

## `cn` Function

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

The `cn` function is a utility function for merging multiple class names into one. It uses the `clsx` function to concatenate the class names and the `twMerge` function to merge them into one class.

## `formatDate` Function

```ts
export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}
```

The `formatDate` function is a utility function for formatting dates. It takes a date input, which can be a string, a number, or a Date object, and returns a string representation of the date in the format "Month Day, Year".

## `getMediaTypeFromDataURL` Function

```ts
export function getMediaTypeFromDataURL(dataURL: string): string | null {
  const matches = dataURL.match(/^data:([A-Za-z-+\/]+);base64/)
  return matches ? matches[1] : null
}
```

The `getMediaTypeFromDataURL` function is a utility function for extracting the media type from a data URL. It uses a regular expression to match the media type in the data URL. If a match is found, it returns the media type; otherwise, it returns null.

## `getBase64FromDataURL` Function

```ts
export function getBase64FromDataURL(dataURL: string): string | null {
  const matches = dataURL.match(/^data:[A-Za-z-+\/]+;base64,(.*)$/)
  return matches ? matches[1] : null
}
```

The `getBase64FromDataURL` function is a utility function for extracting the base64 data from a data URL. It uses a regular expression to match the base64 data in the data URL. If a match is found, it returns the base64 data; otherwise, it returns null.