[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventRequirement

# Type Alias: CustomEventRequirement

```ts
type CustomEventRequirement: {
  requirement: CustomEventConfigSchema;
  type: CUSTOM_EVENT;
};
```

Custom event requirement type

## Type declaration

### requirement

```ts
requirement: {
  description: null | string;
  eventName: string;
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
  formEnabled: boolean;
  targetUrl: null | string;
 } = CustomEventConfigSchema;
```

### requirement.description?

```ts
optional description: null | string;
```

A short description to the user of the custom event

### requirement.eventName

```ts
eventName: string;
```

The name of the custom event that will be used in the POST request to the API

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

Array of custom event property fields and the validation

### requirement.formEnabled

```ts
formEnabled: boolean;
```

Depreceated: Whether it's enabled as a form directly in the UI

NOTE: This is depreceated. Use `FORM_SUBMISSION` instead

### requirement.targetUrl?

```ts
optional targetUrl: null | string;
```

The target URL for more information, or where the requirement can be completed

### type

```ts
type: CUSTOM_EVENT;
```

## Defined in

[types/eventConfig/config.ts:70](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L70)
