[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateTreasuryInput

# Type Alias: CreateTreasuryInput

```ts
type CreateTreasuryInput: {
  description: null | string;
  imageUrl: null | string;
  offerId: string;
  payouts: number[];
  payoutsAvailable: number[];
  title: null | string;
  tokenAddress: null | string;
};
```

Create treasury input type

## Type declaration

### description?

```ts
optional description: null | string;
```

### imageUrl?

```ts
optional imageUrl: null | string;
```

### offerId

```ts
offerId: string;
```

The offer ID of the campaign/offer to create the loot box treasury for

### payouts

```ts
payouts: number[];
```

### payoutsAvailable

```ts
payoutsAvailable: number[];
```

### title?

```ts
optional title: null | string;
```

### tokenAddress?

```ts
optional tokenAddress: null | string;
```

## Defined in

[types/lootBox.ts:22](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/lootBox.ts#L22)
