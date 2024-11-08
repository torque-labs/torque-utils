import { z } from "zod";
import { TimeConfigSchema } from "./timeConfig";
import { EventConfigSchema } from "./eventConfig";

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
  tokenAddress: z.string(),
  amount: z.string(),
  userPubKey: z.string().nullish(),
  participants: z.nativeEnum(RaffleParticipants).nullish(),
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
  tokenAddress: z.string().min(1, "Token address is required"),
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
      enabled: z.literal(true),
    })
    .merge(LootBoxRewardSchema),
  z.object({
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
  // Campaign Details
  campaignName: z.string(),
  campaignType: z.string(),
  campaignDescription: z.string().max(250).nullish(),
  campaignContent: z.string().nullish(),
  campaignImage: z.string().nullish(),
  landingPage: z.string(),
  blinkOnly: z.boolean().nullish(),

  // Offer Customization
  offerTheme: z.nativeEnum(OfferTheme),
  offerBgImage: z.string().nullish(),

  // Conversion Details
  eventConfig: z.array(EventConfigSchema),

  // Reward Details
  conversionCount: z.number().optional().nullable(),
  publisherRewardType: z.nativeEnum(RewardType),
  publisherTokenAddress: z.string().optional(),
  publisherPayoutPerConversion: z.number(),
  userRewardType: z.nativeEnum(RewardType).optional(),
  userTokenAddress: z.string().optional(),
  userPayoutPerConversion: z.number().optional(),
  asymmetricRewards: z.array(AsymmetricRewardSchema).optional(),
  lootBoxRewards: LootBoxRewardInputSchema,

  // Time Details
  startTime: z.number(),
  endTime: z.number(),

  // Audience Details
  audience: z.string().optional().nullable(),
  conversionAudience: ConversionAudienceSchema.optional(),
});

/**
 *
 */
export type CreateCampaignInput = z.infer<typeof CreateCampaignInputSchema>;
