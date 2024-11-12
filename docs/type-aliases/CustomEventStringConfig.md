[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventStringConfig

# Type Alias: CustomEventStringConfig

```ts
type CustomEventStringConfig: {
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
};
```

Custom event config type for string properties

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
type: "string";
```

String custom event field type

### validation

```ts
validation: {
  match: null | string;
  required: null | boolean;
};
```

Validation for this custom event string property

### validation.match?

```ts
optional match: null | string;
```

A specific string value to match against (eg. Video_ID)

### validation.required?

```ts
optional required: null | boolean;
```

Whether the field is required or not

## Defined in

[types/custom-events/events.ts:102](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/custom-events/events.ts#L102)
