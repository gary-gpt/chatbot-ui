# Documentation

## Module: File Chunker

This module provides a utility function for splitting file content into manageable chunks for further processing. It is particularly useful when dealing with large files that need to be processed in smaller parts due to memory or processing constraints.

### Constants

- `MAX_CHUNK_SIZE`: This constant defines the maximum size of each chunk. It is currently set to 3000, but can be adjusted based on the token budget or other requirements.

### Functions

#### `chunkFile(content, filePath = '')`

This function splits the content of a file into chunks. It uses a line-based greedy algorithm to accumulate lines until the maximum chunk size is reached.

##### Parameters

- `content`: The content of the file to be chunked. This should be a string. If no content is provided or the content is not a string, a warning will be logged and an empty array will be returned.
- `filePath` (optional): The path of the file being chunked. This is used for logging purposes.

##### Returns

An array of strings, where each string is a chunk of the original content. If no chunks could be created (e.g., because the content was empty or not a string), an empty array is returned.

##### Behavior

The function splits the content into lines and iterates over them. For each line, it checks if adding the line to the current chunk would exceed the maximum chunk size. If so, it pushes the current chunk to the array of chunks and starts a new chunk with the current line. If not, it adds the line to the current chunk.

After all lines have been processed, any remaining content in the current chunk is also pushed to the array of chunks.

If no chunks were created, a warning is logged. If chunks were created, a log message is printed indicating the number of chunks and the file path.

##### Example

```javascript
import { chunkFile } from 'file-chunker';

const content = 'This is a test.\nThis is only a test.';
const chunks = chunkFile(content, '/path/to/test.txt');

console.log(chunks);
// Output: ['This is a test.', 'This is only a test.']
```