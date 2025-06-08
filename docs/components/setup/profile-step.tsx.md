# ProfileStep Component

This is a React functional component named `ProfileStep`. It's used to handle the user profile setup, specifically the username and display name.

## Props

The `ProfileStep` component accepts the following props:

- `username`: A string representing the username of the user.
- `usernameAvailable`: A boolean indicating whether the username is available or not.
- `displayName`: A string representing the display name of the user.
- `onUsernameAvailableChange`: A function that is called when the availability of the username changes. It accepts a boolean parameter.
- `onUsernameChange`: A function that is called when the username changes. It accepts a string parameter.
- `onDisplayNameChange`: A function that is called when the display name changes. It accepts a string parameter.

## State

The `ProfileStep` component maintains one piece of state:

- `loading`: A boolean indicating whether the component is currently checking the availability of the username.

## Functions

The `ProfileStep` component defines the following functions:

- `debounce`: A function that ensures that a certain function (`func`) is not called again until a certain amount of time (`wait`) has passed.
- `checkUsernameAvailability`: A function that checks whether a username is available or not. It is debounced to ensure that it is not called too frequently.

## Rendered JSX

The `ProfileStep` component renders two main sections:

1. A section for entering and checking the availability of the username. This section includes an input field for the username, a label, and an indicator of whether the username is available or not. If the `loading` state is `true`, a loading spinner is displayed.

2. A section for entering the display name. This section includes an input field for the display name and a label.

In both sections, a `LimitDisplay` component is used to display the current length of the username/display name and the maximum allowed length.