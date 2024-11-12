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
  /**
   * The token to swap from
   */
  inToken: z.string().nullish(),
  /**
   * The token to swap to
   */
  outToken: z.string().nullish(),
  /**
   * The amount of tokens to swap from
   */
  inAmount: z.coerce.number().nullish(),
  /**
   * The amount of tokens to swap to
   */
  outAmount: z.coerce.number().nullish(),
  /**
   * The USDC value
   * TODO: USDC Value for which token?
   */
  usdcValue: z.coerce.number().nullish(),
});

/**
 * Refined schema for swap action with valid combinations
 *
 * @remarks
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
  /**
   * The collection address to trace
   */
  collectionAddress: z.string(),
  /**
   * The type of trade to perform
   */
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
  /**
   * The NFT mint to bid or buy
   */
  mint: z.string(),
  /**
   * The minimum amount to bid
   */
  minAmount: z.number().optional(),
});

/**
 * NFT bid buy action type
 */
export type NftBidBuyAction = z.infer<typeof NftBidBuySchema>;

/**
 * TENSOR ACTIONS
 * ============================================================
 */

/**
 * Tensor action schema
 */
export const TensorActionSchema = z.object({
  /**
   * The collection ID of the tension collection for the requirement
   */
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
  /**
   * The minimum amount to deposit
   */
  minAmount: z.coerce.number(),
  /**
   * The token address to deposit
   */
  tokenAddress: z.string(),
});

/**
 * Dirft deposit action type
 */
export type DriftDepositAction = z.infer<typeof DriftDepositActionSchema>;

/**
 * Drift bet action schema
 */
export const DriftBetActionSchema = z.object({
  /**
   * The market index to bet on
   */
  marketIndex: z.number(),
  /**
   * The number of minimum shars to bet
   */
  shares: z.coerce.number(),
});

/**
 * Dirft bet action type
 */
export type DriftBetAction = z.infer<typeof DriftBetActionSchema>;

/**
 * MEMO ACTIONS
 * ============================================================
 */

/**
 * Click action schema for memo
 */
export const ClickActionSchema = z.object({
  /**
   * Target URL for the click action
   */
  targetUrl: z.string().min(1).url(),
  /**
   * Require signature for the click action. If true, the user must sign a transaction
   * to complete the requirement.
   */
  requireSignature: z.boolean(),
  /**
   * Require anti-sybil fee for the click action. If true, the user must pay a transaction
   * fee to complete the requirement.
   */
  antiSybilFee: z.coerce.number().optional(), // lamports
});

/**
 * Click action type
 */
export type ClickAction = z.infer<typeof ClickActionSchema>;

/**
 * Memo action config schema
 */
export const MemoActionSchema = z.object({
  /**
   * The fields to collect from the user
   */
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
 * Form fields allowed for blink/action forms
 */
export enum FormFieldType {
  TEXT = "text",
  EMAIL = "email",
  ULR = "url",
  NUMBER = "number",
  TEXT_AREA = "textarea",
  SELECT = "select",
}

/**
 * Individual form field schema
 */
export const FormFieldSchema = z.object({
  /**
   * The name of the field
   */
  name: z.string(),
  /**
   * The label for the field
   */
  label: z.string(),
  /**
   * The type of field
   */
  type: z.nativeEnum(FormFieldType),
  /**
   * Whether the field is required or not
   */
  required: z.boolean().nullish(),
  /**
   * The options for the field (eg. dropdowns/select)
   */
  options: z
    .array(
      z.object({
        /**
         * The option label
         */
        label: z.string(),
        /**
         * The option value
         */
        value: z.string(),
      })
    )
    .optional(),
});

/**
 * Form submission action schema
 */
export const FormSubmissionActionSchema = z.object({
  /**
   * The fields to collect from the user
   */
  fields: z.array(FormFieldSchema),
  /**
   * Require anti-sybil fee for the form submission. If true, the user must pay a transaction
   * fee to complete the requirement. Otherwise, the form submission will be completed and
   * validated with a signature.
   */
  antiSybilFee: z.coerce.number().optional(),
});

/**
 * Form submission action type
 */
export type FormSubmissionAction = z.infer<typeof FormSubmissionActionSchema>;

/**
 * VOTING ACTIONS
 * ============================================================
 */

/**
 * Realms vote action schema
 */
export const RealmsVoteActionSchema = z.object({
  /**
   * The public key of the DAO
   */
  daoPubKey: z.string(),
  /**
   * The public key of the proposal
   */
  proposalPubKey: z.string(),
  /**
   * The custom program ID for the proposal
   */
  customProgramId: z.string().optional(),
});

/**
 * Realms vote action type
 */
export type RealmsVoteAction = z.infer<typeof RealmsVoteActionSchema>;

/**
 * LENDING ACTIONS
 */
/**
 * Marginfi lend action schema
 */
export const MarginfiLendActionSchema = z.object({
  /**
   * The token address to lend
   */
  tokenAddress: z.string(),
  /**
   * The minimum amount to lend
   */
  amount: z.coerce.number(),
});

/**
 * Marginfi lend action type
 */
export type MarginfiLendAction = z.infer<typeof MarginfiLendActionSchema>;

/**
 * Kamino lend action schema
 */
export const KaminoLendActionSchema = z.object({
  /**
   * The token address to lend
   */
  tokenAddress: z.string(),
  /**
   * The minimum amount to lend
   */
  amount: z.coerce.number(),
});

/**
 * Kamino lend action type
 */
export type KaminoLendAction = z.infer<typeof KaminoLendActionSchema>;

/**
 * STAKING ACTIONS
 * ============================================================
 */

/**
 * Stake solana action schema
 */
export const StakeSolanaActionSchema = z.object({
  /**
   * The minimum amount to stake
   */
  amount: z.coerce.number(),
  /**
   * The validator to stake with
   */
  validator: z.string(),
  /**
   * The minimum number of epochs to stake for
   */
  epochs: z.coerce.number(),
});

/**
 * Stake solana action type
 */
export type StakeSolanaAction = z.infer<typeof StakeSolanaActionSchema>;
