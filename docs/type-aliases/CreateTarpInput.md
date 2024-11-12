[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateTarpInput

# Type Alias: CreateTarpInput

```ts
type CreateTarpInput: {
  amount: number;
  audience: null | string;
  blinkOnly: null | boolean;
  content: null | string;
  conversionAudience: {
     campaignIds: string[];
     operation: ConversionAudienceOperation;
    };
  description: null | string;
  endTime: number;
  eventConfig: EventRequirementConfigSchema;
  imageUrl: null | string;
  maxEntries: null | number;
  participants: TarpParticipants;
  startTime: number;
  targetLink: null | string;
  timeConfig: {
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
  title: string;
  tokenMint: string;
  tokenStandard: TokenStandard;
};
```

## Type declaration

### amount

```ts
amount: number;
```

### audience?

```ts
optional audience: null | string;
```

### blinkOnly?

```ts
optional blinkOnly: null | boolean;
```

### content?

```ts
optional content: null | string;
```

### conversionAudience?

```ts
optional conversionAudience: {
  campaignIds: string[];
  operation: ConversionAudienceOperation;
};
```

### conversionAudience.campaignIds

```ts
campaignIds: string[];
```

### conversionAudience.operation

```ts
operation: ConversionAudienceOperation;
```

### description?

```ts
optional description: null | string;
```

### endTime

```ts
endTime: number;
```

### eventConfig

```ts
eventConfig: 
  | {
  requirement: ClickActionSchema;
  type: CLICK;
 }
  | {
  requirement: CustomEventConfigSchema;
  type: CUSTOM_EVENT;
 }
  | {
  requirement: DriftBetActionSchema;
  type: DRIFT_BET;
 }
  | {
  requirement: DriftDepositActionSchema;
  type: DRIFT_DEPOSIT;
 }
  | {
  requirement: FormSubmissionActionSchema;
  type: FORM_SUBMISSION;
 }
  | {
  requirement: KaminoLendActionSchema;
  type: KAMINO_LEND;
 }
  | {
  requirement: MarginfiLendActionSchema;
  type: MARGINFI_LEND;
 }
  | {
  requirement: MemoActionSchema;
  type: MEMO;
 }
  | {
  requirement: NftBidBuySchema;
  type: NFT_BUY_BID;
 }
  | {
  requirement: NftCollectionTradeSchema;
  type: NFT_COLLECTION_TRADE;
 }
  | {
  requirement: RealmsVoteActionSchema;
  type: REALMS_VOTE;
 }
  | {
  requirement: StakeSolanaActionSchema;
  type: STAKE_SOL;
 }
  | {
  requirement: SwapActionSchema;
  timeConfig: {
     duration: number;
     requirement: TokenHoldingTimeConfigSchema;
     type: TOKEN_HOLDING;
    };
  type: SWAP;
 }
  | {
  requirement: TensorActionSchema;
  type: TENSOR_BID;
 }
  | {
  requirement: TensorActionSchema;
  type: TENSOR_BUY;
 } = EventRequirementConfigSchema;
```

### imageUrl?

```ts
optional imageUrl: null | string;
```

### maxEntries?

```ts
optional maxEntries: null | number;
```

### participants

```ts
participants: TarpParticipants;
```

### startTime

```ts
startTime: number;
```

### targetLink?

```ts
optional targetLink: null | string;
```

### timeConfig?

```ts
optional timeConfig: {
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

### title

```ts
title: string;
```

### tokenMint

```ts
tokenMint: string;
```

### tokenStandard

```ts
tokenStandard: TokenStandard;
```

## Defined in

[types/tarp.ts:53](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/tarp.ts#L53)
