[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / AsymmetricReward

# Type Alias: AsymmetricReward

```ts
type AsymmetricReward: {
  amount: string;
  participants: null | USER | PUBLISHER | BOTH;
  payoutTx: null | string;
  tokenAddress: string;
  userPubKey: null | string;
};
```

Asymmetric Reward type

## Type declaration

### amount

```ts
amount: string;
```

The amount to reward

### participants?

```ts
optional participants: null | USER | PUBLISHER | BOTH;
```

Who can participate in the raffle, users, publishers, or both

### payoutTx?

```ts
optional payoutTx: null | string;
```

Leave blank: The transaction hash of the payout transaction

### tokenAddress

```ts
tokenAddress: string;
```

The token address to reward

### userPubKey?

```ts
optional userPubKey: null | string;
```

Leave blank: The user public key that will be populated in the payout transaction

## Defined in

[types/campaigns.ts:101](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/campaigns.ts#L101)
