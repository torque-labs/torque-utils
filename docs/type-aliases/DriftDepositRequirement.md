[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / DriftDepositRequirement

# Type Alias: DriftDepositRequirement

```ts
type DriftDepositRequirement: {
  requirement: DriftDepositActionSchema;
  type: DRIFT_DEPOSIT;
};
```

Drift Deposit requirement type

## Type declaration

### requirement

```ts
requirement: {
  minAmount: number;
  tokenAddress: string;
 } = DriftDepositActionSchema;
```

### requirement.minAmount

```ts
minAmount: number;
```

The minimum amount to deposit

### requirement.tokenAddress

```ts
tokenAddress: string;
```

The token address to deposit

### type

```ts
type: DRIFT_DEPOSIT;
```

## Defined in

[types/eventConfig/config.ts:98](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L98)
