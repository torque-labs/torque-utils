[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventBooleanConfig

# Type Alias: CustomEventBooleanConfig

> **CustomEventBooleanConfig**: `object` & `object`

Custom event config type for boolean properties

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `description`? | `null` \| `string` | A short description to the user of the custom event field |
| `image`? | `null` \| `string` | An image to display with the custom event field in the UI (eg. screenshots) |
| `label`? | `null` \| `string` | The label for the custom field that will displayed in the UI |
| `name` | `string` | The name of the custom field |

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `type` | `"boolean"` | Boolean custom event field type |
| `validation` | `object` | Validation for this custom event boolean property |
| `validation.match`? | `null` \| `boolean` | A specific boolean value to match against (eg. true) |

## Defined in

[types/custom-events/events.ts:116](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/custom-events/events.ts#L116)