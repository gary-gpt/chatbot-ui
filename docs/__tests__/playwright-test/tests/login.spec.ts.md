---
source: __tests__/playwright-test/tests/login.spec.ts
generated: 2025-06-08T21:14:08.327Z
tags: []
hash: 9b0d6372bf2d07b48247f385f32ed0ab8ebbab91a63676dc54547bb95e27bbf2
---

# Chatbot UI Test Documentation

This document provides an overview of the test file `login.spec.ts` located in the directory `/Users/garymason/chatbot-ui/__tests__/playwright-test/tests/`. The file contains a series of tests for the login functionality of a chatbot UI.

## Dependencies

The test file uses Playwright Test, a Node.js library for browser automation. The `test` and `expect` functions from Playwright Test are imported at the beginning of the file.

```ts
import { test, expect } from '@playwright/test';
```

## Test Cases

### Test 1: Start Chatting is Displayed

This test checks if the 'Start Chatting' link is visible on the homepage.

```ts
test('start chatting is displayed', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  //expect the start chatting link to be visible
  await expect (page.getByRole('link', { name: 'Start Chatting' })).toBeVisible();
});
```

### Test 2: No Password Error Message

This test checks if the correct error message is displayed when a user tries to log in without a password.

```ts
test('No password error message', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  //fill in dummy email
  await page.getByPlaceholder('you@example.com').fill('dummyemail@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  //wait for network to be idle
  await page.waitForLoadState('networkidle');
  //validate that correct message is shown to the user
  await expect(page.getByText('Invalid login credentials')).toBeVisible();
});
```

### Test 3: No Password for Signup

This test checks if the correct error message is displayed when a user tries to sign up without a password.

```ts
test('No password for signup', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  
  await page.getByPlaceholder('you@example.com').fill('dummyEmail@Gmail.com');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  //validate appropriate error is thrown for missing password when signing up
  await expect(page.getByText('Signup requires a valid')).toBeVisible();
});
```

### Test 4: Invalid Username for Signup

This test checks if the correct error message is displayed when a user tries to sign up with an invalid email.

```ts
test('invalid username for signup', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  
  await page.getByPlaceholder('you@example.com').fill('dummyEmail');
  await page.getByPlaceholder('••••••••').fill('dummypassword');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  //validate appropriate error is thrown for invalid username when signing up
  await expect(page.getByText('Unable to validate email')).toBeVisible();
});
```

### Test 5: Password Reset Message

This test checks if the correct message is displayed when a user requests a password reset.

```ts
test('password reset message', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('you@example.com').fill('demo@gmail.com');
  await page.getByRole('button', { name: 'Reset' }).click();
  //validate appropriate message is shown
  await expect(page.getByText('Check email to reset password')).toBeVisible();
});
```

## Further Testing

Additional test cases can be added to this file to further validate the functionality of the chatbot UI.