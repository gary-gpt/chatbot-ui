# Source Code Documentation

This source code file exports modules from various file formats and defines constants related to chunk sizes.

## Exports

The following modules are exported from this source code file:

- `csv`: This module handles operations related to CSV (Comma Separated Values) files.
- `docx`: This module handles operations related to DOCX (Microsoft Word) files.
- `json`: This module handles operations related to JSON (JavaScript Object Notation) files.
- `md`: This module handles operations related to MD (Markdown) files.
- `pdf`: This module handles operations related to PDF (Portable Document Format) files.
- `txt`: This module handles operations related to TXT (Plain Text) files.

## Constants

The following constants are defined in this source code file:

- `CHUNK_SIZE`: This constant defines the size of each chunk of data that is being processed. The value is set to `4000`.
- `CHUNK_OVERLAP`: This constant defines the overlap between two consecutive chunks. The value is set to `200`.

These constants are typically used in scenarios where data is processed in chunks (for example, when reading a large file) to ensure that the system does not run out of memory. The overlap is used to ensure that no data is missed during the chunking process.