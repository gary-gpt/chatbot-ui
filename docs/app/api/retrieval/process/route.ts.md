---
source: app/api/retrieval/process/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: 8b124001cc32446cbfaa2b9f9dcf417d33843a4db7dd2b852f226a0f997e40ce
---
# POST Function

The `POST` function is an asynchronous function that handles the POST request.

## Import Statements

The function imports several modules and functions:

- `generateLocalEmbedding` from "@/lib/generate-local-embedding"
- `processCSV`, `processJSON`, `processMarkdown`, `processPdf`, `processTxt` from "@/lib/retrieval/processing"
- `checkApiKey`, `getServerProfile` from "@/lib/server/server-chat-helpers"
- `Database` from "@/supabase/types"
- `FileItemChunk` from "@/types"
- `createClient` from "@supabase/supabase-js"
- `NextResponse` from "next/server"
- `OpenAI` from "openai"

## Functionality

The function starts by creating a Supabase client using the Supabase URL and service role key from the environment variables.

It then retrieves the server profile and form data from the request.

The function retrieves the file metadata from the Supabase database using the file_id from the form data. If the file metadata cannot be retrieved or the file does not exist, it throws an error.

The function then checks if the user_id from the file metadata matches the user_id from the server profile. If they do not match, it throws an "Unauthorized" error.

The function retrieves the file from the Supabase storage using the file path from the file metadata. If the file cannot be retrieved, it throws an error.

The function then creates a Blob from the file and determines the file extension.

If the embeddings provider from the form data is "openai", the function checks if the Azure OpenAI API key or the OpenAI API key from the server profile is valid.

The function then processes the file based on its extension using the appropriate processing function. If the file extension is not supported, it returns a response with a status of 400 and a message of "Unsupported file type".

The function then generates embeddings for the file chunks. If the embeddings provider is "openai", it uses the OpenAI API to generate the embeddings. If the embeddings provider is "local", it uses the `generateLocalEmbedding` function to generate the embeddings.

The function then creates an array of file items from the file chunks and embeddings and upserts the file items to the "file_items" table in the Supabase database.

The function updates the total number of tokens in the file in the "files" table in the Supabase database.

Finally, the function returns a response with a status of 200 and a message of "Embed Successful".

If any errors occur during the execution of the function, it logs the error stack, creates an error message and error code, and returns a response with the error code and error message.
