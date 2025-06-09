---
source: prettier.config.cjs
generated: 2025-06-08T22:42:02.510Z
tags: []
hash: 8091a4ff7156b246e32923c6aaa5b070bf54c07cfacb6d74f0e1550fc00ffba8
---

# Prettier Configuration File Documentation

This is a documentation for the `prettier.config.cjs` file located at `/Users/garymason/chatbot-ui/`. This file is used to configure Prettier, a code formatter, to ensure consistent code style across the project.

## Code Summary

```ts
/** @type {import('prettier').Config} */
module.exports = {
  // code configuration
}
```

The code exports a configuration object for Prettier. The `@type` comment at the top of the file is a TypeScript type annotation that tells the TypeScript compiler that the exported object matches the `Config` type from the `prettier` package.

## Configuration Options

### General Options

```ts
endOfLine: 'lf',
semi: false,
useTabs: false,
singleQuote: false,
arrowParens: 'avoid',
tabWidth: 2,
trailingComma: 'none',
```

These options define general formatting rules:

- `endOfLine`: Defines the line ending style. 'lf' stands for Line Feed, which is the standard for Unix-like systems.
- `semi`: Determines whether to add a semicolon at the end of every statement. `false` means no semicolons are used.
- `useTabs`: Whether to indent lines with tabs or spaces. `false` means spaces are used.
- `singleQuote`: Whether to use single quotes for strings. `false` means double quotes are used.
- `arrowParens`: Controls the use of parentheses around arrow function parameters. 'avoid' means parentheses are omitted when possible.
- `tabWidth`: The number of spaces per indentation level.
- `trailingComma`: Controls the use of trailing commas. 'none' means no trailing commas are used.

### Import Order Options

```ts
importOrder: [ /* array of regex patterns */ ],
importOrderSeparation: false,
importOrderSortSpecifiers: true,
importOrderBuiltinModulesToTop: true,
importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
importOrderMergeDuplicateImports: true,
importOrderCombineTypeAndValueImports: true
```

These options control the ordering and separation of import statements:

- `importOrder`: An array of regular expression patterns that define the order of import statements.
- `importOrderSeparation`: Whether to separate groups of imports with a blank line. `false` means no separation.
- `importOrderSortSpecifiers`: Whether to sort specifiers in import statements. `true` means they are sorted.
- `importOrderBuiltinModulesToTop`: Whether to place built-in modules at the top of the import list. `true` means they are placed at the top.
- `importOrderParserPlugins`: An array of parser plugins to use.
- `importOrderMergeDuplicateImports`: Whether to merge duplicate import statements. `true` means they are merged.
- `importOrderCombineTypeAndValueImports`: Whether to combine type and value imports from the same module into a single import statement. `true` means they are combined.