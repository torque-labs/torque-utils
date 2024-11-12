[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / stakeSolanaPost

# Function: stakeSolanaPost()

```ts
function stakeSolanaPost(stakeSolanaAction, offerId): string
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `stakeSolanaAction` | `object` | - |
| `stakeSolanaAction.amount` | `number` | The minimum amount to stake |
| `stakeSolanaAction.epochs` | `number` | The minimum number of epochs to stake for |
| `stakeSolanaAction.validator` | `string` | The validator to stake with |
| `offerId` | `string` | - |

## Returns

`string`

## Defined in

[solana-actions/buildPost.ts:85](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/solana-actions/buildPost.ts#L85)
