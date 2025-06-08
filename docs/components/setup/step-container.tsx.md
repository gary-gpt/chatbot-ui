# StepContainer Component

The `StepContainer` component is a functional component that renders a card UI with a step-by-step interface. This component is designed to be used in a multi-step setup or configuration process.

## Props

The `StepContainer` component accepts the following props:

- `stepDescription` (string): The description of the current step.
- `stepNum` (number): The current step number.
- `stepTitle` (string): The title of the current step.
- `onShouldProceed` (function): A callback function that is triggered when the user decides to proceed to the next step or go back to the previous step. This function receives a boolean argument, where `true` indicates that the user wants to proceed to the next step, and `false` indicates that the user wants to go back to the previous step.
- `children` (ReactNode, optional): Any child components to be rendered within the `StepContainer`.
- `showBackButton` (boolean, optional): A flag to determine whether to show the "Back" button. Defaults to `false`.
- `showNextButton` (boolean, optional): A flag to determine whether to show the "Next" button. Defaults to `true`.

## Usage

The `StepContainer` component is used to encapsulate each step in a multi-step process. It provides a consistent UI for each step, including a title, description, and navigation buttons.

The component also handles keyboard events, allowing the user to proceed to the next step by pressing the "Enter" key (unless the "Shift" key is also pressed).

The "Next" and "Back" buttons trigger the `onShouldProceed` callback, with a `true` or `false` argument respectively.

## Example

```jsx
<StepContainer
  stepDescription="This is the first step."
  stepNum={1}
  stepTitle="Step 1"
  onShouldProceed={(shouldProceed) => {
    if (shouldProceed) {
      // Proceed to the next step
    } else {
      // Go back to the previous step
    }
  }}
  showBackButton={false}
  showNextButton={true}
>
  {/* Any child components go here */}
</StepContainer>
```

In this example, the `StepContainer` component is used to create the first step in a multi-step process. The "Back" button is hidden, and the "Next" button is shown. The `onShouldProceed` callback handles navigation between steps.