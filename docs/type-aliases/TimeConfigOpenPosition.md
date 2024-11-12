[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigOpenPosition

# Type Alias: TimeConfigOpenPosition

```ts
type TimeConfigOpenPosition: {
  duration: number;
  requirement: OpenPositionTimeConfigSchema;
  type: OPEN_POSITION;
};
```

Open position time config type

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
  pool: string;
  protocol: string;
  token: string;
 } = OpenPositionTimeConfigSchema;
```

### requirement.amount

```ts
amount: number;
```

The minimum amount to have

### requirement.pool?

```ts
optional pool: string;
```

The pool address

### requirement.protocol?

```ts
optional protocol: string;
```

The protocol address

### requirement.token

```ts
token: string;
```

The token to have an open position form

### type

```ts
type: OPEN_POSITION;
```

## Defined in

[types/timeConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/timeConfig/config.ts#L57)
