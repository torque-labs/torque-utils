[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCustomEventInput

# Type Alias: CreateCustomEventInput

```ts
type CreateCustomEventInput: {
  config: CustomEventDefinitionSchema;
  name: string;
};
```

Create custom event input type

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

### name

```ts
name: string;
```

The name of the custom event to create

## Defined in

[types/custom-events/events.ts:236](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/custom-events/events.ts#L236)
