[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / StakeSolanaRequirement

# Type Alias: StakeSolanaRequirement

```ts
type StakeSolanaRequirement: {
  requirement: StakeSolanaActionSchema;
  type: STAKE_SOL;
};
```

Stake Solana requirement type

## Type declaration

### requirement

```ts
requirement: {
  amount: number;
  epochs: number;
  validator: string;
 } = StakeSolanaActionSchema;
```

### requirement.amount

```ts
amount: number;
```

The minimum amount to stake

### requirement.epochs

```ts
epochs: number;
```

The minimum number of epochs to stake for

### requirement.validator

```ts
validator: string;
```

The validator to stake with

### type

```ts
type: STAKE_SOL;
```

## Defined in

[types/eventConfig/config.ts:210](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L210)
