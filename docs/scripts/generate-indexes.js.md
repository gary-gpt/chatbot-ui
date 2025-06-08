---
source: scripts/generate-indexes.js
generated: '2025-06-08T13:21:01.632Z'
tags: []
hash: c7d96133e715b009d162ebd03bbefe6d25eb6f7914907b43806706780589d8c9
---
# Documentation for `generate-indexes.js`

This script is used to generate indexes for Markdown files in a project. It recursively walks through all the folders in the root directory, finds all the Markdown files, and generates an index for each folder and a global index for the entire project. It also creates a JSON file with metadata about each Markdown file.

## Dependencies

- `fs`: Node.js built-in module for file system operations.
- `path`: Node.js built-in module for handling and transforming file paths.

## Constants

- `rootDir`: The root directory where the script starts looking for Markdown files.
- `outputJson`: The path to the output JSON file that will contain metadata about each Markdown file.
- `globalIndexMd`: The path to the global index Markdown file.

## Functions

### `walkFolders(dir)`

Recursively walks through all the folders in the given directory and returns an array of all the folder paths.

### `getMarkdownFiles(dir)`

Returns an array of all the Markdown files in the given directory, excluding `index.md` and `index.json`.

### `getTitleAndDescription(content)`

Extracts the title and description from the given Markdown content. The title is the first line of the content, and the description is the first non-empty line after the title.

### `wordCount(content)`

Counts the number of words in the given content, ignoring Markdown syntax characters.

### `generateIndexes()`

Generates an index for each folder and a global index for the entire project. It also creates a JSON file with metadata about each Markdown file.

## Execution

The script is executed by calling the `generateIndexes()` function at the end of the file.
