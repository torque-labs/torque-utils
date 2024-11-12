[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TensorBuyRequirement

# Type Alias: TensorBuyRequirement

```ts
type TensorBuyRequirement: {
  requirement: TensorActionSchema;
  type: TENSOR_BUY;
};
```

Tensor Buy requirement type

## Type declaration

### requirement

```ts
requirement: {
  collectionIds: string[];
 } = TensorActionSchema;
```

### requirement.collectionIds

```ts
collectionIds: string[];
```

The collection ID of the tension collection for the requirement

### type

```ts
type: TENSOR_BUY;
```

## Defined in

[types/eventConfig/config.ts:252](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L252)
