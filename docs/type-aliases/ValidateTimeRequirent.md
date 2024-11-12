[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ValidateTimeRequirent

# Type Alias: ValidateTimeRequirent

```ts
type ValidateTimeRequirent: {
  body: {
     data: any;
     initalTransaction: string;
     timeConfig: TimeConfig;
     userPublicKey: string;
    };
};
```

Time validation request body when getting time validation

## Type declaration

### body

```ts
body: {
  data: any;
  initalTransaction: string;
  timeConfig: TimeConfig;
  userPublicKey: string;
};
```

### body.data?

```ts
optional data: any;
```

Extra data to pass to the time config

### body.initalTransaction?

```ts
optional initalTransaction: string;
```

The initial transaction signature

### body.timeConfig

```ts
timeConfig: TimeConfig;
```

The time config to validate

### body.userPublicKey?

```ts
optional userPublicKey: string;
```

The user's public key

## Defined in

[types/timeConfig/validationInput.ts:6](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/timeConfig/validationInput.ts#L6)
