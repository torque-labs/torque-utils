[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickRequirement

# Type Alias: ClickRequirement

```ts
type ClickRequirement: {
  requirement: ClickActionSchema;
  type: CLICK;
};
```

Click requirement type

## Type declaration

### requirement

```ts
requirement: {
  antiSybilFee: number;
  requireSignature: boolean;
  targetUrl: string;
 } = ClickActionSchema;
```

### requirement.antiSybilFee?

```ts
optional antiSybilFee: number;
```

Require anti-sybil fee for the click action. If true, the user must pay a transaction
fee to complete the requirement.

### requirement.requireSignature

```ts
requireSignature: boolean;
```

Require signature for the click action. If true, the user must sign a transaction
to complete the requirement.

### requirement.targetUrl

```ts
targetUrl: string;
```

Target URL for the click action

### type

```ts
type: CLICK;
```

## Defined in

[types/eventConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L57)
