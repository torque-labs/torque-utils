[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ValidateTimeRequirent

# Type Alias: ValidateTimeRequirent

> **ValidateTimeRequirent**: `object`

Time validation request body when getting time validation

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `body` | `object` | - |
| `body.data`? | `any` | Extra data to pass to the time config |
| `body.initalTransaction`? | `string` | The initial transaction signature |
| `body.timeConfig` | [`TimeConfig`](TimeConfig.md) | The time config to validate |
| `body.userPublicKey`? | `string` | The user's public key |

## Defined in

[types/timeConfig/validationInput.ts:6](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/timeConfig/validationInput.ts#L6)
