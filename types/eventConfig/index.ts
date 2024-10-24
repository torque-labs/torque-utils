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
import { TimeConfigSchema } from "../timeConfig";

/**
 * Event types for for campaign conversion requirements
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

export const EventConfigSchema = z.object({
  type: z.nativeEnum(EventType),
  requirement: z
    .union([
      CustomEventConfigSchema,
      SwapActionSchema,
      NftCollectionTradeSchema,
      MemoActionSchema,
      ClickActionSchema,
      TensorActionSchema,
      DriftDepositActionSchema,
      NftBidBuySchema,
      RealmsVoteActionSchema,
      MarginfiLendActionSchema,
      KaminoLendActionSchema,
      DriftBetActionSchema,
      StakeSolanaActionSchema,
      FormSubmissionActionSchema,
    ])
    .optional(),
  timeConfig: TimeConfigSchema.optional(),
});
