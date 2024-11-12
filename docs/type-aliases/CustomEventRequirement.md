[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventRequirement

# Type Alias: CustomEventRequirement

> **CustomEventRequirement**: `object`

Custom event requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | `object` | CustomEventConfigSchema | - |
| `requirement.description`? | `null` \| `string` | - | A short description to the user of the custom event |
| `requirement.eventName` | `string` | - | The name of the custom event that will be used in the POST request to the API |
| `requirement.fields` | (`object` & `object` \| `object` & `object` \| `object` & `object`)[] | - | Array of custom event property fields and the validation |
| `requirement.formEnabled` | `boolean` | - | Depreceated: Whether it's enabled as a form directly in the UI NOTE: This is depreceated. Use `FORM_SUBMISSION` instead |
| `requirement.targetUrl`? | `null` \| `string` | - | The target URL for more information, or where the requirement can be completed |
| `type` | `CUSTOM_EVENT` | - | - |

## Defined in

[types/eventConfig/config.ts:70](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/config.ts#L70)
