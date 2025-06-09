---
source: lib/consume-stream.ts
generated: 2025-06-08T22:30:39.702Z
tags: []
hash: 3f8b97864b5f2507785477aa4ae70daf11390b8ac8044af9d8541616e16a90af
---

# Consume Stream Function Documentation

This document describes the `consumeReadableStream` function found in the file `/Users/garymason/chatbot-ui/lib/consume-stream.ts`.

## Function Purpose

The `consumeReadableStream` function is designed to consume a ReadableStream of Uint8Array data. It reads the stream chunk by chunk, decodes each chunk from a Uint8Array to a string, and then passes the decoded string to a callback function. This function also supports aborting the stream reading operation via an AbortSignal.

## Function Signature

```ts
export async function consumeReadableStream(
  stream: ReadableStream<Uint8Array>,
  callback: (chunk: string) => void,
  signal: AbortSignal
): Promise<void>
```

### Parameters

- `stream`: A ReadableStream of Uint8Array. This is the stream that is to be consumed.
- `callback`: A function that takes a string as its argument. This function is called for each chunk of data read from the stream.
- `signal`: An AbortSignal. This is used to abort the stream reading operation.

## Function Logic

1. The function begins by getting a reader from the stream and creating a new TextDecoder.

```ts
  const reader = stream.getReader()
  const decoder = new TextDecoder()
```

2. An event listener is added to the AbortSignal. If an "abort" event is fired, the reader's `cancel` method is called, effectively stopping the stream reading operation.

```ts
  signal.addEventListener("abort", () => reader.cancel(), { once: true })
```

3. The function enters a loop where it continually reads from the stream.

```ts
  while (true) {
    const { done, value } = await reader.read()
```

4. If the `done` property is true, the loop is broken, ending the stream reading operation.

```ts
    if (done) {
      break
    }
```

5. If a value is read from the stream, it is decoded into a string and passed to the callback function.

```ts
    if (value) {
        callback(decoder.decode(value, { stream: true }))
    }
```

6. If an error occurs during the stream reading operation, it is caught and logged to the console. If the operation was aborted, a specific error message is logged.

```ts
  } catch (error) {
    if (signal.aborted) {
      console.error("Stream reading was aborted:", error)
    } else {
      console.error("Error consuming stream:", error)
    }
```

7. Finally, regardless of whether an error occurred or not, the reader's lock on the stream is released.

```ts
  } finally {
    reader.releaseLock()
  }
```

This function is asynchronous and returns a Promise that resolves to void. It does not return any value.