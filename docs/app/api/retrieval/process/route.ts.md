---
source: app/api/retrieval/process/route.ts
generated: 2025-06-08T21:24:24.392Z
tags: []
hash: 25f9360d73bcc936e80a874dd25027681c4ccb5e8cec8a27398265bfa8065708
---

# Documentation for `route.ts`

This file is located at `/Users/garymason/chatbot-ui/app/api/retrieval/process/route.ts`. It is written in TypeScript and is used to handle the processing of different file types and generating embeddings for a chatbot UI.

## Code Summary

The `POST` function is an asynchronous function that handles the processing of different file types and generates embeddings for the content. It uses the Supabase client to interact with the database and retrieve file metadata. It also uses the OpenAI API to generate embeddings if the provider is set to "openai". If the provider is set to "local", it will generate local embeddings.

## Code Breakdown

```ts
import { generateLocalEmbedding } from "@/lib/generate-local-embedding"
import {
  processCSV,
  processJSON,
  processMarkdown,
  processPdf,
  processTxt
} from "@/lib/retrieval/processing"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { Database } from "@/supabase/types"
import { FileItemChunk } from "@/types"
import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"
import OpenAI from "openai"
```

The above code imports necessary libraries, functions, and types that are used in the `POST` function.

```ts
export async function POST(req: Request) {
```

The `POST` function is exported for use in other modules. It is an asynchronous function that takes a `Request` object as an argument.

```ts
const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

A Supabase client is created using the Supabase URL and service role key from the environment variables.

```ts
const profile = await getServerProfile()
```

The server profile is retrieved using the `getServerProfile` function.

```ts
const formData = await req.formData()
```

The form data from the request is retrieved.

```ts
const file_id = formData.get("file_id") as string
const embeddingsProvider = formData.get("embeddingsProvider") as string
```

The file ID and embeddings provider are retrieved from the form data.

```ts
const { data: fileMetadata, error: metadataError } = await supabaseAdmin
  .from("files")
  .select("*")
  .eq("id", file_id)
  .single()
```

The file metadata is retrieved from the database using the file ID. If there is an error, it is caught and stored in `metadataError`.

```ts
if (metadataError) {
  throw new Error(
    `Failed to retrieve file metadata: ${metadataError.message}`
  )
}
```

If there is an error retrieving the file metadata, an error is thrown with a message.

```ts
if (!fileMetadata) {
  throw new Error("File not found")
}
```

If the file metadata is not found, an error is thrown with a message.

```ts
if (fileMetadata.user_id !== profile.user_id) {
  throw new Error("Unauthorized")
}
```

If the user ID in the file metadata does not match the user ID in the server profile, an error is thrown with a message.

```ts
const { data: file, error: fileError } = await supabaseAdmin.storage
  .from("files")
  .download(fileMetadata.file_path)
```

The file is downloaded from the storage using the file path from the metadata. If there is an error, it is caught and stored in `fileError`.

```ts
if (fileError)
  throw new Error(`Failed to retrieve file: ${fileError.message}`)
```

If there is an error retrieving the file, an error is thrown with a message.

```ts
const fileBuffer = Buffer.from(await file.arrayBuffer())
const blob = new Blob([fileBuffer])
const fileExtension = fileMetadata.name.split(".").pop()?.toLowerCase()
```

The file is converted to a buffer and then to a blob. The file extension is retrieved from the file name.

```ts
if (embeddingsProvider === "openai") {
  try {
    if (profile.use_azure_openai) {
      checkApiKey(profile.azure_openai_api_key, "Azure OpenAI")
    } else {
      checkApiKey(profile.openai_api_key, "OpenAI")
    }
  } catch (error: any) {
    error.message =
      error.message +
      ", make sure it is configured or else use local embeddings"
    throw error
  }
}
```

If the embeddings provider is "openai", the API key is checked. If there is an error, it is caught and a message is added to the error before it is thrown.

```ts
let chunks: FileItemChunk[] = []

switch (fileExtension) {
  case "csv":
    chunks = await processCSV(blob)
    break
  case "json":
    chunks = await processJSON(blob)
    break
  case "md":
    chunks = await processMarkdown(blob)
    break
  case "pdf":
    chunks = await processPdf(blob)
    break
  case "txt":
    chunks = await processTxt(blob)
    break
  default:
    return new NextResponse("Unsupported file type", {
      status: 400
    })
}
```

The file is processed based on its extension. If the extension is not supported, a response is returned with a status of 400 and a message.

```ts
let embeddings: any = []

let openai
if (profile.use_azure_openai) {
  openai = new OpenAI({
    apiKey: profile.azure_openai_api_key || "",
    baseURL: `${profile.azure_openai_endpoint}/openai/deployments/${profile.azure_openai_embeddings_id}`,
    defaultQuery: { "api-version": "2023-12-01-preview" },
    defaultHeaders: { "api-key": profile.azure_openai_api_key }
  })
} else {
  openai = new OpenAI({
    apiKey: profile.openai_api_key || "",
    organization: profile.openai_organization_id
  })
}
```

An OpenAI client is created based on the server profile.

```ts
if (embeddingsProvider === "openai") {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: chunks.map(chunk => chunk.content)
  })

  embeddings = response.data.map((item: any) => {
    return item.embedding
  })
} else if (embeddingsProvider === "local") {
  const embeddingPromises = chunks.map(async chunk => {
    try {
      return await generateLocalEmbedding(chunk.content)
    } catch (error) {
      console.error(`Error generating embedding for chunk: ${chunk}`, error)

      return null
    }
  })

  embeddings = await Promise.all(embeddingPromises)
}
```

If the embeddings provider is "openai", embeddings are created using the OpenAI API. If the provider is "local", local embeddings are generated.

```ts
const file_items = chunks.map((chunk, index) => ({
  file_id,
  user_id: profile.user_id,
  content: chunk.content,
  tokens: chunk.tokens,
  openai_embedding:
    embeddingsProvider === "openai"
      ? ((embeddings[index] || null) as any)
      : null,
  local_embedding:
    embeddingsProvider === "local"
      ? ((embeddings[index] || null) as any)
      : null
}))

await supabaseAdmin.from("file_items").upsert(file_items)
```

The file items are created from the chunks and embeddings and then upserted into the database.

```ts
const totalTokens = file_items.reduce((acc, item) => acc + item.tokens, 0)

await supabaseAdmin
  .from("files")
  .update({ tokens: totalTokens })
  .eq("id", file_id)
```

The total number of tokens is calculated and the file record is updated in the database with the total tokens.

```ts
return new NextResponse("Embed Successful", {
  status: 200
})
```

A response is returned with a status of 200 and a message.

```ts
} catch (error: any) {
  console.log(`Error in retrieval/process: ${error.stack}`)
  const errorMessage = error?.message || "An unexpected error occurred"
  const errorCode = error.status || 500
  return new Response(JSON.stringify({ message: errorMessage }), {
    status: errorCode
  })
}
```

If there is an error at any point in the function, it is caught and logged. A response is returned with a status of 500 and an error message.