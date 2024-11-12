import { z } from "zod";
import {
  SwapActionSchema,
  NftCollectionTradeSchema,
  ClickActionSchema,
  TensorActionSchema,
  DriftDepositActionSchema,
  NftBidBuySchema,
  RealmsVoteActionSchema,
  MarginfiLendActionSchema,
  MemoActionSchema,
  KaminoLendActionSchema,
  DriftBetActionSchema,
  StakeSolanaActionSchema,
  FormSubmissionActionSchema,
} from "./requirements";

import { CustomEventConfigSchema } from "../custom-events/events";
import { TimeConfigTokenHoldingSchema } from "../timeConfig";

/**
 * Event types for for campaign conversion requirements
 *
 * Extras in DB Schema:
 * NFT_COLLECTION_BID
 * HEDGEHOG_PLACE_BET
 */
export enum EventType {
  CLICK = "CLICK",
  SWAP = "SWAP",
  NFT_COLLECTION_TRADE = "NFT_COLLECTION_TRADE",
  TENSOR_BUY = "TENSOR_BUY",
  TENSOR_BID = "TENSOR_BID",
  DRIFT_DEPOSIT = "DRIFT_DEPOSIT",
  NFT_BUY_BID = "NFT_BUY_BID",
  CUSTOM_EVENT = "CUSTOM_EVENT",
  REALMS_VOTE = "REALMS_VOTE",
  MARGINFI_LEND = "MARGINFI_LEND",
  KAMINO_LEND = "KAMINO_LEND",
  MEMO = "MEMO",
  DRIFT_BET = "DRIFT_BET",
  STAKE_SOL = "STAKE_SOL",
  FORM_SUBMISSION = "FORM_SUBMISSION",
}

/**
 * Click requirement schema
 */
export const ClickRequirementSchema = z.object({
  type: z.literal(EventType.CLICK),
  requirement: ClickActionSchema,
});

/**
 * Click requirement type
 */
export type ClickRequirement = z.infer<typeof ClickRequirementSchema>;

/**
 * Custom event requirement schema
 */
export const CustomEventRequirementSchema = z.object({
  type: z.literal(EventType.CUSTOM_EVENT),
  requirement: CustomEventConfigSchema,
});

/**
 * Custom event requirement type
 */
export type CustomEventRequirement = z.infer<
  typeof CustomEventRequirementSchema
>;

/**
 * Drift Bet requirement schema
 */
export const DriftBetRequirementSchema = z.object({
  type: z.literal(EventType.DRIFT_BET),
  requirement: DriftBetActionSchema,
});

/**
 * Drift Bet requirement type
 */
export type DriftBetRequirement = z.infer<typeof DriftBetRequirementSchema>;

/**
 * Drift Deposit requirement schema
 */
export const DriftDepositRequirementSchema = z.object({
  type: z.literal(EventType.DRIFT_DEPOSIT),
  requirement: DriftDepositActionSchema,
});

/**
 * Drift Deposit requirement type
 */
export type DriftDepositRequirement = z.infer<
  typeof DriftDepositRequirementSchema
>;

/**
 * Form Submission requirement schema
 */
export const FormSubmissionRequirementSchema = z.object({
  type: z.literal(EventType.FORM_SUBMISSION),
  requirement: FormSubmissionActionSchema,
});

/**
 * Form Submission requirement type
 */
export type FormSubmissionRequirement = z.infer<
  typeof FormSubmissionRequirementSchema
>;

/**
 * Kamino Lend requirement schema
 */
export const KaminoLendRequirementSchema = z.object({
  type: z.literal(EventType.KAMINO_LEND),
  requirement: KaminoLendActionSchema,
});

/**
 * Kamino Lend requirement type
 */
export type KaminoLendRequirement = z.infer<typeof KaminoLendRequirementSchema>;

/**
 * Marginfi Lend requirement schema
 */
export const MarginfiLendRequirementSchema = z.object({
  type: z.literal(EventType.MARGINFI_LEND),
  requirement: MarginfiLendActionSchema,
});

/**
 * Marginfi Lend requirement type
 */
export type MarginfiLendRequirement = z.infer<
  typeof MarginfiLendRequirementSchema
>;

/**
 * Memo requirement schema
 */
export const MemoRequirementSchema = z.object({
  type: z.literal(EventType.MEMO),
  requirement: MemoActionSchema,
});

/**
 * Memo requirement type
 */
export type MemoRequirement = z.infer<typeof MemoRequirementSchema>;

/**
 * NFT Bid Buy requirement schema
 */
export const NftBidBuyRequirementSchema = z.object({
  type: z.literal(EventType.NFT_BUY_BID),
  requirement: NftBidBuySchema,
});

/**
 * NFT Bid Buy requirement type
 */
export type NftBidBuyRequirement = z.infer<typeof NftBidBuyRequirementSchema>;

/**
 * NFT Collection Trade requirement schema
 */
