import { z } from "zod";

import {
  SwapActionSchema,
  NftCollectionTradeSchema,
  ClickActionSchema,
  SignUpActionSchema,
  HedgehogPlaceBetActionSchema,
  TensorActionSchema,
  DriftDepositActionSchema,
} from "./actions.js";

/**
 * Offer types for campaigns
 */
export enum OfferType {
  CLICK = "CLICK", // TODO: EVENT
  BOUNTY = "BOUNTY", // TODO: ACTION
}

/**
 * Event types for for campaign conversion requirements
 */
export enum EventType {
  CLICK = "CLICK",
  SWAP = "SWAP",
  NFT_COLLECTION_TRADE = "NFT_COLLECTION_TRADE",
  HEDGEHOG_PLACE_BET = "HEDGEHOG_PLACE_BET",
  SIGN_UP = "SIGN_UP",
  TENSOR_BUY = "TENSOR_BUY",
  TENSOR_BID = "TENSOR_BID",
  DRIFT_DEPOSIT = "DRIFT_DEPOSIT",
}

/**
 * Campaign types
 */
export enum CampaignType {
  CLICK = "CLICK",
  BOUNTY = "BOUNTY",
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
});

/**
 * Asymmetric Reward type
 */
export type AsymmetricReward = z.infer<typeof AsymmetricRewardSchema>;

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

  // Event Details
  eventType: z.nativeEnum(EventType),
  eventConfig: z
    .union([
      SwapActionSchema,
      NftCollectionTradeSchema,
      HedgehogPlaceBetActionSchema,
      SignUpActionSchema,
      ClickActionSchema,
      TensorActionSchema,
      DriftDepositActionSchema,
    ])
    .optional(),

  // Reward Details
  conversionCount: z.number().optional().nullable(),
  publisherRewardType: z.nativeEnum(RewardType),
  publisherTokenAddress: z.string().optional(),
  publisherPayoutPerConversion: z.number(),
  userRewardType: z.nativeEnum(RewardType).optional(),
  userTokenAddress: z.string().optional(),
  userPayoutPerConversion: z.number().optional(),
  asymmetricRewards: z.array(AsymmetricRewardSchema).optional(),

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
