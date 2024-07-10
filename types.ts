import { z } from "zod";

const SwapActionBaseSchema = z.object({
  inToken: z.string().nullish(),
  outToken: z.string().nullish(),
  inAmount: z.coerce.number().nullish(),
  outAmount: z.coerce.number().nullish(),
  usdcValue: z.coerce.number().nullish(),
});

export enum OfferType {
  CLICK = "CLICK", // TODO: EVENT
  BOUNTY = "BOUNTY", // TODO: ACTION
}

/**
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
export type SwapAction = z.infer<typeof SwapActionSchema>;

export enum NftCollectionTradeType {
  BUY = "BUY",
  SELL = "SELL",
  TRADE = "TRADE",
}
export const NftCollectionTradeSchema = z.object({
  collectionAddress: z.string(),
  tradeType: z.nativeEnum(NftCollectionTradeType),
});
export type NftCollectionTradeAction = z.infer<typeof NftCollectionTradeSchema>;

// export interface RealmsVoteAction {
//     daoName: string;
//     proposalId: string;
//     choice: "Yes" | "No" | "Abstain";
// }
// export interface SniperRaffleAction {
//     raffleKey: string;
// }

export const HedgehogPlaceBetActionSchema = z.object({
  market: z.string(),
  usdcAmount: z.coerce.number(),
});
export type HedgehogPlaceBetAction = z.infer<
  typeof HedgehogPlaceBetActionSchema
>;

export enum EventType {
  CLICK = "CLICK",
  SWAP = "SWAP",
  NFT_COLLECTION_TRADE = "NFT_COLLECTION_TRADE",
  HEDGEHOG_PLACE_BET = "HEDGEHOG_PLACE_BET",
}
export enum CampaignType {
  CLICK = "CLICK",
  BOUNTY = "BOUNTY",
}
export enum RewardType {
  POINTS = "POINTS",
  TOKENS = "TOKENS",
  ASYMMETRIC_REWARD = "ASYMMETRIC_REWARD",
}
export const CreateCampaignSchema = z.object({
  campaignName: z.string(),
  campaignType: z.string(),
  landingPage: z.string(),

  eventType: z.nativeEnum(EventType),
  eventConfig: z.union([SwapActionSchema, NftCollectionTradeSchema]).optional(),

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
