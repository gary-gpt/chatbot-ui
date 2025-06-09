---
source: lib/server/server-utils.ts
generated: 2025-06-08T22:39:19.092Z
tags: []
hash: b8286cb655f8b46478ebc486c8e6a3fe55811baadb2065a27647c3960f3bdc05
---

# Server Utilities Documentation

This document provides a detailed explanation of the server utility function `createResponse` found in the file `/Users/garymason/chatbot-ui/lib/server/server-utils.ts`.

## Function Summary

The `createResponse` function is a utility function used to create a new HTTP response with a given data object and status code. The function takes two parameters: `data` and `status`. The `data` parameter is an object that contains the data to be sent in the response, and `status` is a number representing the HTTP status code for the response.

The function returns a new `Response` object with the given data and status. The data is stringified into a JSON format and set as the body of the response. The status code is set as the status of the response. The `Content-Type` header of the response is set to `"application/json"` to indicate that the response body contains JSON data.

## Code Breakdown

```ts
export function createResponse(data: object, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  })
}
```

1. `export function createResponse(data: object, status: number): Response`: This line declares the `createResponse` function and exports it so that it can be imported and used in other files. The function takes two parameters: `data` of type `object` and `status` of type `number`. The function returns a `Response` object.

2. `return new Response(JSON.stringify(data), {`: This line begins the creation of a new `Response` object. The first argument to the `Response` constructor is `JSON.stringify(data)`, which converts the `data` object into a JSON string.

3. `status,`: This line sets the status of the response to the `status` parameter.

4. `headers: { "Content-Type": "application/json" }`: This line sets the `Content-Type` header of the response to `"application/json"`, indicating that the response body contains JSON data.

5. `})`: This line ends the `Response` constructor and the `createResponse` function.

## Usage

The `createResponse` function can be used to create a new HTTP response with a given data object and status code. For example, to create a response with a status code of 200 and a data object of `{ message: "Success" }`, you would call `createResponse({ message: "Success" }, 200)`.