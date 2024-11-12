[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormSubmissionRequirement

# Type Alias: FormSubmissionRequirement

```ts
type FormSubmissionRequirement: {
  requirement: FormSubmissionActionSchema;
  type: FORM_SUBMISSION;
};
```

Form Submission requirement type

## Type declaration

### requirement

```ts
requirement: {
  antiSybilFee: number;
  fields: {
     label: string;
     name: string;
     options: {
        label: string;
        value: string;
       }[];
     required: null | boolean;
     type: FormFieldType;
    }[];
 } = FormSubmissionActionSchema;
```

### requirement.antiSybilFee?

```ts
optional antiSybilFee: number;
```

Require anti-sybil fee for the form submission. If true, the user must pay a transaction
fee to complete the requirement. Otherwise, the form submission will be completed and
validated with a signature.

### requirement.fields

```ts
fields: {
  label: string;
  name: string;
  options: {
     label: string;
     value: string;
    }[];
  required: null | boolean;
  type: FormFieldType;
 }[];
```

The fields to collect from the user

### type

```ts
type: FORM_SUBMISSION;
```

## Defined in

[types/eventConfig/config.ts:113](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L113)
