[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / RealmsVoteAction

# Type Alias: RealmsVoteAction

```ts
type RealmsVoteAction: {
  customProgramId: string;
  daoPubKey: string;
  proposalPubKey: string;
};
```

Realms vote action type

## Type declaration

### customProgramId?

```ts
optional customProgramId: string;
```

The custom program ID for the proposal

### daoPubKey

```ts
daoPubKey: string;
```

The public key of the DAO

### proposalPubKey

```ts
proposalPubKey: string;
```

The public key of the proposal

## Defined in

[types/eventConfig/requirements.ts:343](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/eventConfig/requirements.ts#L343)
