[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / LootBoxReward

# Type Alias: LootBoxReward

```ts
type LootBoxReward: {
  rewards: {
     amount: number;
     users: number;
    }[];
  tokenAddress: string;
};
```

Loot Box Reward Schematype

## Type declaration

### rewards

```ts
rewards: {
  amount: number;
  users: number;
 }[];
```

The groups of rewards to distribute

### tokenAddress

```ts
tokenAddress: string;
```

The token address to reward

## Defined in

[types/campaigns.ts:122](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/campaigns.ts#L122)
