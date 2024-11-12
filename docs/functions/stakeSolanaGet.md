[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / stakeSolanaGet

# Function: stakeSolanaGet()

```ts
function stakeSolanaGet(
   stakeSolanaAction, 
   offerId, 
   title, 
   publisherHandle, 
   remainingConversions?, 
   imageUrl?, 
   description?, 
   userRewardType?, 
   userRewardToken?, 
   userRewardAmount?, 
   raffleRewardType?, 
   raffleRewardToken?, 
raffleRewardAmount?): Promise<ActionGetResponse>
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `stakeSolanaAction` | `object` | - |
| `stakeSolanaAction.amount` | `number` | The minimum amount to stake |
| `stakeSolanaAction.epochs` | `number` | The minimum number of epochs to stake for |
| `stakeSolanaAction.validator` | `string` | The validator to stake with |
| `offerId` | `string` | - |
| `title`? | `string` | - |
| `publisherHandle`? | `string` | - |
| `remainingConversions`? | `number` | - |
| `imageUrl`? | `string` | - |
| `description`? | `string` | - |
| `userRewardType`? | `string` | - |
| `userRewardToken`? | `string` | - |
| `userRewardAmount`? | `number` | - |
| `raffleRewardType`? | `string` | - |
| `raffleRewardToken`? | `string` | - |
| `raffleRewardAmount`? | `number` | - |

## Returns

`Promise`\<`ActionGetResponse`\>

## Defined in

[solana-actions/buildGet.ts:500](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/solana-actions/buildGet.ts#L500)
