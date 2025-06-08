---
source: types/error-response.ts
generated: '2025-06-08T13:21:01.632Z'
tags: []
hash: 13413d27ab500255ab5e0fd2899363b0f9da8f6deae0e97ee002f049a9de930b
---
# ErrorResponse and ErrorResponseSchema

This documentation provides an overview of the `ErrorResponse` type and the `ErrorResponseSchema` object.

## ErrorResponse Type

`ErrorResponse` is a TypeScript type that represents the structure of an error response. It has a single property, `error`, which is an object containing two properties:

- `code`: A number representing the error code.
- `message`: A string representing the error message.

Here is the structure of the `ErrorResponse` type:

```typescript
export type ErrorResponse = {
  error: {
    code: number
    message: string
  }
}
```

## ErrorResponseSchema Object

`ErrorResponseSchema` is a Zod schema object that validates the structure of an `ErrorResponse`. It uses the `z.object()` method to define an object schema, and the `z.number()` and `z.string()` methods to define the `code` and `message` properties, respectively.

The `code` property is defined with the `{ coerce: true }` option, which means that Zod will try to convert the input to a number. If the input cannot be converted, Zod will throw an error. The `default(500)` method sets the default value of the `code` property to `500` if no value is provided.

The `message` property is defined as a string, with a default value of `"Internal Server Error"` if no value is provided.

Here is the structure of the `ErrorResponseSchema` object:

```typescript
export const ErrorResponseSchema = z.object({
  error: z.object({
    code: z.number({ coerce: true }).default(500),
    message: z.string().default("Internal Server Error")
  })
})
```

Please note that the `ErrorResponseSchema` object should be used to validate data that is supposed to match the `ErrorResponse` type.
