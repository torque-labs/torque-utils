[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / SwapAction

# Type Alias: SwapAction

```ts
type SwapAction: {
  inAmount: null | number;
  inToken: null | string;
  outAmount: null | number;
  outToken: null | string;
  usdcValue: null | number;
};
```

Swap action type

## Type declaration

### inAmount?

```ts
optional inAmount: null | number;
```

The amount of tokens to swap from

### inToken?

```ts
optional inToken: null | string;
```

The token to swap from

### outAmount?

```ts
optional outAmount: null | number;
```

The amount of tokens to swap to

### outToken?

```ts
optional outToken: null | string;
```

The token to swap to

### usdcValue?

```ts
optional usdcValue: null | number;
```

The USDC value
TODO: USDC Value for which token?

## Defined in

[types/eventConfig/requirements.ts:77](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/requirements.ts#L77)
