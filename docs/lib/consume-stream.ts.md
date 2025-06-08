---
source: lib/consume-stream.ts
generated: '2025-06-08T13:21:01.630Z'
tags: []
hash: 362bb0e706d49c80926cd0a0c25f5514f7b7e3073d0269408555dbe6249d406e
---
# Documentation

## Function: consumeReadableStream

This function reads data from a readable stream, decodes it, and then passes it to a callback function. It also allows for the reading process to be aborted using an AbortSignal.

### Syntax

```javascript
consumeReadableStream(stream, callback, signal)
```

### Parameters

- `stream` (ReadableStream<Uint8Array>): The readable stream from which to read data. The stream should contain data in the form of Uint8Array.

- `callback` (Function): A callback function that is called for each chunk of data read from the stream. The chunk of data is passed to the callback function as a string.

- `signal` (AbortSignal): An AbortSignal object that allows for the reading process to be aborted.

### Return Value

This function returns a Promise that resolves to undefined when the reading process is completed or aborted.

### Behavior

The function begins by getting a reader from the stream and creating a TextDecoder. It then sets up an event listener on the AbortSignal that will cancel the reading process if the signal is aborted.

Next, the function enters a loop where it continuously reads data from the stream. For each chunk of data read, it decodes the data into a string and passes it to the callback function. The loop continues until all data has been read from the stream or the reading process is aborted.

If an error occurs while reading from the stream, the function will log the error to the console. If the reading process was aborted, it will log a message indicating that the stream reading was aborted. Otherwise, it will log a message indicating that an error occurred while consuming the stream.

Finally, the function releases the lock on the reader, allowing it to be used again.

### Example

```javascript
const stream = getReadableStream();
const callback = (chunk) => console.log(chunk);
const controller = new AbortController();
const signal = controller.signal;

consumeReadableStream(stream, callback, signal)
  .then(() => console.log('Reading completed'))
  .catch((error) => console.error('Error:', error));
```

In this example, `getReadableStream()` is a hypothetical function that returns a readable stream. The callback function simply logs each chunk of data to the console. An AbortController is created and its signal is passed to the `consumeReadableStream()` function. If the reading process needs to be aborted, `controller.abort()` can be called.
