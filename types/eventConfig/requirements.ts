import { z } from "zod";
import {
  CustomEventBooleanConfigSchema,
  CustomEventNumberConfigSchema,
  CustomEventStringConfigSchema,
} from "../custom-events/events";

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
  targetUrl: z.string().min(1).url(),
  requireSignature: z.boolean(),
  antiSybilFee: z.coerce.number().optional(), // lamports
});

export type ClickAction = z.infer<typeof ClickActionSchema>;

/**
 * Memo action config schema
 */
export const MemoActionSchema = z.object({
  fields: z.array(
    z.union([
      CustomEventStringConfigSchema,
      CustomEventNumberConfigSchema,
      CustomEventBooleanConfigSchema,
    ])
  ),
});

/**
 * Memo action config type
 */
export type MemoAction = z.infer<typeof MemoActionSchema>;

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

export const DriftBetActionSchema = z.object({
  marketIndex: z.number(),
  shares: z.coerce.number(),
});
export type DriftBetAction = z.infer<typeof DriftBetActionSchema>;

export const StakeSolanaActionSchema = z.object({
  amount: z.coerce.number(),
  validator: z.string(),
  epochs: z.number(),
});
export type StakeSolanaAction = z.infer<typeof StakeSolanaActionSchema>;

export enum FormFieldType {
  TEXT = "text",
  EMAIL = "email",
  ULR = "url",
  NUMBER = "number",
  TEXT_AREA = "textarea",
  SELECT = "select",
}
export const FormFieldSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.nativeEnum(FormFieldType),
  required: z.boolean().nullish(),
  options: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
});
export const FormSubmissionActionSchema = z.object({
  fields: z.array(FormFieldSchema),
  antiSybilFee: z.coerce.number().optional(),
});
export type FormSubmissionAction = z.infer<typeof FormSubmissionActionSchema>;
