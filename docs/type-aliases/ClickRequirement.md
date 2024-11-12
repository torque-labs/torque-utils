[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickRequirement

# Type Alias: ClickRequirement

> **ClickRequirement**: `object`

Click requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | `object` | ClickActionSchema | - |
| `requirement.antiSybilFee`? | `number` | - | Require anti-sybil fee for the click action. If true, the user must pay a transaction fee to complete the requirement. |
| `requirement.requireSignature` | `boolean` | - | Require signature for the click action. If true, the user must sign a transaction to complete the requirement. |
| `requirement.targetUrl` | `string` | - | Target URL for the click action |
| `type` | `CLICK` | - | - |

## Defined in

[types/eventConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/config.ts#L57)
