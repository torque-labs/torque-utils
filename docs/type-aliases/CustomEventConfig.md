[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventConfig

# Type Alias: CustomEventConfig

> **CustomEventConfig**: `object`

Custom event requirement type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `description`? | `null` \| `string` | A short description to the user of the custom event |
| `eventName` | `string` | The name of the custom event that will be used in the POST request to the API |
| `fields` | (`object` & `object` \| `object` & `object` \| `object` & `object`)[] | Array of custom event property fields and the validation |
| `formEnabled` | `boolean` | Depreceated: Whether it's enabled as a form directly in the UI NOTE: This is depreceated. Use `FORM_SUBMISSION` instead |
| `targetUrl`? | `null` \| `string` | The target URL for more information, or where the requirement can be completed |

## Defined in

[types/custom-events/events.ts:157](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/custom-events/events.ts#L157)
