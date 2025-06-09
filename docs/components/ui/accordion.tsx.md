---
source: components/ui/accordion.tsx
generated: 2025-06-08T21:54:27.761Z
tags: []
hash: ce30bcc5e14914975439405359ace6559790bbeb8354e2f75d067fe60c8fbe31
---

# Accordion Component Documentation

This document provides an overview of the Accordion component located at `/Users/garymason/chatbot-ui/components/ui/accordion.tsx`. The component is built using TypeScript and React, and it uses the Radix UI Accordion Primitive for the main functionality.

## Overview

The Accordion component is a common UI pattern where content is hidden by default and can be revealed by interacting with a trigger. This implementation also includes a Chevron icon that rotates when the accordion is open.

## Imports

The component imports several libraries and components:

- `React` from the "react" library.
- `AccordionPrimitive` from the "@radix-ui/react-accordion" library, which provides the basic functionality for the accordion.
- `ChevronDown` from the "lucide-react" library, which is an icon that is used in the AccordionTrigger.
- `cn` from "@/lib/utils", a utility function for classnames.

## Components

The file exports four components: `Accordion`, `AccordionItem`, `AccordionTrigger`, and `AccordionContent`.

### Accordion

This is the root component of the accordion. It's a direct export of `AccordionPrimitive.Root`.

### AccordionItem

This component is a wrapper around `AccordionPrimitive.Item`. It forwards all props and the ref to the underlying primitive. It also adds a border to the bottom of the item.

```ts
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
```

### AccordionTrigger

This component is a wrapper around `AccordionPrimitive.Trigger`. It forwards all props and the ref to the underlying primitive. It also adds styling to the trigger and includes the `ChevronDown` icon.

```ts
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
```

### AccordionContent

This component is a wrapper around `AccordionPrimitive.Content`. It forwards all props and the ref to the underlying primitive. It also adds styling to the content.

```ts
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName
```

## Exports

The file exports the `Accordion`, `AccordionItem`, `AccordionTrigger`, and `AccordionContent` components for use in other parts of the application.