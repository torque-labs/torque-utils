[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormSubmissionRequirement

# Type Alias: FormSubmissionRequirement

> **FormSubmissionRequirement**: `object`

Form Submission requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | `object` | FormSubmissionActionSchema | - |
| `requirement.antiSybilFee`? | `number` | - | Require anti-sybil fee for the form submission. If true, the user must pay a transaction fee to complete the requirement. Otherwise, the form submission will be completed and validated with a signature. |
| `requirement.fields` | `object`[] | - | The fields to collect from the user |
| `type` | `FORM_SUBMISSION` | - | - |

## Defined in

[types/eventConfig/config.ts:113](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/config.ts#L113)
