---
source: 'app/[locale]/layout.tsx'
generated: '2025-06-08T13:21:01.633Z'
tags: []
hash: 076ee024e5d6ccacabbbcfe5272d909292e5530f2b19687aaf31accdb661d346
---
# RootLayout Component

This file exports the `RootLayout` function, which is a React component that sets up the root layout for the application. This includes setting up the internationalization (i18n) and Supabase client, as well as the global state and toaster notifications.

## Imports

- Various components and utilities are imported from the project's own modules, including a toaster component, global state, providers, and translation provider.
- The `initTranslations` function is imported from a library for handling internationalization (i18n).
- Types related to the Supabase database are imported.
- The `createServerClient` function is imported from the Supabase server-side rendering (SSR) package.
- Metadata and viewport types are imported from the Next.js package.
- The `Inter` function is imported from the Next.js Google font package.
- The `cookies` function is imported from the Next.js headers package.
- The `ReactNode` type is imported from the React package.
- Global CSS styles are imported.

## Constants

- The `inter` constant is a Google font with the Latin subset.
- The `APP_NAME`, `APP_DEFAULT_TITLE`, `APP_TITLE_TEMPLATE`, and `APP_DESCRIPTION` constants are used for metadata.
- The `metadata` and `viewport` constants are used for the Next.js configuration.
- The `i18nNamespaces` constant is an array containing the namespaces for the i18n translations.

## RootLayoutProps Interface

The `RootLayoutProps` interface defines the props that the `RootLayout` component expects:

- `children`: A React node.
- `params`: An object with a `locale` string property.

## RootLayout Function

The `RootLayout` function is an asynchronous function that takes a `RootLayoutProps` object as an argument and returns a JSX element. It sets up the Supabase client with a cookie store for handling sessions, initializes the i18n translations, and returns the root layout for the application.

The root layout includes the following:

- A `Providers` component that sets up the application's providers.
- A `TranslationsProvider` component that sets up the i18n translations.
- A `Toaster` component for displaying notifications.
- A `GlobalState` component that wraps the children if a session exists.
- The children of the `RootLayout` component.
