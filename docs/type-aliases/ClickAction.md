[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickAction

# Type Alias: ClickAction

> **ClickAction**: `object`

Click action type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `antiSybilFee`? | `number` | Require anti-sybil fee for the click action. If true, the user must pay a transaction fee to complete the requirement. |
| `requireSignature` | `boolean` | Require signature for the click action. If true, the user must sign a transaction to complete the requirement. |
| `targetUrl` | `string` | Target URL for the click action |

## Defined in

[types/eventConfig/requirements.ts:222](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/requirements.ts#L222)
