import { z } from "zod";

/**
 * Base schema for swap action
 */
const SwapActionBaseSchema = z.object({
  inToken: z.string().nullish(),
  outToken: z.string().nullish(),
  inAmount: z.coerce.number().nullish(),
  outAmount: z.coerce.number().nullish(),
  usdcValue: z.coerce.number().nullish(),
});

/**
 * Offer types for campaigns
 */
export enum OfferType {
  CLICK = "CLICK", // TODO: EVENT
  BOUNTY = "BOUNTY", // TODO: ACTION
}

/**
 * Refined schema for swap action with valid combinations
 *
 * @description
 * sell -> token and amount
 * buy -> token and amount
 * swap -> both token and one amount
 */
export const SwapActionSchema = SwapActionBaseSchema.refine(
  (data) => {
    // sell -> token and amount
    if (data.inToken && data.inAmount !== null) {
      return true;
    }
    // buy -> token and amount
    if (data.outToken && data.outAmount !== null) {
      return true;
    }
    // swap -> both token and one amount
    if (
      data.inToken &&
      data.outToken &&
      (data.inAmount !== null || data.outAmount !== null)
    ) {
      return true;
    }
    return false;
  },
  {
    message: "Invalid swap action configuration.",
    path: [],
  }
);
/**
 * Swap action type
 */
export type SwapAction = z.infer<typeof SwapActionSchema>;

/**
 * NFT collection trade types
 */
export enum NftCollectionTradeType {
  BUY = "BUY",
  SELL = "SELL",
  TRADE = "TRADE",
}

/**
 * NFT collection trade schema
 */
export const NftCollectionTradeSchema = z.object({
  collectionAddress: z.string(),
  tradeType: z.nativeEnum(NftCollectionTradeType),
});

/**
 * NFT collection trade action
 */
export type NftCollectionTradeAction = z.infer<typeof NftCollectionTradeSchema>;

/**
 * Hedgehog place bet action schema
 */
export const HedgehogPlaceBetActionSchema = z.object({
  market: z.string(),
  usdcAmount: z.coerce.number(),
});

/**
 * Hedgehog place bet action type
 */
export type HedgehogPlaceBetAction = z.infer<
  typeof HedgehogPlaceBetActionSchema
>;

export const ClickActionSchema = z.object({
  enableBlink: z.boolean(),
});
export type ClickAction = z.infer<typeof ClickActionSchema>;

const solanaActionParamSchema = z.object({
  label: z.string(),
  paramName: z.string(),
  required: z.boolean(),
});
export type SolanaActionParam = z.infer<typeof solanaActionParamSchema>;
export const SignUpActionSchema = z.object({
  inputFields: z.array(solanaActionParamSchema),
});
export type SignUpAction = z.infer<typeof SignUpActionSchema>;
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
 * Schema for creating a new campaign
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
