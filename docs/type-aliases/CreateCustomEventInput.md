[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCustomEventInput

# Type Alias: CreateCustomEventInput

> **CreateCustomEventInput**: `object`

Create custom event input type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | `Record`\<`string`, [`CustomEventFieldType`](../enumerations/CustomEventFieldType.md)\> | CustomEventDefinitionSchema | The custom event defintion as a JSON object. The object should be formatted as follows: `{ "<event property name>": "boolean" | "string" | "number" }` |
| `name` | `string` | - | The name of the custom event to create |

## Defined in

[types/custom-events/events.ts:236](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/custom-events/events.ts#L236)