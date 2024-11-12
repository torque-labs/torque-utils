[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / nftCollectionTradeGet

# Function: nftCollectionTradeGet()

```ts
function nftCollectionTradeGet(
   tensorFloorBuyAction, 
   offerId, 
   publisherHandle, 
   remainingConversions?, 
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
| `tensorFloorBuyAction` | `object` | - |
| `tensorFloorBuyAction.collectionAddress` | `string` | The collection address to trace |
| `tensorFloorBuyAction.tradeType` | [`NftCollectionTradeType`](../enumerations/NftCollectionTradeType.md) | The type of trade to perform |
| `offerId` | `string` | - |
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

[solana-actions/buildGet.ts:248](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/solana-actions/buildGet.ts#L248)
