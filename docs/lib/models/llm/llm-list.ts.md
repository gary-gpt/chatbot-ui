---
source: lib/models/llm/llm-list.ts
generated: '2025-06-08T13:21:01.658Z'
tags: []
hash: e34a814177b7bf865cd199873ca637878f1402be253eb0d0426d5f186ded6e7d
---
# Source Code Documentation

This source code file is responsible for importing and exporting lists of Language Learning Models (LLMs) from various sources.

## Imports

The file imports the `LLM` type from the "@/types" directory. This type is used to define the structure of the LLM objects within the lists.

It also imports six different LLM lists:

1. `ANTHROPIC_LLM_LIST` from "./anthropic-llm-list"
2. `GOOGLE_LLM_LIST` from "./google-llm-list"
3. `MISTRAL_LLM_LIST` from "./mistral-llm-list"
4. `GROQ_LLM_LIST` from "./groq-llm-list"
5. `OPENAI_LLM_LIST` from "./openai-llm-list"
6. `PERPLEXITY_LLM_LIST` from "./perplexity-llm-list"

These lists contain LLMs from different sources or providers.

## Exports

The file exports two constants:

### `LLM_LIST`

`LLM_LIST` is an array that combines all the imported LLM lists into one. The spread operator (`...`) is used to insert the elements of each list into `LLM_LIST`.

### `LLM_LIST_MAP`

`LLM_LIST_MAP` is an object where each key is a string representing the name of a source or provider, and each value is the corresponding LLM list. This object provides a way to access the LLM list from a specific source by using the source's name as a key.

## Usage

These exports can be used in other parts of the application to access the LLMs. For example, `LLM_LIST` could be used to display all LLMs in a single view, while `LLM_LIST_MAP` could be used to display LLMs from a specific source.
