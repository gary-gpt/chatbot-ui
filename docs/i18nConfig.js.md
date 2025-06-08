# i18nConfig.js

This module exports a configuration object for internationalization (i18n) settings.

## Configuration Object

The configuration object, `i18nConfig`, contains the following properties:

- `defaultLocale`: This is a string that represents the default locale to be used. The default locale is set to English (`en`).

- `locales`: This is an array of strings where each string represents a supported locale. The supported locales include:

  - Arabic (`ar`)
  - Bengali (`bn`)
  - German (`de`)
  - English (`en`)
  - Spanish (`es`)
  - French (`fr`)
  - Hebrew (`he`)
  - Indonesian (`id`)
  - Italian (`it`)
  - Japanese (`ja`)
  - Korean (`ko`)
  - Portuguese (`pt`)
  - Russian (`ru`)
  - Sinhalese (`si`)
  - Swedish (`sv`)
  - Telugu (`te`)
  - Vietnamese (`vi`)
  - Chinese (`zh`)

## Usage

Import the `i18nConfig` object into your application to access the internationalization settings.

```javascript
const i18nConfig = require('./path/to/i18nConfig');
```

Replace `'./path/to/i18nConfig'` with the actual path to the `i18nConfig.js` file in your project.

## Note

Ensure that all locales specified in the `locales` array have corresponding translation files in your application. The application might throw errors if it cannot find the translation files for the specified locales.