**📄 Source File:** `/lib/openapi-conversion.ts`  
**🕒 Generated:** 2025-06-07 14:26:01 UTC  
**🤖 Model:** gpt-4

---

# openapi.ts

This TypeScript module provides functionality to validate and convert OpenAPI specifications into a more usable format. It exports two main functions: `validateOpenAPI` and `openapiToFunctions`.

## Interface: OpenAPIData

The `OpenAPIData` interface describes the structure of the data returned by the `openapiToFunctions` function. It includes information about the API (`info`), its routes (`routes`), and the functions it provides (`functions`).

## Function: validateOpenAPI

The `validateOpenAPI` function takes an OpenAPI specification as input and validates it. It checks for the presence of required fields and throws an error if any are missing. This includes checks for:

- The `info` field and its `title` and `version` subfields
- A valid URL in the `servers` field
- At least one path in the `paths` field
- Each path starting with a slash
- Each method having an `operationId`
- Each method with a `requestBody` also having `requestBody.content`
- Each object schema having properties

## Function: openapiToFunctions

The `openapiToFunctions` function takes an OpenAPI specification as input and returns a Promise that resolves to an `OpenAPIData` object. This function converts the OpenAPI specification into a more usable format, with information about the API, its routes, and the functions it provides.

The function iterates over the paths in the OpenAPI specification, and for each path, it iterates over the methods. For each method, it:

- Dereferences any `$ref` fields using the `@apidevtools/json-schema-ref-parser` library
- Constructs a function object with the operation ID, description, and parameters schema
- Determines whether the request should be in the body based on the presence of `requestBody`
- Adds the function object to the `functions` array
- Adds a route object to the `routes` array

The function then returns an object with the `info`, `routes`, and `functions`.

## Usage

To use this module, import the functions and call them with an OpenAPI specification. For example:

```typescript
import { validateOpenAPI, openapiToFunctions } from './openapi'

const openapiSpec = {...}  // Your OpenAPI spec here

try {
  validateOpenAPI(openapiSpec)
  const apiData = await openapiToFunctions(openapiSpec)
  console.log(apiData)
} catch (error) {
  console.error(error)
}
```

## Nuances

The `openapiToFunctions` function uses the `@apidevtools/json-schema-ref-parser` library to dereference `$ref` fields in the OpenAPI specification. This means that it can handle complex specifications with references to other parts of the spec.

The function also constructs a parameters schema for each function. This schema includes any request body and parameters defined in the OpenAPI spec. This makes it easier to understand what parameters a function accepts.