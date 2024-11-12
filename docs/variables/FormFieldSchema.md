[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormFieldSchema

# Variable: FormFieldSchema

```ts
const FormFieldSchema: ZodObject<{
  label: ZodString;
  name: ZodString;
  options: ZodOptional<ZodArray<ZodObject<{
     label: ZodString;
     value: ZodString;
    }, "strip", ZodTypeAny, {
     label: string;
     value: string;
    }, {
     label: string;
     value: string;
    }>, "many">>;
  required: ZodOptional<ZodNullable<ZodBoolean>>;
  type: ZodNativeEnum<typeof FormFieldType>;
 }, "strip", ZodTypeAny, {
  label: string;
  name: string;
  options: {
     label: string;
     value: string;
    }[];
  required: null | boolean;
  type: FormFieldType;
 }, {
  label: string;
  name: string;
  options: {
     label: string;
     value: string;
    }[];
  required: null | boolean;
  type: FormFieldType;
}>;
```

Individual form field schema

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `label` | `ZodString` | The label for the field |
| `name` | `ZodString` | The name of the field |
| `options` | `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `label`: `ZodString`; `value`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `label`: `string`; `value`: `string`; \}, \{ `label`: `string`; `value`: `string`; \}\>, `"many"`\>\> | The options for the field (eg. dropdowns/select) |
| `required` | `ZodOptional`\<`ZodNullable`\<`ZodBoolean`\>\> | Whether the field is required or not |
| `type` | `ZodNativeEnum`\<*typeof* [`FormFieldType`](../enumerations/FormFieldType.md)\> | The type of field |

## Defined in

[types/eventConfig/requirements.ts:260](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/requirements.ts#L260)
