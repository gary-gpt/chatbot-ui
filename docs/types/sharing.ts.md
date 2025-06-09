---
source: types/sharing.ts
generated: 2025-06-08T22:45:57.741Z
tags: []
hash: a4532525111f538c5620ceb3df1fbdb360258f756fa54878d554feab26bccf17
---

# Documentation for `sharing.ts`

This file is located at `/Users/garymason/chatbot-ui/types/sharing.ts`. It contains a TypeScript type definition for a string literal type named `Sharing`.

## Code Summary

```ts
export type Sharing = "private" | "public" | "unlisted"
```

## Type: `Sharing`

The `Sharing` type is a string literal type in TypeScript. It is used to restrict the possible values that a string can take. In this case, a variable of type `Sharing` can only be assigned the values "private", "public", or "unlisted".

### Possible Values

- `"private"`: This value might be used to indicate that a particular resource (like a chatbot conversation) is private and only accessible to certain users.
- `"public"`: This value might be used to indicate that a particular resource is public and accessible to all users.
- `"unlisted"`: This value might be used to indicate that a particular resource is unlisted, meaning it's not publicly accessible but can be accessed by users who have the direct link.

## Usage

This type can be used in other parts of the codebase to enforce that only these specific string values are used in certain contexts. For example, if there is a function that accepts a `Sharing` parameter, TypeScript will enforce that only the values "private", "public", or "unlisted" can be passed to that function.

```ts
function setChatbotVisibility(visibility: Sharing) {
  // function implementation
}
```

In the above function, `visibility` must be either "private", "public", or "unlisted". Any other string value would result in a TypeScript error.