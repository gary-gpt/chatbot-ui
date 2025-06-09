---
source: app/api/assistants/openai/route.ts
generated: 2025-06-08T21:18:18.448Z
tags: []
hash: f99b5b7d40b2d90debb10f6a0b0011b815275801813865f37d564e0e5dae0d33
---

# OpenAI Assistants Route

This file is located at `/Users/garymason/chatbot-ui/app/api/assistants/openai/route.ts`. It is a TypeScript file that defines the route for fetching the list of OpenAI Assistants.

## Imports

The file imports several modules and functions:

- `checkApiKey` and `getServerProfile` from "@/lib/server/server-chat-helpers"
- `ServerRuntime` from "next"
- `OpenAI` from "openai"

## Runtime

The file defines the `runtime` as `edge`, which is a type of `ServerRuntime`.

## GET Function

The main function in this file is the `GET` function. This is an asynchronous function that fetches the list of OpenAI Assistants.

### Function Logic

1. The function first calls `getServerProfile` to fetch the server profile.

2. It then uses `checkApiKey` to validate the OpenAI API key in the server profile.

3. If the API key is valid, it creates a new instance of OpenAI using the API key and the organization ID from the server profile.

4. It then calls `openai.beta.assistants.list` to fetch the list of OpenAI Assistants. It sets the limit to 100.

5. If the request is successful, it returns a new `Response` object with the list of assistants and a status of 200.

6. If an error occurs during the process, it catches the error and returns a new `Response` object with the error message and the error status. If no error message or status is provided, it defaults to "An unexpected error occurred" and 500, respectively.

```ts
export async function GET() {
  try {
    const profile = await getServerProfile() // Fetch server profile

    checkApiKey(profile.openai_api_key, "OpenAI") // Validate API key

    const openai = new OpenAI({ // Create new OpenAI instance
      apiKey: profile.openai_api_key || "",
      organization: profile.openai_organization_id
    })

    const myAssistants = await openai.beta.assistants.list({ // Fetch list of assistants
      limit: 100
    })

    return new Response(JSON.stringify({ assistants: myAssistants.data }), { // Return list of assistants
      status: 200
    })
  } catch (error: any) {
    const errorMessage = error.error?.message || "An unexpected error occurred" // Default error message
    const errorCode = error.status || 500 // Default error status
    return new Response(JSON.stringify({ message: errorMessage }), { // Return error message
      status: errorCode
    })
  }
}
```