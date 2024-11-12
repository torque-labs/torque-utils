[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / AsymmetricReward

# Type Alias: AsymmetricReward

> **AsymmetricReward**: `object`

Asymmetric Reward type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `amount` | `string` | The amount to reward |
| `participants`? | `null` \| `USER` \| `PUBLISHER` \| `BOTH` | Who can participate in the raffle, users, publishers, or both |
| `payoutTx`? | `null` \| `string` | Leave blank: The transaction hash of the payout transaction |
| `tokenAddress` | `string` | The token address to reward |
| `userPubKey`? | `null` \| `string` | Leave blank: The user public key that will be populated in the payout transaction |

## Defined in

[types/campaigns.ts:101](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/campaigns.ts#L101)
