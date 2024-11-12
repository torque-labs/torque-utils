[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigOpenPosition

# Type Alias: TimeConfigOpenPosition

> **TimeConfigOpenPosition**: `object`

Open position time config type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `duration` | `number` | - | The duration of the requirement in seconds |
| `requirement` | `object` | OpenPositionTimeConfigSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to have |
| `requirement.pool`? | `string` | - | The pool address |
| `requirement.protocol`? | `string` | - | The protocol address |
| `requirement.token` | `string` | - | The token to have an open position form |
| `type` | `OPEN_POSITION` | - | - |

## Defined in

[types/timeConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/timeConfig/config.ts#L57)
