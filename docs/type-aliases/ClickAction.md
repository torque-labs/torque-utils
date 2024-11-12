[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickAction

# Type Alias: ClickAction

```ts
type ClickAction: {
  antiSybilFee: number;
  requireSignature: boolean;
  targetUrl: string;
};
```

Click action type

## Type declaration

### antiSybilFee?

```ts
optional antiSybilFee: number;
```

Require anti-sybil fee for the click action. If true, the user must pay a transaction
fee to complete the requirement.

### requireSignature

```ts
requireSignature: boolean;
```

Require signature for the click action. If true, the user must sign a transaction
to complete the requirement.

### targetUrl

```ts
targetUrl: string;
```

Target URL for the click action

## Defined in

[types/eventConfig/requirements.ts:222](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/requirements.ts#L222)
