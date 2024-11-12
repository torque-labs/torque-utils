[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / realmsVoteGet

# Function: realmsVoteGet()

> **realmsVoteGet**(`realmsVoteAction`, `offerId`, `publisherHandle`, `remainingConversions`?, `userRewardType`?, `userRewardToken`?, `userRewardAmount`?, `raffleRewardType`?, `raffleRewardToken`?, `raffleRewardAmount`?): `Promise`\<`ActionGetResponse`\>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `realmsVoteAction` | `object` | - |
| `realmsVoteAction.customProgramId`? | `string` | The custom program ID for the proposal |
| `realmsVoteAction.daoPubKey` | `string` | The public key of the DAO |
| `realmsVoteAction.proposalPubKey` | `string` | The public key of the proposal |
| `offerId`? | `string` | - |
| `publisherHandle`? | `string` | - |
| `remainingConversions`? | `number` | - |
| `userRewardType`? | `string` | - |
| `userRewardToken`? | `string` | - |
| `userRewardAmount`? | `number` | - |
| `raffleRewardType`? | `string` | - |
| `raffleRewardToken`? | `string` | - |
| `raffleRewardAmount`? | `number` | - |

## Returns

`Promise`\<`ActionGetResponse`\>

## Defined in

[solana-actions/buildGet.ts:467](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/solana-actions/buildGet.ts#L467)
