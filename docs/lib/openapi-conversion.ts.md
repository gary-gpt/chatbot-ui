---
source: lib/openapi-conversion.ts
generated: '2025-06-08T13:21:01.631Z'
tags: []
hash: 0a727be34d5bebfaf44b1da9670ebe3fd10622d06812601c8174e17da7faee81
---
# OpenAPI Validator and Converter

This module provides functionality to validate OpenAPI specifications and convert them into a more usable format.

## Interfaces

### OpenAPIData

This interface represents the structure of the converted OpenAPI specification.

```typescript
interface OpenAPIData {
  info: {
    title: string
    description: string
    server: string
  }
  routes: {
    path: string
    method: string
    operationId: string
    requestInBody?: boolean
  }[]
  functions: any
}
```

## Functions

### validateOpenAPI

This function validates an OpenAPI specification. It checks for the presence of required fields and throws an error if any are missing.

```typescript
export const validateOpenAPI = async (openapiSpec: any) => { ... }
```

### openapiToFunctions

This function converts an OpenAPI specification into a more usable format. It creates an array of functions and routes based on the specification.

```typescript
export const openapiToFunctions = async (
  openapiSpec: any
): Promise<OpenAPIData> => { ... }
```

## Usage

To use these functions, import them from the module:

```typescript
import { validateOpenAPI, openapiToFunctions } from './openapi';
```

Then, you can validate an OpenAPI specification:

```typescript
await validateOpenAPI(openapiSpec);
```

And convert it to a more usable format:

```typescript
const openapiData = await openapiToFunctions(openapiSpec);
```

## Dependencies

This module depends on the "@apidevtools/json-schema-ref-parser" package to dereference JSON Schema `$ref` pointers.
