[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormSubmissionAction

# Type Alias: FormSubmissionAction

> **FormSubmissionAction**: `object`

Form submission action type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `antiSybilFee`? | `number` | Require anti-sybil fee for the form submission. If true, the user must pay a transaction fee to complete the requirement. Otherwise, the form submission will be completed and validated with a signature. |
| `fields` | `object`[] | The fields to collect from the user |

## Defined in

[types/eventConfig/requirements.ts:315](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/requirements.ts#L315)
