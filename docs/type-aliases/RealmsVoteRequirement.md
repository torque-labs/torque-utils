[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / RealmsVoteRequirement

# Type Alias: RealmsVoteRequirement

```ts
type RealmsVoteRequirement: {
  requirement: RealmsVoteActionSchema;
  type: REALMS_VOTE;
};
```

Realms Vote requirement type

## Type declaration

### requirement

```ts
requirement: {
  customProgramId: string;
  daoPubKey: string;
  proposalPubKey: string;
 } = RealmsVoteActionSchema;
```

### requirement.customProgramId?

```ts
optional customProgramId: string;
```

The custom program ID for the proposal

### requirement.daoPubKey

```ts
daoPubKey: string;
```

The public key of the DAO

### requirement.proposalPubKey

```ts
proposalPubKey: string;
```

The public key of the proposal

### type

```ts
type: REALMS_VOTE;
```

## Defined in

[types/eventConfig/config.ts:197](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/config.ts#L197)
