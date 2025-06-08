# APIStep Component Documentation

## Overview

The `APIStep` component is a functional component that renders a form for inputting various API keys and configuration details. It supports both Azure OpenAI and Standard OpenAI, with additional support for other APIs such as Anthropic, Google Gemini, Mistral, Groq, Perplexity, and OpenRouter.

## Props

The `APIStep` component accepts the following props:

- `openaiAPIKey`: A string representing the OpenAI API Key.
- `openaiOrgID`: A string representing the OpenAI Organization ID.
- `azureOpenaiAPIKey`: A string representing the Azure OpenAI API Key.
- `azureOpenaiEndpoint`: A string representing the Azure OpenAI Endpoint.
- `azureOpenai35TurboID`: A string representing the Azure OpenAI GPT-3.5 Turbo ID.
- `azureOpenai45TurboID`: A string representing the Azure OpenAI GPT-4.5 Turbo ID.
- `azureOpenai45VisionID`: A string representing the Azure OpenAI GPT-4.5 Vision ID.
- `azureOpenaiEmbeddingsID`: A string representing the Azure OpenAI Embeddings ID.
- `anthropicAPIKey`: A string representing the Anthropic API Key.
- `googleGeminiAPIKey`: A string representing the Google Gemini API Key.
- `mistralAPIKey`: A string representing the Mistral API Key.
- `groqAPIKey`: A string representing the Groq API Key.
- `perplexityAPIKey`: A string representing the Perplexity API Key.
- `useAzureOpenai`: A boolean indicating whether to use Azure OpenAI or Standard OpenAI.
- `openrouterAPIKey`: A string representing the OpenRouter API Key.

The component also accepts a series of callback functions for handling changes to each of the above props. Each callback function accepts a single parameter, which is the new value for the corresponding prop.

## Usage

The `APIStep` component is used to render a form for inputting various API keys and configuration details. The user can switch between Azure OpenAI and Standard OpenAI using a button. Depending on the selected option, the form will display different fields for inputting the corresponding configuration details. The component also provides fields for inputting API keys for other APIs. Each field is accompanied by a label and a placeholder. The value of each field is controlled by the corresponding prop, and changes to the field values are handled by the corresponding callback functions.