[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / MemoRequirement

# Type Alias: MemoRequirement

```ts
type MemoRequirement: {
  requirement: MemoActionSchema;
  type: MEMO;
};
```

Memo requirement type

## Type declaration

### requirement

```ts
requirement: {
  fields: ({
     description: null | string;
     image: null | string;
     label: null | string;
     name: string;
    } & {
     type: "string";
     validation: {
        match: null | string;
        required: null | boolean;
       };
    } | {
     description: null | string;
     image: null | string;
     label: null | string;
     name: string;
    } & {
     type: "number";
     validation: {
        max: null | number;
        min: null | number;
       };
    } | {
     description: null | string;
     image: null | string;
     label: null | string;
     name: string;
    } & {
     type: "boolean";
     validation: {
        match: null | boolean;
       };
    })[];
 } = MemoActionSchema;
```

### requirement.fields

```ts
fields: ({
  description: null | string;
  image: null | string;
  label: null | string;
  name: string;
 } & {
  type: "string";
  validation: {
     match: null | string;
     required: null | boolean;
    };
 } | {
  description: null | string;
  image: null | string;
  label: null | string;
  name: string;
 } & {
  type: "number";
  validation: {
     max: null | number;
     min: null | number;
    };
 } | {
  description: null | string;
  image: null | string;
  label: null | string;
  name: string;
 } & {
  type: "boolean";
  validation: {
     match: null | boolean;
    };
 })[];
```

The fields to collect from the user

### type

```ts
type: MEMO;
```

## Defined in

[types/eventConfig/config.ts:156](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L156)
