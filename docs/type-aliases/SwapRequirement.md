[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / SwapRequirement

# Type Alias: SwapRequirement

> **SwapRequirement**: `object`

Swap requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | `object` | SwapActionSchema | - |
| `requirement.inAmount`? | `null` \| `number` | - | The amount of tokens to swap from |
| `requirement.inToken`? | `null` \| `string` | - | The token to swap from |
| `requirement.outAmount`? | `null` \| `number` | - | The amount of tokens to swap to |
| `requirement.outToken`? | `null` \| `string` | - | The token to swap to |
| `requirement.usdcValue`? | `null` \| `number` | - | The USDC value TODO: USDC Value for which token? |
| `timeConfig`? | `object` | - | - |
| `timeConfig.duration` | `number` | - | The duration of the requirement in seconds |
| `timeConfig.requirement` | `object` | TokenHoldingTimeConfigSchema | - |
| `timeConfig.requirement.amount` | `number` | - | The minimum amount to hold |
| `timeConfig.requirement.token` | `string` | - | The token to hold |
| `timeConfig.requirement.tokenStandard`? | `string` | - | The token standard of the token |
| `timeConfig.type` | `TOKEN_HOLDING` | - | - |
| `type` | `SWAP` | - | - |

## Defined in

[types/eventConfig/config.ts:226](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/config.ts#L226)
