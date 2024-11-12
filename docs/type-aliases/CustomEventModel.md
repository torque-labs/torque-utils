[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventModel

# Type Alias: CustomEventModel

```ts
type CustomEventModel: {
  config: CustomEventDefinitionSchema;
  id: string;
  name: string;
};
```

Custom event model type

## Type declaration

### config

```ts
config: Record<string, CustomEventFieldType> = CustomEventDefinitionSchema;
```

The custom event defintion as a JSON object.

The object should be formatted as follows:
```json
{
  "<event property name>": "boolean" | "string" | "number"
}
```

### id

```ts
id: string;
```

The internal ID of the custom event

### name

```ts
name: string;
```

The name of the custom event

## Defined in

[types/custom-events/events.ts:210](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/custom-events/events.ts#L210)
