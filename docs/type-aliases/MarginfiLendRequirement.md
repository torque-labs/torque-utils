[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / MarginfiLendRequirement

# Type Alias: MarginfiLendRequirement

```ts
type MarginfiLendRequirement: {
  requirement: MarginfiLendActionSchema;
  type: MARGINFI_LEND;
};
```

Marginfi Lend requirement type

## Type declaration

### requirement

```ts
requirement: {
  amount: number;
  tokenAddress: string;
 } = MarginfiLendActionSchema;
```

### requirement.amount

```ts
amount: number;
```

The minimum amount to lend

### requirement.tokenAddress

```ts
tokenAddress: string;
```

The token address to lend

### type

```ts
type: MARGINFI_LEND;
```

## Defined in

[types/eventConfig/config.ts:141](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L141)
