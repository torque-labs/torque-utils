[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventBooleanConfig

# Type Alias: CustomEventBooleanConfig

```ts
type CustomEventBooleanConfig: {
  description: null | string;
  image: null | string;
  label: null | string;
  name: string;
 } & {
  type: "boolean";
  validation: {
     match: null | boolean;
    };
};
```

Custom event config type for boolean properties

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
type: "boolean";
```

Boolean custom event field type

### validation

```ts
validation: {
  match: null | boolean;
};
```

Validation for this custom event boolean property

### validation.match?

```ts
optional match: null | boolean;
```

A specific boolean value to match against (eg. true)

## Defined in

[types/custom-events/events.ts:116](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/custom-events/events.ts#L116)
