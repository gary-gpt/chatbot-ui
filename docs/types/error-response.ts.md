---
source: types/error-response.ts
generated: 2025-06-08T22:43:54.847Z
tags: []
hash: af0829c7174d2d3802fd58c263fc7f85f09a44c6d34961b24ff16c13f05ca4ca
---

# Error Response Type and Schema Documentation

This file, located at `/Users/garymason/chatbot-ui/types/error-response.ts`, defines the structure and validation for an error response object in a TypeScript application. This structure is used when the application needs to return an error response to the client.

## ErrorResponse Type

```ts
export type ErrorResponse = {
  error: {
    code: number
    message: string
  }
}
```

The `ErrorResponse` type is an object that contains an `error` object. This `error` object has two properties:

- `code`: A number that represents the HTTP status code of the error.
- `message`: A string that describes the error.

This structure allows for a consistent format of error responses throughout the application.

## ErrorResponseSchema

```ts
export const ErrorResponseSchema = z.object({
  error: z.object({
    code: z.number({ coerce: true }).default(500),
    message: z.string().default("Internal Server Error")
  })
})
```

The `ErrorResponseSchema` is a Zod schema that validates the structure of the `ErrorResponse` type. Zod is a TypeScript-first schema declaration and validation library.

The schema defines that the `error` object should contain:

- `code`: A number. If a non-number value is provided, Zod will attempt to coerce it into a number. If no value is provided, it will default to `500`.
- `message`: A string. If no value is provided, it will default to `"Internal Server Error"`.

This schema is used to ensure that any error responses conform to the expected structure and types, and to provide default values if necessary.