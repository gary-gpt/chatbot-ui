---
source: components/ui/limit-display.tsx
generated: '2025-06-08T13:21:01.641Z'
tags: []
hash: ae728be504786a8d0e88d504c1e67e553311c43cd2de0679428e3770c6778fd4
---
# LimitDisplay Component Documentation

## Importing the Component

```javascript
import { LimitDisplay } from "<path-to-component>/LimitDisplay";
```

## Props

The `LimitDisplay` component takes the following props:

| Name | Type | Description |
| ---- | ---- | ----------- |
| used | number | The amount currently used or consumed. |
| limit | number | The maximum limit or capacity. |

## Usage

The `LimitDisplay` component is a functional component that displays the amount used out of a total limit. It is typically used to show the usage of a resource, such as memory or disk space.

Here is an example of how to use the `LimitDisplay` component:

```javascript
<LimitDisplay used={50} limit={100} />
```

In the above example, the component will render "50/100".

## Styling

The component uses the following CSS classes for styling:

- `text-xs`: This class is used to set the font size of the text.
- `italic`: This class is used to set the font style of the text to italic.

You can override these classes in your CSS if you want to customize the appearance of the component.
