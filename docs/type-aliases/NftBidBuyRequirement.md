[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / NftBidBuyRequirement

# Type Alias: NftBidBuyRequirement

```ts
type NftBidBuyRequirement: {
  requirement: NftBidBuySchema;
  type: NFT_BUY_BID;
};
```

NFT Bid Buy requirement type

## Type declaration

### requirement

```ts
requirement: {
  minAmount: number;
  mint: string;
 } = NftBidBuySchema;
```

### requirement.minAmount?

```ts
optional minAmount: number;
```

The minimum amount to bid

### requirement.mint

```ts
mint: string;
```

The NFT mint to bid or buy

### type

```ts
type: NFT_BUY_BID;
```

## Defined in

[types/eventConfig/config.ts:169](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L169)
