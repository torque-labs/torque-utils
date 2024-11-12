[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCampaignInput

# Type Alias: CreateCampaignInput

> **CreateCampaignInput**: `object`

The create campaign input type.

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `asymmetricRewards`? | `object`[] | - | The asymmetric/raffle rewards to distribute |
| `audience`? | `null` \| `string` | - | The audiences that the offer/campaign is available to |
| `blinkOnly`? | `null` \| `boolean` | - | Deprecated: Whether the offer/campaign is blink only or not |
| `campaignContent`? | `null` \| `string` | - | Full campaign content of the offer/campaign in Markdown This supports large format content such as images, videos, in Markdown format |
| `campaignDescription`? | `null` \| `string` | - | A short description of the offer/campaign |
| `campaignImage`? | `null` \| `string` | - | The featured image for the offer/campaign |
| `campaignName` | `string` | - | The name of the campaign |
| `campaignType` | [`CampaignType`](../enumerations/CampaignType.md) | - | The type of campaign |
| `conversionAudience`? | `object` | - | If set, the offer can only be completed by user's who have completed a conversion for the given offers prior |
| `conversionAudience.campaignIds` | `string`[] | - | - |
| `conversionAudience.operation` | [`ConversionAudienceOperation`](../enumerations/ConversionAudienceOperation.md) | - | - |
| `conversionCount`? | `null` \| `number` | - | The total number of conversions |
| `endTime` | `number` | - | The end time of the campaign/offer in Unix timestamp |
| `eventConfig` | (`object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`)[] | - | The event requirements for the offer/campaign [EventRequirementConfig](EventRequirementConfig.md) |
| `landingPage` | `string` | - | Default launding page for the offer/campaign to link users to |
| `lootBoxRewards` | `object` \| `object` | LootBoxRewardInputSchema | The lootbox rewards to distribute |
| `offerBgImage`? | `null` \| `string` | - | The background image for the offer/campaign |
| `offerTheme` | [`OfferTheme`](../enumerations/OfferTheme.md) | - | The theme of the offer/campaign |
| `publisherPayoutPerConversion` | `number` | - | The payout per conversion for each referral by a publisher |
| `publisherRewardType` | [`RewardType`](../enumerations/RewardType.md) | - | The publisher reward type |
| `publisherTokenAddress`? | `string` | - | The publisher token address |
| `startTime` | `number` | - | The start time of the campaign/offer in Unix timestamp |
| `userPayoutPerConversion`? | `number` | - | The payout per conversion for each user |
| `userRewardType`? | `POINTS` \| `TOKENS` \| `ASYMMETRIC_REWARD` | - | The user reward type |
| `userTokenAddress`? | `string` | - | The user token address |

## Defined in

[types/campaigns.ts:269](https://github.com/torque-labs/torque-utils/blob/a612e615fa21888d00ebb7bf70f9910fab4be80a/types/campaigns.ts#L269)
