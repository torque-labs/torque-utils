[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfig

# Type Alias: TimeConfig

```ts
type TimeConfig: {
  duration: number;
  requirement: TokenHoldingTimeConfigSchema;
  type: TOKEN_HOLDING;
 } | {
  duration: number;
  requirement: OpenPositionTimeConfigSchema;
  type: OPEN_POSITION;
 } | {
  duration: number;
  requirement: StakeSolTimeConfigSchema;
  type: STAKE_SOL;
};
```

The time config type

## Defined in

[types/timeConfig/config.ts:88](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/timeConfig/config.ts#L88)
