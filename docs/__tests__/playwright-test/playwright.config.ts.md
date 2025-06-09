---
source: __tests__/playwright-test/playwright.config.ts
generated: 2025-06-08T21:13:44.178Z
tags: []
hash: 6e77239ee8f3d2912ac2fbf9891c552a6ec24dd0bad57dcfa2e1b20feca0640b
---

# Playwright Configuration File Documentation

This document explains the purpose and logic of the Playwright configuration file located at `/Users/garymason/chatbot-ui/__tests__/playwright-test/playbot.config.ts`.

## Overview

This configuration file is used to define the settings for running tests using Playwright, a Node.js library to automate browser actions for testing purposes. The settings include test directory, parallel execution, retries, workers, reporter, base URL, trace, and projects for major browsers.

## Code Explanation

```ts
import { defineConfig, devices } from '@playwright/test';
```

This line imports the `defineConfig` and `devices` functions from the `@playwright/test` module.

### Environment Variables

The following commented out code is used to read environment variables from a file using the `dotenv` module.

```ts
// require('dotenv').config();
```

### Test Configuration

The `defineConfig` function is used to set up the configuration for the Playwright tests.

```ts
export default defineConfig({
```

#### Test Directory

The `testDir` property is used to specify the directory where the test files are located.

```ts
  testDir: './tests',
```

#### Parallel Execution

The `fullyParallel` property is set to `true` to run tests in files in parallel.

```ts
  fullyParallel: true,
```

#### Forbid Only

The `forbidOnly` property is used to fail the build on CI if `test.only` is accidentally left in the source code.

```ts
  forbidOnly: !!process.env.CI,
```

#### Retries

The `retries` property is used to specify the number of retries on CI.

```ts
  retries: process.env.CI ? 2 : 0,
```

#### Workers

The `workers` property is used to opt out of parallel tests on CI.

```ts
  workers: process.env.CI ? 1 : undefined,
```

#### Reporter

The `reporter` property is used to specify the reporter to use.

```ts
  reporter: 'html',
```

#### Use

The `use` property is used to specify shared settings for all the projects.

```ts
  use: {
    trace: 'on-first-retry',
  },
```

#### Projects

The `projects` property is used to configure projects for major browsers.

```ts
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
```

#### Web Server

The commented out `webServer` property is used to run your local dev server before starting the tests.

```ts
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
```

The configuration is then exported as the default module.

```ts
});
```