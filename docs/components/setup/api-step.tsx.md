---
source: components/setup/api-step.tsx
generated: 2025-06-08T21:38:06.266Z
tags: []
hash: 4f6aa0366176abb2daa81f006169cbce317a6f1b8f00386194126ae2118d1edf
---

# API Step Component Documentation

This document provides an overview of the `APIStep` component in the file `/Users/garymason/chatbot-ui/components/setup/api-step.tsx`.

## Overview

The `APIStep` component is a functional component that renders a form for the user to input various API keys and settings. These keys are used to configure the chatbot's integration with various AI services such as OpenAI, Azure OpenAI, Anthropic, Google Gemini, Mistral, Groq, Perplexity, and OpenRouter.

## Interface: APIStepProps

The `APIStep` component accepts a set of properties defined by the `APIStepProps` interface. These properties include the current values of various API keys and settings, as well as callback functions to handle changes to these values.

```ts
interface APIStepProps {
  // API keys and settings
  openaiAPIKey: string
  openaiOrgID: string
  azureOpenaiAPIKey: string
  azureOpenaiEndpoint: string
  azureOpenai35TurboID: string
  azureOpenai45TurboID: string
  azureOpenai45VisionID: string
  azureOpenaiEmbeddingsID: string
  anthropicAPIKey: string
  googleGeminiAPIKey: string
  mistralAPIKey: string
  groqAPIKey: string
  perplexityAPIKey: string
  useAzureOpenai: boolean
  openrouterAPIKey: string

  // Callback functions to handle changes to the above values
  onOpenrouterAPIKeyChange: (value: string) => void
  onOpenaiAPIKeyChange: (value: string) => void
  onOpenaiOrgIDChange: (value: string) => void
  onAzureOpenaiAPIKeyChange: (value: string) => void
  onAzureOpenaiEndpointChange: (value: string) => void
  onAzureOpenai35TurboIDChange: (value: string) => void
  onAzureOpenai45TurboIDChange: (value: string) => void
  onAzureOpenai45VisionIDChange: (value: string) => void
  onAzureOpenaiEmbeddingsIDChange: (value: string) => void
  onAnthropicAPIKeyChange: (value: string) => void
  onGoogleGeminiAPIKeyChange: (value: string) => void
  onMistralAPIKeyChange: (value: string) => void
  onGroqAPIKeyChange: (value: string) => void
  onPerplexityAPIKeyChange: (value: string) => void
  onUseAzureOpenaiChange: (value: boolean) => void
}
```

## Component Structure

The `APIStep` component renders a series of input fields for the user to enter their API keys and settings. Each input field is accompanied by a label and is pre-filled with the current value of the corresponding setting.

The component also includes a button that allows the user to switch between using the standard OpenAI and Azure OpenAI. The labels and placeholders of the input fields update dynamically based on the current choice.

## Example Usage

```ts
<APIStep
  openaiAPIKey={openaiAPIKey}
  openaiOrgID={openaiOrgID}
  azureOpenaiAPIKey={azureOpenaiAPIKey}
  azureOpenaiEndpoint={azureOpenaiEndpoint}
  azureOpenai35TurboID={azureOpenai35TurboID}
  azureOpenai45TurboID={azureOpenai45TurboID}
  azureOpenai45VisionID={azureOpenai45VisionID}
  azureOpenaiEmbeddingsID={azureOpenaiEmbeddingsID}
  anthropicAPIKey={anthropicAPIKey}
  googleGeminiAPIKey={googleGeminiAPIKey}
  mistralAPIKey={mistralAPIKey}
  groqAPIKey={groqAPIKey}
  perplexityAPIKey={perplexityAPIKey}
  useAzureOpenai={useAzureOpenai}
  openrouterAPIKey={openrouterAPIKey}
  onOpenrouterAPIKeyChange={handleOpenrouterAPIKeyChange}
  onOpenaiAPIKeyChange={handleOpenaiAPIKeyChange}
  onOpenaiOrgIDChange={handleOpenaiOrgIDChange}
  onAzureOpenaiAPIKeyChange={handleAzureOpenaiAPIKeyChange}
  onAzureOpenaiEndpointChange={handleAzureOpenaiEndpointChange}
  onAzureOpenai35TurboIDChange={handleAzureOpenai35TurboIDChange}
  onAzureOpenai45TurboIDChange={handleAzureOpenai45TurboIDChange}
  onAzureOpenai45VisionIDChange={handleAzureOpenai45VisionIDChange}
  onAzureOpenaiEmbeddingsIDChange={handleAzureOpenaiEmbeddingsIDChange}
  onAnthropicAPIKeyChange={handleAnthropicAPIKeyChange}
  onGoogleGeminiAPIKeyChange={handleGoogleGeminiAPIKeyChange}
  onMistralAPIKeyChange={handleMistralAPIKeyChange}
  onGroqAPIKeyChange={handleGroqAPIKeyChange}
  onPerplexityAPIKeyChange={handlePerplexityAPIKeyChange}
  onUseAzureOpenaiChange={handleUseAzureOpenaiChange}
/>
```
In the above example, `handleOpenaiAPIKeyChange`, `handleOpenaiOrgIDChange`, etc. are functions defined in the parent component that update the state of the parent component when the user changes the value of an input field.