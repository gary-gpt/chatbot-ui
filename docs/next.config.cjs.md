---
source: next.config.cjs
generated: 2025-06-08T22:41:32.011Z
tags: []
hash: 8ab5c1d7856738fc8dd1c6f5829228afe6a89a1f4b9de707640df4030f8c795a
---

# Next.js Configuration File Documentation

This document provides an overview of the `next.config.cjs` file located in the `chatbot-ui` directory. This configuration file is used to customize the behavior of the Next.js framework.

## Code Overview

```ts
const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development" // Optional: disables service worker in dev
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "http",
        hostname: "127.0.0.1"
      },
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  }
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
```

## Code Breakdown

### Importing Dependencies

```ts
const path = require("path");
```

The `path` module provides utilities for working with file and directory paths.

```ts
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
```

The `@next/bundle-analyzer` module is used to visualize the size of webpack output files with an interactive zoomable treemap. It is enabled when the `ANALYZE` environment variable is set to `true`.

```ts
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development" // Optional: disables service worker in dev
});
```

The `next-pwa` module is used to turn the Next.js application into a Progressive Web App (PWA). The service worker is disabled in development mode.

### Next.js Configuration

```ts
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "http",
        hostname: "127.0.0.1"
      },
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  }
};
```

The `nextConfig` object contains the configuration for the Next.js application. 

- `reactStrictMode` is set to `true` to activate React's Strict Mode, a tool for highlighting potential problems in an application.
- `images.remotePatterns` is an array of objects that specify the protocols and hostnames of remote images that are allowed to be optimized by Next.js.
- `experimental.serverComponentsExternalPackages` is an array of packages that are allowed to be imported in server components.
- `webpack` is a function that modifies the default webpack configuration. In this case, it adds a new alias (`@`) for the current directory.

### Exporting Configuration

```ts
module.exports = withBundleAnalyzer(withPWA(nextConfig));
```

The final configuration is exported by wrapping the `nextConfig` object with the `withBundleAnalyzer` and `withPWA` functions. This applies the bundle analyzer and PWA plugins to the Next.js application.