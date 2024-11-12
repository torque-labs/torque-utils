[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / OpenPositionTimeConfig

# Type Alias: OpenPositionTimeConfig

```ts
type OpenPositionTimeConfig: {
  amount: number;
  pool: string;
  protocol: string;
  token: string;
};
```

Open position time config type

## Type declaration

### amount

```ts
amount: number;
```

The minimum amount to have

### pool?

```ts
optional pool: string;
```

The pool address

### protocol?

```ts
optional protocol: string;
```

The protocol address

### token

```ts
token: string;
```

The token to have an open position form

## Defined in

[types/timeConfig/requirements.ts:50](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/timeConfig/requirements.ts#L50)
