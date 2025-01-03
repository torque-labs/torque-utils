[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / EventRequirementConfigSchema

# Variable: EventRequirementConfigSchema

```ts
const EventRequirementConfigSchema: ZodDiscriminatedUnion<"type", [ZodObject<{
  requirement: ClickActionSchema;
  type: ZodLiteral<CLICK>;
 }, "strip", ZodTypeAny, {
  requirement: ClickActionSchema;
  type: CLICK;
 }, {
  requirement: ClickActionSchema;
  type: CLICK;
 }>, ZodObject<{
  requirement: CustomEventConfigSchema;
  type: ZodLiteral<CUSTOM_EVENT>;
 }, "strip", ZodTypeAny, {
  requirement: CustomEventConfigSchema;
  type: CUSTOM_EVENT;
 }, {
  requirement: CustomEventConfigSchema;
  type: CUSTOM_EVENT;
 }>, ZodObject<{
  requirement: DriftBetActionSchema;
  type: ZodLiteral<DRIFT_BET>;
 }, "strip", ZodTypeAny, {
  requirement: DriftBetActionSchema;
  type: DRIFT_BET;
 }, {
  requirement: DriftBetActionSchema;
  type: DRIFT_BET;
}>]>;
```

The union schema for all requirement types

NOTE: Always add new requirements when EventType enum above is updated

## Defined in

[types/eventConfig/config.ts:284](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L284)
