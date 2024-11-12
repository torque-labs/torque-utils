[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / StakeSolanaRequirement

# Type Alias: StakeSolanaRequirement

> **StakeSolanaRequirement**: `object`

Stake Solana requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | `object` | StakeSolanaActionSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to stake |
| `requirement.epochs` | `number` | - | The minimum number of epochs to stake for |
| `requirement.validator` | `string` | - | The validator to stake with |
| `type` | `STAKE_SOL` | - | - |

## Defined in

[types/eventConfig/config.ts:210](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/config.ts#L210)
