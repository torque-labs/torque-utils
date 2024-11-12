[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventNumberConfig

# Type Alias: CustomEventNumberConfig

```ts
type CustomEventNumberConfig: {
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
};
```

Custom event config type for number properties

## Type declaration

### description?

```ts
optional description: null | string;
```

A short description to the user of the custom event field

### image?

```ts
optional image: null | string;
```

An image to display with the custom event field in the UI (eg. screenshots)

### label?

```ts
optional label: null | string;
```

The label for the custom field that will displayed in the UI

### name

```ts
name: string;
```

The name of the custom field

## Type declaration

### type

```ts
type: "number";
```

Number custom event field type

### validation

```ts
validation: {
  max: null | number;
  min: null | number;
};
```

Validation for this custom event number property

### validation.max?

```ts
optional max: null | number;
```

Maximum value for this number field

### validation.min?

```ts
optional min: null | number;
```

Minimum value for this number field

## Defined in

[types/custom-events/events.ts:109](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/custom-events/events.ts#L109)
