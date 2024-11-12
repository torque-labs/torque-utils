[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / SwapRequirement

# Type Alias: SwapRequirement

```ts
type SwapRequirement: {
  requirement: SwapActionSchema;
  timeConfig: {
     duration: number;
     requirement: TokenHoldingTimeConfigSchema;
     type: TOKEN_HOLDING;
    };
  type: SWAP;
};
```

Swap requirement type

## Type declaration

### requirement

```ts
requirement: {
  inAmount: null | number;
  inToken: null | string;
  outAmount: null | number;
  outToken: null | string;
  usdcValue: null | number;
 } = SwapActionSchema;
```

### requirement.inAmount?

```ts
optional inAmount: null | number;
```

The amount of tokens to swap from

### requirement.inToken?

```ts
optional inToken: null | string;
```

The token to swap from

### requirement.outAmount?

```ts
optional outAmount: null | number;
```

The amount of tokens to swap to

### requirement.outToken?

```ts
optional outToken: null | string;
```

The token to swap to

### requirement.usdcValue?

```ts
optional usdcValue: null | number;
```

The USDC value
TODO: USDC Value for which token?

### timeConfig?

```ts
optional timeConfig: {
  duration: number;
  requirement: TokenHoldingTimeConfigSchema;
  type: TOKEN_HOLDING;
};
```

### timeConfig.duration

```ts
duration: number;
```

The duration of the requirement in seconds

### timeConfig.requirement

```ts
requirement: {
  amount: number;
  token: string;
  tokenStandard: string;
 } = TokenHoldingTimeConfigSchema;
```

### timeConfig.requirement.amount

```ts
amount: number;
```

The minimum amount to hold

### timeConfig.requirement.token

```ts
token: string;
```

The token to hold

### timeConfig.requirement.tokenStandard?

```ts
optional tokenStandard: string;
```

The token standard of the token

### timeConfig.type

```ts
type: TOKEN_HOLDING;
```

### type

```ts
type: SWAP;
```

## Defined in

[types/eventConfig/config.ts:226](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L226)
