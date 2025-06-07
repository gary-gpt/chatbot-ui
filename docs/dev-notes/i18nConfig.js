# File: `/chatbot-ui/i18nConfig.js`

## Purpose

This file defines the internationalization (i18n) settings for the application — essentially determining which languages the app supports and what the default language should be.

This is used by the **Next.js App Router** to:
- Route content based on locale (`/en`, `/es`, etc.)
- Automatically detect or fallback to a default language
- Potentially integrate with middleware that handles language redirects

## Exported Object

### `i18n`
An object with the following properties:

- **`locales`**:  
  An array of supported locale codes.  
  In this case: `['en', 'es']` (English and Spanish).

- **`defaultLocale`**:  
  The fallback language if no language is detected.  
  Here, it's `'en'` for English.

## Usage

This file is typically imported by middleware or config files in a multilingual Next.js setup, such as:

```js
import { i18n } from './i18nConfig';

