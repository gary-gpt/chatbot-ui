---
source: app/api/retrieval/retrieve/route.ts
generated: 2025-06-08T21:24:43.001Z
tags: []
hash: f9978342ee97923e7226bc559d21eff0a0e9965c7f332ab3c1556ff6ba1dcbad
---

# Chatbot UI API: Retrieve Route

This TypeScript file is part of a chatbot UI application. It defines an asynchronous POST function that handles requests to the `/retrieve` route. The function retrieves and returns the most similar chunks of data from a database, based on the user's input and chosen embedding provider.

## Code Overview

### Import Statements

The file begins by importing necessary modules and functions:

```ts
import { generateLocalEmbedding } from "@/lib/generate-local-embedding"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { Database } from "@/supabase/types"
import { createClient } from "@supabase/supabase-js"
import OpenAI from "openai"
```

### POST Function

The `POST` function is an asynchronous function that handles POST requests:

```ts
export async function POST(request: Request) {
  ...
}
```

#### Request Data

The function begins by parsing the JSON data from the request. It expects the following properties:

- `userInput`: a string representing the user's input
- `fileIds`: an array of string file IDs
- `embeddingsProvider`: a string representing the chosen embedding provider ("openai" or "local")
- `sourceCount`: a number representing the number of sources to match

```ts
const json = await request.json()
const { userInput, fileIds, embeddingsProvider, sourceCount } = json as {
  userInput: string
  fileIds: string[]
  embeddingsProvider: "openai" | "local"
  sourceCount: number
}
```

#### Database Connection

The function then creates a new Supabase client using environment variables:

```ts
const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

#### Embedding Generation

Depending on the `embeddingsProvider` selected, the function generates embeddings using either OpenAI or a local method:

```ts
if (embeddingsProvider === "openai") {
  ...
} else if (embeddingsProvider === "local") {
  ...
}
```

#### Similarity Calculation

The function then retrieves the most similar chunks of data from the database, based on the generated embeddings:

```ts
const mostSimilarChunks = chunks?.sort(
  (a, b) => b.similarity - a.similarity
)
```

#### Response

Finally, the function returns a response with the most similar chunks of data, or an error message if an error occurred:

```ts
return new Response(JSON.stringify({ results: mostSimilarChunks }), {
  status: 200
})
...
return new Response(JSON.stringify({ message: errorMessage }), {
  status: errorCode
})
```

## Error Handling

The function includes a try-catch block to handle any errors that may occur during execution. If an error occurs, the function returns a response with a status of 500 and a message indicating that an unexpected error occurred. If the error includes a specific message, that message is included in the response instead.