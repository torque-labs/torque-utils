import { z } from "zod";

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
 * SINGLE NFT ACTIONS
 * ============================================================
 */
export const NftBidBuySchema = z.object({
  mint: z.string(),
  minAmount: z.number().optional(),
});
export type NftBidBuy = z.infer<typeof NftBidBuySchema>;

/**
 * TENSOR ACTIONS
 * ============================================================
 */

/**
 * Tensor action schema
 */
export const TensorActionSchema = z.object({
  collectionIds: z.array(z.string().min(1)),
});

/**
 * Tensor action type
 */
export type TensorAction = z.infer<typeof TensorActionSchema>;

/**
 * DRIFT ACTIONS
 * ============================================================
 */
/**
 * Drift Deposit action schema
 */
export const DriftDepositActionSchema = z.object({
  minAmount: z.coerce.number(),
  tokenAddress: z.string(),
});
export type DriftDepositAction = z.infer<typeof DriftDepositActionSchema>;

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

/**
 * REALMS VOTE ACTION
 */
export const RealmsVoteActionSchema = z.object({
  daoPubKey: z.string(),
  proposalPubKey: z.string(),
  customProgramId: z.string().optional(),
});
export type RealmsVoteAction = z.infer<typeof RealmsVoteActionSchema>;

/**
 * MARGINFI LEND ACTION
 */
export const MarginfiLendIngestSchema = z.object({
  bankAddress: z.string(),
  amount: z.coerce.number(),
});
export type MarginfiLendIngest = z.infer<typeof MarginfiLendIngestSchema>;
export const MarginfiLendActionSchema = z.object({
  tokenAddress: z.string(),
  amount: z.coerce.number(),
});
export type MarginfiLendAction = z.infer<typeof MarginfiLendActionSchema>;

export const KaminoLendActionSchema = z.object({
  tokenAddress: z.string(),
  amount: z.coerce.number(),
});
export type KaminoLendAction = z.infer<typeof KaminoLendActionSchema>;