export const NftCollectionTradeRequirementSchema = z.object({
  type: z.literal(EventType.NFT_COLLECTION_TRADE),
  requirement: NftCollectionTradeSchema,
});

/**
 * NFT Collection Trade requirement type
 */
export type NftCollectionTradeRequirement = z.infer<
  typeof NftCollectionTradeRequirementSchema
>;

/**
 * Realms Vote requirement schema
 */
export const RealmsVoteRequirementSchema = z.object({
  type: z.literal(EventType.REALMS_VOTE),
  requirement: RealmsVoteActionSchema,
});

/**
 * Realms Vote requirement type
 */
export type RealmsVoteRequirement = z.infer<typeof RealmsVoteRequirementSchema>;

/**
 * Stake Solana requirement schema
 */
export const StakeSolanaRequirementSchema = z.object({
  type: z.literal(EventType.STAKE_SOL),
  requirement: StakeSolanaActionSchema,
});

/**
 * Stake Solana requirement type
 */
export type StakeSolanaRequirement = z.infer<
  typeof StakeSolanaRequirementSchema
>;

/**
 * Swap requirement schema
 */
export const SwapRequirementSchema = z.object({
  type: z.literal(EventType.SWAP),
  requirement: SwapActionSchema,
  timeConfig: TimeConfigTokenHoldingSchema.optional(),
});

/**
 * Swap requirement type
 */
export type SwapRequirement = z.infer<typeof SwapRequirementSchema>;

/**
 * Tensor Bid requirement schema
 */
export const TensorBidRequirementSchema = z.object({
  type: z.literal(EventType.TENSOR_BID),
  requirement: TensorActionSchema,
});

/**
 * Tensor Bid requirement type
 */
export type TensorBidRequirement = z.infer<typeof TensorBidRequirementSchema>;

/**
 * Tensor Buy requirement schema
 */
export const TensorBuyRequirementSchema = z.object({
  type: z.literal(EventType.TENSOR_BUY),
  requirement: TensorActionSchema,
});

/**
 * Tensor Buy requirement type
 */
export type TensorBuyRequirement = z.infer<typeof TensorBuyRequirementSchema>;

/**
 * Local type mapping for each requirement type.
 * This is mostly to ensure that we have coverage for all EventType enum values.
 *
 * NOTE: Ensure each requirement is also added to EventRequirementConfigSchema
 * union below whenever a new EventType is added
 */
const EventTypeMapping: Record<EventType, z.ZodType> = {
  [EventType.CLICK]: ClickRequirementSchema,
  [EventType.CUSTOM_EVENT]: CustomEventRequirementSchema,
  [EventType.DRIFT_BET]: DriftBetRequirementSchema,
  [EventType.DRIFT_DEPOSIT]: DriftDepositRequirementSchema,
  [EventType.FORM_SUBMISSION]: FormSubmissionRequirementSchema,
  [EventType.KAMINO_LEND]: KaminoLendRequirementSchema,
  [EventType.MARGINFI_LEND]: MarginfiLendRequirementSchema,
  [EventType.MEMO]: MemoRequirementSchema,
  [EventType.NFT_BUY_BID]: NftBidBuyRequirementSchema,
  [EventType.NFT_COLLECTION_TRADE]: NftCollectionTradeRequirementSchema,
  [EventType.REALMS_VOTE]: RealmsVoteRequirementSchema,
  [EventType.STAKE_SOL]: StakeSolanaRequirementSchema,
  [EventType.SWAP]: SwapRequirementSchema,
  [EventType.TENSOR_BID]: TensorBidRequirementSchema,
  [EventType.TENSOR_BUY]: TensorBuyRequirementSchema,
};

/**
 * The union schema for all requirement types
 *
 * NOTE: Always add new requirements when EventType enum above is updated
 */
export const EventRequirementConfigSchema = z.discriminatedUnion("type", [
  ClickRequirementSchema,
  CustomEventRequirementSchema,
  DriftBetRequirementSchema,
  DriftDepositRequirementSchema,
  FormSubmissionRequirementSchema,
  KaminoLendRequirementSchema,
  MarginfiLendRequirementSchema,
  MemoRequirementSchema,
  NftBidBuyRequirementSchema,
  NftCollectionTradeRequirementSchema,
  RealmsVoteRequirementSchema,
  StakeSolanaRequirementSchema,
  SwapRequirementSchema,
  TensorBidRequirementSchema,
  TensorBuyRequirementSchema,
]);

/**
 * The requirement config type for each event
 *
 * Manually added to ensure we have coverage and also ensure export is correct
 */
export type EventRequirementConfig =
  | ClickRequirement
  | CustomEventRequirement
  | DriftBetRequirement
  | DriftDepositRequirement
  | FormSubmissionRequirement
  | KaminoLendRequirement
  | MarginfiLendRequirement
  | MemoRequirement
  | NftBidBuyRequirement
  | NftCollectionTradeRequirement
  | RealmsVoteRequirement
  | StakeSolanaRequirement
  | SwapRequirement
  | TensorBidRequirement
  | TensorBuyRequirement;
