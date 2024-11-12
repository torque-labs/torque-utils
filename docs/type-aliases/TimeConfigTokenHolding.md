[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigTokenHolding

# Type Alias: TimeConfigTokenHolding

```ts
type TimeConfigTokenHolding: {
  duration: number;
  requirement: TokenHoldingTimeConfigSchema;
  type: TOKEN_HOLDING;
};
```

The token holding time config type

## Type declaration

### duration

```ts
duration: number;
```

The duration of the requirement in seconds

### requirement

```ts
requirement: {
  amount: number;
  token: string;
  tokenStandard: string;
 } = TokenHoldingTimeConfigSchema;
```

### requirement.amount

```ts
amount: number;
```

The minimum amount to hold

### requirement.token

```ts
token: string;
```

The token to hold

### requirement.tokenStandard?

```ts
optional tokenStandard: string;
```

The token standard of the token

### type

```ts
type: TOKEN_HOLDING;
```

## Defined in

[types/timeConfig/config.ts:40](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/timeConfig/config.ts#L40)
