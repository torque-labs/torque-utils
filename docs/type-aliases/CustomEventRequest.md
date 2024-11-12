[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventRequest

# Type Alias: CustomEventRequest

```ts
type CustomEventRequest: {
  context: null | Record<string, string | number | boolean>;
  event_data: Record<string, string | number | boolean>;
  event_name: string;
  timestamp: string | number;
  user: {
     pubKey: string;
    } & Record<string, string | number | boolean>;
};
```

Custom event request type

## Type declaration

### context?

```ts
optional context: null | Record<string, string | number | boolean>;
```

### event\_data

```ts
event_data: Record<string, string | number | boolean>;
```

### event\_name

```ts
event_name: string;
```

### timestamp

```ts
timestamp: string | number;
```

### user

```ts
user: {
  pubKey: string;
} & Record<string, string | number | boolean>;
```

#### Type declaration

##### pubKey

```ts
pubKey: string;
```

## Defined in

[types/events.ts:115](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/events.ts#L115)
