[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / NftCollectionTradeRequirement

# Type Alias: NftCollectionTradeRequirement

```ts
type NftCollectionTradeRequirement: {
  requirement: NftCollectionTradeSchema;
  type: NFT_COLLECTION_TRADE;
};
```

NFT Collection Trade requirement type

## Type declaration

### requirement

```ts
requirement: {
  collectionAddress: string;
  tradeType: NftCollectionTradeType;
 } = NftCollectionTradeSchema;
```

### requirement.collectionAddress

```ts
collectionAddress: string;
```

The collection address to trace

### requirement.tradeType

```ts
tradeType: NftCollectionTradeType;
```

The type of trade to perform

### type

```ts
type: NFT_COLLECTION_TRADE;
```

## Defined in

[types/eventConfig/config.ts:182](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L182)
