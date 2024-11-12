[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigTokenHolding

# Type Alias: TimeConfigTokenHolding

> **TimeConfigTokenHolding**: `object`

The token holding time config type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `duration` | `number` | - | The duration of the requirement in seconds |
| `requirement` | `object` | TokenHoldingTimeConfigSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to hold |
| `requirement.token` | `string` | - | The token to hold |
| `requirement.tokenStandard`? | `string` | - | The token standard of the token |
| `type` | `TOKEN_HOLDING` | - | - |

## Defined in

[types/timeConfig/config.ts:40](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/timeConfig/config.ts#L40)
