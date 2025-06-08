# Anthropic Models Documentation

This file contains a list of Anthropic models, each with their respective details. The models are defined as constants and are then exported as part of an array `ANTHROPIC_LLM_LIST`.

## Constants

Each model is a constant of type `LLM` and contains the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model, in this case, 'anthropic'.
- `hostedId`: The id of the hosted model.
- `platformLink`: A link to the platform where the model is hosted.
- `imageInput`: A boolean indicating whether the model accepts image input.
- `pricing`: An object containing pricing details for the model. It includes the currency, unit, input cost, and output cost.

## Models

The following models are defined:

- `CLAUDE_2`: Claude 2 model.
- `CLAUDE_INSTANT`: Claude Instant model.
- `CLAUDE_3_HAIKU`: Claude 3 Haiku model.
- `CLAUDE_3_SONNET`: Claude 3 Sonnet model.
- `CLAUDE_3_OPUS`: Claude 3 Opus model.
- `CLAUDE_3_5_SONNET`: Claude 3.5 Sonnet model.

## Export

The file exports the `ANTHROPIC_LLM_LIST` constant, which is an array of all the defined models.

## Updates

Each model has a comment indicating the last update date. Please refer to these comments for the most recent changes.

## Reference

For more information about the models, please refer to the [Anthropic platform documentation](https://docs.anthropic.com/claude/reference/getting-started-with-the-api).