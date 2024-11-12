import { z } from "zod";
import { TimeConfigSchema } from "./timeConfig";
import { EventRequirementConfigSchema } from "./eventConfig";

/**
 * Offer types for campaigns
 */
export enum OfferType {
  CLICK = "CLICK", // TODO: EVENT
  BOUNTY = "BOUNTY", // TODO: ACTION
}

/**
 * Campaign types
 */
export enum CampaignType {
  CLICK = "CLICK",
  BOUNTY = "BOUNTY",
}

/**
 * Offer Themes
 */
export enum OfferTheme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

/**
 * Reward types for campaign conversions
 */
export enum RewardType {
  POINTS = "POINTS",
  TOKENS = "TOKENS",
  ASYMMETRIC_REWARD = "ASYMMETRIC_REWARD",
}

/**
 * Raffle participant types
 */
export enum RaffleParticipants {
  USER = "USER",
  PUBLISHER = "PUBLISHER",
  BOTH = "BOTH",
}

/**
 * Conversion Audience Operations
 */
export enum ConversionAudienceOperation {
  AND = "AND",
  OR = "OR",
}

/**
 * Conversion audience schema
 */
export const ConversionAudienceSchema = z.object({
  campaignIds: z.array(z.string()),
  operation: z.nativeEnum(ConversionAudienceOperation),
});

/**
 * Conversion audience type
 */
export type ConversionAudience = z.infer<typeof ConversionAudienceSchema>;

/**
 * Schemas + types for campaigns
 */

/**
 * Asymmetric Reward Schema
 */
export const AsymmetricRewardSchema = z.object({
  /**
   * The token address to reward
   */
  tokenAddress: z.string(),
  /**
   * The amount to reward
   */
  amount: z.string(),
  /**
   * Leave blank: The user public key that will be populated in the payout transaction
   */
  userPubKey: z.string().nullish(),
  /**
   * Who can participate in the raffle, users, publishers, or both
   */
  participants: z.nativeEnum(RaffleParticipants).nullish(),
  /**
   * Leave blank: The transaction hash of the payout transaction
   */
  payoutTx: z.string().nullish(),
});

/**
 * Asymmetric Reward type
 */
export type AsymmetricReward = z.infer<typeof AsymmetricRewardSchema>;

/**
 * Loot Box Reward Schema
 */
export const LootBoxRewardSchema = z.object({
  /**
   * The token address to reward
   */
  tokenAddress: z.string().min(1, "Token address is required"),
  /**
   * The groups of rewards to distribute
   */
  rewards: z.array(
    z.object({ amount: z.coerce.number(), users: z.coerce.number() })
  ),
});

/**
 * Loot Box Reward Schematype
 */
export type LootBoxReward = z.infer<typeof LootBoxRewardSchema>;

/**
 * Loot Box form input schema for creating a new campaign
 */
export const LootBoxRewardInputSchema = z.discriminatedUnion("enabled", [
  z
    .object({
      /**
       * Whether the loot box reward is enabled or not
       */
      enabled: z.literal(true),
    })
    .merge(LootBoxRewardSchema),
  z.object({
    /**
     * Wether the loot box reward is disabled or not
     */
    enabled: z.literal(false),
  }),
]);

/**
 * Loot Box form input type
 */
export type LootBoxRewardInput = z.infer<typeof LootBoxRewardInputSchema>;

/**
 * Campaign filter schema
 */
export const CampaignRequestParamsSchema = z.object({
  limit: z.number().optional(),
  page: z.number().optional(),
  status: z.string().optional(),
  advertiserPubKey: z.string().optional(),
});

/**
 * Campaign filter type
 */
export type CampaignRequestParams = z.infer<typeof CampaignRequestParamsSchema>;

/**
 * Schema for creating a new campaign
 */
export const CreateCampaignInputSchema = z.object({
  /**
   * The name of the campaign
   */
  campaignName: z.string(),
  /**
   * The type of campaign
   */
  campaignType: z.nativeEnum(CampaignType),
  /**
   * A short description of the offer/campaign
   */
  campaignDescription: z.string().max(250).nullish(),
  /**
   * Full campaign content of the offer/campaign in Markdown
   * This supports large format content such as images, videos, in Markdown format
   */
  campaignContent: z.string().nullish(),
  /**
   * The featured image for the offer/campaign
   */
  campaignImage: z.string().nullish(),
  /**
   * Default launding page for the offer/campaign to link users to
   */
  landingPage: z.string(),
  /**
   * Deprecated: Whether the offer/campaign is blink only or not
   */
  blinkOnly: z.boolean().nullish(),
  /**
   * The theme of the offer/campaign
   */
  offerTheme: z.nativeEnum(OfferTheme),
  /**
   * The background image for the offer/campaign
   */
  offerBgImage: z.string().nullish(),
  /**
   * The event requirements for the offer/campaign
   *
   * {@link EventRequirementConfig}
   */
  eventConfig: z.array(EventRequirementConfigSchema),
  /**
   * The total number of conversions
   */
  conversionCount: z.number().optional().nullable(),
  /**
   * The publisher reward type
   */
  publisherRewardType: z.nativeEnum(RewardType),
  /**
   * The publisher token address
   */
  publisherTokenAddress: z.string().optional(),
  /**
   * The payout per conversion for each referral by a publisher
   */
  publisherPayoutPerConversion: z.number(),
  /**
   * The user reward type
   */
  userRewardType: z.nativeEnum(RewardType).optional(),
  /**
   * The user token address
   */
  userTokenAddress: z.string().optional(),
  /**
   * The payout per conversion for each user
   */
  userPayoutPerConversion: z.number().optional(),
  /**
   * The asymmetric/raffle rewards to distribute
   */
  asymmetricRewards: z.array(AsymmetricRewardSchema).optional(),
  /**
   * The lootbox rewards to distribute
   */
  lootBoxRewards: LootBoxRewardInputSchema,
  /**
   * The start time of the campaign/offer in Unix timestamp
   */
  startTime: z.number(),
  /**
   * The end time of the campaign/offer in Unix timestamp
   */
  endTime: z.number(),
  /**
   * The audiences that the offer/campaign is available to
   */
  audience: z.string().optional().nullable(),
  /**
   * If set, the offer can only be completed by user's who have completed
   * a conversion for the given offers prior
   */
  conversionAudience: ConversionAudienceSchema.optional(),
});

/**
 * The create campaign input type.
 */
export type CreateCampaignInput = z.infer<typeof CreateCampaignInputSchema>;
