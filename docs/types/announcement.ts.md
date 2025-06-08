---
source: types/announcement.ts
generated: '2025-06-08T13:21:01.632Z'
tags: []
hash: 56853ef8f407b08c0a5f1ee5bce2c6ce915461d999b2486f9302e8f91883125d
---
# Interface Documentation: Announcement

The `Announcement` interface is a TypeScript interface that represents an announcement.

## Properties

### `id: string`

This property represents the unique identifier for the announcement. It is a string.

### `title: string`

This property represents the title of the announcement. It is a string.

### `content: string`

This property represents the content of the announcement. It is a string.

### `read: boolean`

This property indicates whether the announcement has been read or not. It is a boolean. If the value is `true`, the announcement has been read; if the value is `false`, the announcement has not been read.

### `link: string`

This property represents a link associated with the announcement. It is a string. This could be a URL to a webpage with more information about the announcement.

### `date: string`

This property represents the date when the announcement was made. It is a string. The date should be in a format that can be easily parsed, such as ISO 8601.

## Usage

The `Announcement` interface can be used to type-check objects that represent announcements. For example:

```typescript
let myAnnouncement: Announcement = {
  id: '1',
  title: 'New Feature',
  content: 'We have released a new feature...',
  read: false,
  link: 'https://example.com/new-feature',
  date: '2020-01-01T00:00:00Z'
};
```

In this example, `myAnnouncement` is an object that satisfies the `Announcement` interface. If we tried to assign a value to `myAnnouncement` that did not satisfy the `Announcement` interface, TypeScript would give a compile-time error.
