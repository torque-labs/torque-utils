[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / KaminoLendRequirement

# Type Alias: KaminoLendRequirement

```ts
type KaminoLendRequirement: {
  requirement: KaminoLendActionSchema;
  type: KAMINO_LEND;
};
```

Kamino Lend requirement type

## Type declaration

### requirement

```ts
requirement: {
  amount: number;
  tokenAddress: string;
 } = KaminoLendActionSchema;
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
type: KAMINO_LEND;
```

## Defined in

[types/eventConfig/config.ts:128](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L128)
