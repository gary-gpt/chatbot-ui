# Command Component

This file exports a set of components that are used to create a command interface. 

## Components

### `Command`

This is a primitive command component that is a wrapper around the `CommandPrimitive` component from the `cmdk` library. It takes a `className` and `props` as arguments and returns a `CommandPrimitive` component with the provided `className` and `props`. 

### `CommandDialog`

This component wraps the `Command` component in a `Dialog` and `DialogContent` component. It takes `children` and `props` as arguments and returns a `Dialog` component with the provided `props` and `children` as the content of the `Command` component.

### `CommandInput`

This component is a wrapper around the `CommandPrimitive.Input` component from the `cmdk` library. It takes a `className` and `props` as arguments and returns a `CommandPrimitive.Input` component with the provided `className` and `props`.

### `CommandList`

This component is a wrapper around the `CommandPrimitive.List` component from the `cmdk` library. It takes a `className` and `props` as arguments and returns a `CommandPrimitive.List` component with the provided `className` and `props`.

### `CommandEmpty`

This component is a wrapper around the `CommandPrimitive.Empty` component from the `cmdk` library. It takes `props` as arguments and returns a `CommandPrimitive.Empty` component with the provided `props`.

### `CommandGroup`

This component is a wrapper around the `CommandPrimitive.Group` component from the `cmdk` library. It takes a `className` and `props` as arguments and returns a `CommandPrimitive.Group` component with the provided `className` and `props`.

### `CommandSeparator`

This component is a wrapper around the `CommandPrimitive.Separator` component from the `cmdk` library. It takes a `className` and `props` as arguments and returns a `CommandPrimitive.Separator` component with the provided `className` and `props`.

### `CommandItem`

This component is a wrapper around the `CommandPrimitive.Item` component from the `cmdk` library. It takes a `className` and `props` as arguments and returns a `CommandPrimitive.Item` component with the provided `className` and `props`.

### `CommandShortcut`

This component is a simple `span` element that is used to display a shortcut. It takes a `className` and `props` as arguments and returns a `span` element with the provided `className` and `props`.

## Exports

The file exports the following components: `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandShortcut`, `CommandSeparator`.