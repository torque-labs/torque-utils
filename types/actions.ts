import { z } from "zod";

const TimeRequirementSchema = z.object({
  positionOpenThroughDate: z.date().optional(),
  tokenBalanceHeldThroughDate: z.date().optional(),
});
export type TimeRequirement = z.infer<typeof TimeRequirementSchema>;

/**
 * SWAP ACTIONS
 * ============================================================
 */

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
 * NFT COLLECTION ACTIONS
 * ============================================================
 */

/**
 * NFT collection trade types
 */
export enum NftCollectionTradeType {
  BUY = "BUY",
  SELL = "SELL",
  TRADE = "TRADE",
  BID = "BID",
}

/**
 * NFT collection trade schema
 */
export const NftCollectionTradeSchema = z.object({
  collectionAddresses: z.array(z.string()),
  tradeType: z.nativeEnum(NftCollectionTradeType),
  timeRequirement: TimeRequirementSchema.optional(),
});

/**
 * NFT collection trade action
 */
export type NftCollectionTradeAction = z.infer<typeof NftCollectionTradeSchema>;

/**
 * HEDGEHOG ACTIONS
 * ============================================================
 */
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

/**
 * MEMO ACTIONS
 * ============================================================
 */

/**
 * Click action schema for memo
 */
export const ClickActionSchema = z.object({
  enableBlink: z.boolean(),
});

export type ClickAction = z.infer<typeof ClickActionSchema>;

/**
 * Generic memo action input param schema
 */
const solanaActionParamSchema = z.object({
  label: z.string(),
  paramName: z.string(),
  required: z.boolean(),
});

/**
 * Memo action param input type
 */
export type SolanaActionParam = z.infer<typeof solanaActionParamSchema>;

/**
 * Sign up action schema
 *
 * TODO: Rename this to generic instead of sign up
 * TODO: Add true sign up schema with required email field
 */
export const SignUpActionSchema = z.object({
  inputFields: z.array(solanaActionParamSchema),
});

/**
 * Sign up action type
 */
export type SignUpAction = z.infer<typeof SignUpActionSchema>;
