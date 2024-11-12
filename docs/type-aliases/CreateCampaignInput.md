[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCampaignInput

# Type Alias: CreateCampaignInput

```ts
type CreateCampaignInput: {
  asymmetricRewards: {
     amount: string;
     participants: null | USER | PUBLISHER | BOTH;
     payoutTx: null | string;
     tokenAddress: string;
     userPubKey: null | string;
    }[];
  audience: null | string;
  blinkOnly: null | boolean;
  campaignContent: null | string;
  campaignDescription: null | string;
  campaignImage: null | string;
  campaignName: string;
  campaignType: CampaignType;
  conversionAudience: {
     campaignIds: string[];
     operation: ConversionAudienceOperation;
    };
  conversionCount: null | number;
  endTime: number;
  eventConfig: (
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
    })[];
  landingPage: string;
  lootBoxRewards: LootBoxRewardInputSchema;
  offerBgImage: null | string;
  offerTheme: OfferTheme;
  publisherPayoutPerConversion: number;
  publisherRewardType: RewardType;
  publisherTokenAddress: string;
  startTime: number;
  userPayoutPerConversion: number;
  userRewardType: POINTS | TOKENS | ASYMMETRIC_REWARD;
  userTokenAddress: string;
};
```

The create campaign input type.

## Type declaration

### asymmetricRewards?

```ts
optional asymmetricRewards: {
  amount: string;
  participants: null | USER | PUBLISHER | BOTH;
  payoutTx: null | string;
  tokenAddress: string;
  userPubKey: null | string;
 }[];
```

The asymmetric/raffle rewards to distribute

### audience?

```ts
optional audience: null | string;
```

The audiences that the offer/campaign is available to

### blinkOnly?

```ts
optional blinkOnly: null | boolean;
```

Deprecated: Whether the offer/campaign is blink only or not

### campaignContent?

```ts
optional campaignContent: null | string;
```

Full campaign content of the offer/campaign in Markdown
This supports large format content such as images, videos, in Markdown format

### campaignDescription?

```ts
optional campaignDescription: null | string;
```

A short description of the offer/campaign

### campaignImage?

```ts
optional campaignImage: null | string;
```

The featured image for the offer/campaign

### campaignName

```ts
campaignName: string;
```

The name of the campaign

### campaignType

```ts
campaignType: CampaignType;
```

The type of campaign

### conversionAudience?

```ts
optional conversionAudience: {
  campaignIds: string[];
  operation: ConversionAudienceOperation;
};
```

If set, the offer can only be completed by user's who have completed
a conversion for the given offers prior

### conversionAudience.campaignIds

```ts
campaignIds: string[];
```

### conversionAudience.operation

```ts
operation: ConversionAudienceOperation;
```

### conversionCount?

```ts
optional conversionCount: null | number;
```

The total number of conversions

### endTime

```ts
endTime: number;
```

The end time of the campaign/offer in Unix timestamp

### eventConfig

```ts
eventConfig: (
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
 })[];
```

The event requirements for the offer/campaign

[EventRequirementConfig](EventRequirementConfig.md)

### landingPage

```ts
landingPage: string;
```

Default launding page for the offer/campaign to link users to

### lootBoxRewards

```ts
lootBoxRewards: {
  enabled: true;
  rewards: {
     amount: number;
     users: number;
    }[];
  tokenAddress: string;
 } | {
  enabled: false;
 } = LootBoxRewardInputSchema;
```

The lootbox rewards to distribute

### offerBgImage?

```ts
optional offerBgImage: null | string;
```

The background image for the offer/campaign

### offerTheme

```ts
offerTheme: OfferTheme;
```

The theme of the offer/campaign

### publisherPayoutPerConversion

```ts
publisherPayoutPerConversion: number;
```

The payout per conversion for each referral by a publisher

### publisherRewardType

```ts
publisherRewardType: RewardType;
```

The publisher reward type

### publisherTokenAddress?

```ts
optional publisherTokenAddress: string;
```

The publisher token address

### startTime

```ts
startTime: number;
```

The start time of the campaign/offer in Unix timestamp

### userPayoutPerConversion?

```ts
optional userPayoutPerConversion: number;
```

The payout per conversion for each user

### userRewardType?

```ts
optional userRewardType: POINTS | TOKENS | ASYMMETRIC_REWARD;
```

The user reward type

### userTokenAddress?

```ts
optional userTokenAddress: string;
```

The user token address

## Defined in

[types/campaigns.ts:269](https://github.com/torque-labs/torque-utils/blob/fcba00c7b8994c0932484e8f489988b91291c603/types/campaigns.ts#L269)
