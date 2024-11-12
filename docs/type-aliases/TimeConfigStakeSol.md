[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigStakeSol

# Type Alias: TimeConfigStakeSol

```ts
type TimeConfigStakeSol: {
  duration: number;
  requirement: StakeSolTimeConfigSchema;
  type: STAKE_SOL;
};
```

Stake solana time config type

## Type declaration

### duration

```ts
duration: number;
```

The duration of the requirement in seconds

### requirement

```ts
requirement: {
  epochs: number;
 } = StakeSolTimeConfigSchema;
```

### requirement.epochs

```ts
epochs: number;
```

The number of epochs to stake for

### type

```ts
type: STAKE_SOL;
```

## Defined in

[types/timeConfig/config.ts:74](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/timeConfig/config.ts#L74)
