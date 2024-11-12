[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormFieldSchema

# Variable: FormFieldSchema

> `const` **FormFieldSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

Individual form field schema

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `label` | `ZodString` | The label for the field |
| `name` | `ZodString` | The name of the field |
| `options` | `ZodOptional`\<`ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>\> | The options for the field (eg. dropdowns/select) |
| `required` | `ZodOptional`\<`ZodNullable`\<`ZodBoolean`\>\> | Whether the field is required or not |
| `type` | `ZodNativeEnum`\<*typeof* [`FormFieldType`](../enumerations/FormFieldType.md)\> | The type of field |

## Defined in

[types/eventConfig/requirements.ts:260](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/eventConfig/requirements.ts#L260)
