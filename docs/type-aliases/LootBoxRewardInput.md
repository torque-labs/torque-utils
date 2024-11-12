[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / LootBoxRewardInput

# Type Alias: LootBoxRewardInput

```ts
type LootBoxRewardInput: {
  enabled: true;
  rewards: {
     amount: number;
     users: number;
    }[];
  tokenAddress: string;
 } | {
  enabled: false;
};
```

Loot Box form input type

## Defined in

[types/campaigns.ts:147](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/campaigns.ts#L147)
