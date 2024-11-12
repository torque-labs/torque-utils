[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / DriftBetRequirement

# Type Alias: DriftBetRequirement

```ts
type DriftBetRequirement: {
  requirement: DriftBetActionSchema;
  type: DRIFT_BET;
};
```

Drift Bet requirement type

## Type declaration

### requirement

```ts
requirement: {
  marketIndex: number;
  shares: number;
 } = DriftBetActionSchema;
```

### requirement.marketIndex

```ts
marketIndex: number;
```

The market index to bet on

### requirement.shares

```ts
shares: number;
```

The number of minimum shars to bet

### type

```ts
type: DRIFT_BET;
```

## Defined in

[types/eventConfig/config.ts:85](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L85)
