**📄 Source File:** `/lib/consume-stream.ts`  
**🕒 Generated:** 2025-06-07 14:21:19 UTC  
**🤖 Model:** gpt-4

---

# consumeReadableStream.ts

This TypeScript file exports an asynchronous function `consumeReadableStream`. This function is designed to consume a `ReadableStream` of `Uint8Array` data, decode it into a string, and then pass each chunk of data to a callback function. It also accepts an `AbortSignal` to allow for the cancellation of the stream reading operation.

## Function: consumeReadableStream

```typescript
export async function consumeReadableStream(
  stream: ReadableStream<Uint8Array>,
  callback: (chunk: string) => void,
  signal: AbortSignal
): Promise<void>
```

### Parameters

- `stream` (ReadableStream<Uint8Array>): The readable stream to be consumed. It is expected to contain `Uint8Array` data.
- `callback` ((chunk: string) => void): A callback function that will be called with each chunk of data as it is read from the stream. The chunk of data will be passed as a string.
- `signal` (AbortSignal): An AbortSignal object that allows you to communicate with a DOM request (such as Fetch) and abort it if required.

### Behavior

The function first creates a reader from the provided stream and a `TextDecoder` to decode the `Uint8Array` data into a string. It then sets up an event listener on the `AbortSignal` to cancel the reader if an abort event is fired.

The function then enters a loop where it continuously reads from the stream. If the stream is done, it breaks the loop. If a value is read from the stream, it decodes it into a string and passes it to the callback function.

If an error occurs during the reading and decoding process, it checks if the `AbortSignal` has been aborted. If so, it logs an error message indicating that the stream reading was aborted. If not, it logs an error message indicating that an error occurred while consuming the stream.

Finally, regardless of whether an error occurred or not, it releases the lock on the reader.

### Usage

This function can be used to consume a `ReadableStream` of `Uint8Array` data, process each chunk of data as it is read, and handle any errors that occur during the process. It also allows for the reading operation to be aborted if necessary. The callback function allows you to specify what to do with each chunk of data as it is read.