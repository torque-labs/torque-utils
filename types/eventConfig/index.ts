import { z } from "zod";
import {
  SwapActionSchema,
  NftCollectionTradeSchema,
  HedgehogPlaceBetActionSchema,
  SignUpActionSchema,
  ClickActionSchema,
  TensorActionSchema,
  DriftDepositActionSchema,
  NftBidBuySchema,
} from "./requirements";

/**
 * Event types for for campaign conversion requirements
 */
export enum EventType {
  CLICK = "CLICK",
  SWAP = "SWAP",
  NFT_COLLECTION_TRADE = "NFT_COLLECTION_TRADE",
  HEDGEHOG_PLACE_BET = "HEDGEHOG_PLACE_BET",
  SIGN_UP = "SIGN_UP",
  TENSOR_BUY = "TENSOR_BUY",
  TENSOR_BID = "TENSOR_BID",
  DRIFT_DEPOSIT = "DRIFT_DEPOSIT",
  NFT_BUY_BID = "NFT_BUY_BID",
}

export const EventConfigSchema = z.object({
  eventType: z.nativeEnum(EventType),
  eventConfig: z
    .union([
      SwapActionSchema,
      NftCollectionTradeSchema,
      HedgehogPlaceBetActionSchema,
      SignUpActionSchema,
      ClickActionSchema,
      TensorActionSchema,
      DriftDepositActionSchema,
      NftBidBuySchema,
    ])
    .optional(),
});
