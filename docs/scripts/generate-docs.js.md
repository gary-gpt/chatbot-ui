---
source: scripts/generate-docs.js
generated: '2025-06-08T13:21:01.631Z'
tags: []
hash: a6f56e2f1d1172dfbd84668792f1e1538183323ffab13013641f69103544f705
---
# Documentation

The script is used to generate documentation for all files in the project that match the allowed extensions. The documentation is written to markdown files in the output folder.

## Dependencies

- `dotenv`: A zero-dependency module that loads environment variables from a `.env.local` file into `process.env`.
- `fs`: The built-in Node.js file system module to handle file-related operations.
- `path`: The built-in Node.js path module to handle file paths.
- `generateMarkdownFromCode`: A custom utility function to generate markdown from source code.

## Constants

- `ROOT_DIR`: The root directory of the project.
- `OUTPUT_DIR`: The directory where the generated documentation will be written.
- `INCLUDE_EXTENSIONS`: An array of file extensions that are eligible for documentation generation.
- `EXCLUDE_DIRS`: An array of directories that are excluded from the documentation generation process.

## Functions

### `getAllFiles(dirPath, arrayOfFiles = [])`

This function recursively finds all files in the provided directory path that match the allowed extensions. It returns an array of file paths.

### `writeDocs(filePath, docs)`

This function writes the provided documentation to a markdown file in the output folder. The name of the markdown file is based on the relative path of the source file.

### `generateDocs()`

This is the main function that generates the documentation. It finds all eligible files, generates the documentation for each file, and writes the documentation to a markdown file in the output folder. It skips test files and empty files.

## Execution

The script is executed by calling the `generateDocs()` function.

## Errors and Warnings

The script logs warnings when it skips a test file or an empty file, and logs an error when it encounters a problem while processing a file. It also logs a message when it successfully documents a file, and when it has finished generating the documentation.
