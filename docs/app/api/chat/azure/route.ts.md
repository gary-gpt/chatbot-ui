---
source: app/api/chat/azure/route.ts
generated: 2025-06-08T21:18:56.707Z
tags: []
hash: 0f9ceba03ea4faa7448f4eb5c7a2dce6eed08d12416bf4e7ff1de8a8bdc02faa
---

# Azure Chatbot Route Documentation

This TypeScript file, located at `/Users/garymason/chatbot-ui/app/api/chat/azure/route.ts`, defines the POST method for the Azure OpenAI chatbot API route. It is responsible for handling the chatbot's interaction with the Azure OpenAI service.

## Dependencies

The script imports several dependencies:

- Helper functions from the server-chat-helpers file
- The ChatAPIPayload type
- OpenAI and OpenAIStream from the OpenAI library
- The ChatCompletionCreateParamsBase type from the OpenAI library

## Runtime

The script sets the runtime to "edge".

## POST Function

The POST function is an asynchronous function that takes a request as an argument. It performs the following steps:

1. Parses the request to JSON.
2. Extracts the chatSettings and messages from the JSON payload.
3. Retrieves the server profile and checks the Azure OpenAI API key.
4. Determines the deployment ID based on the chat model specified in the chatSettings.
5. If the endpoint, key, or deployment ID are not found, it returns a 400 status response with an appropriate error message.
6. Initializes a new instance of the OpenAI object with the appropriate settings.
7. Sends a chat completion request to the Azure OpenAI service.
8. Returns a streaming text response from the Azure OpenAI service.
9. If any error occurs during the process, it returns a response with the error message and status code.

```ts
// The POST function
export async function POST(request: Request) {
  // Parse the request to JSON
  const json = await request.json()
  const { chatSettings, messages } = json as ChatAPIPayload

  try {
    // Retrieve the server profile and check the Azure OpenAI API key
    const profile = await getServerProfile()
    checkApiKey(profile.azure_openai_api_key, "Azure OpenAI")

    // Determine the deployment ID based on the chat model
    let DEPLOYMENT_ID = ""
    //...

    // Initialize a new instance of the OpenAI object
    const azureOpenai = new OpenAI({
      //...
    })

    // Send a chat completion request to the Azure OpenAI service
    const response = await azureOpenai.chat.completions.create({
      //...
    })

    // Return a streaming text response from the Azure OpenAI service
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    // Return a response with the error message and status code
    //...
  }
}
```

## Error Handling

The POST function includes a try-catch block to handle any errors that may occur during the process. If an error occurs, it returns a response with the error message and status code. If no specific error message is provided, it defaults to "An unexpected error occurred". If no specific status code is provided, it defaults to 500.