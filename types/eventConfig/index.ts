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
} from "./requirements";

import { CustomEventConfigSchema } from "../custom-events/events";

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
}

export const EventConfigSchema = z.object({
  type: z.nativeEnum(EventType),
  requirement: z
    .union([
      SwapActionSchema,
      NftCollectionTradeSchema,
      MemoActionSchema,
      ClickActionSchema,
      TensorActionSchema,
      DriftDepositActionSchema,
      NftBidBuySchema,
      RealmsVoteActionSchema,
      CustomEventConfigSchema,
      MarginfiLendActionSchema,
      KaminoLendActionSchema,
    ])
    .optional(),
});
