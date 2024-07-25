import { z } from "zod";

import {
  SwapActionSchema,
  NftCollectionTradeSchema,
  ClickActionSchema,
  SignUpActionSchema,
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
 * Schemas + types for campaigns
 */
export const AssymetricRewardSchema = z.object({
  tokenAddress: z.string(),
  amount: z.string(),
  userPubKey: z.string().nullish(),
});

export type AssymetricReward = z.infer<typeof AssymetricRewardSchema>;

/**
 * Schema for creating a new campaign
 *
 * TODO: Update as server would expect
 */
export const CreateCampaignSchema = z.object({
  campaignName: z.string(),
  campaignType: z.string(),
  landingPage: z.string(),

  eventType: z.nativeEnum(EventType),
  eventConfig: z
    .union([
      SwapActionSchema,
      NftCollectionTradeSchema,
      ClickActionSchema,
      SignUpActionSchema,
    ])
    .optional(),

  publisherRewardType: z.nativeEnum(RewardType),
  publisherTokenAddress: z.string().optional(),
  publisherPayoutPerConversion: z.number(),
  userRewardType: z.nativeEnum(RewardType).optional(),
  userTokenAddress: z.string().optional(),
  userPayoutPerConversion: z.number().optional(),

  startTime: z.number(),
  endTime: z.number(),
  audience: z.string().optional().nullable(),

  asymmetricRewards: z.array(
    z.object({
      tokenAddress: z.string(),
      amount: z.number(),
    })
  ),
});
