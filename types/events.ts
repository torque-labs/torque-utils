import { custom, z } from "zod";
import { EventType } from "./eventConfig";

/**
 * On-chain event request schema used to validate the request body sent to API from lambda
 */
export const OnChainEventRequestSchema = z.discriminatedUnion("eventType", [
  z.object({
    eventType: z.literal(EventType.CLICK),
    campaignId: z.string(),
    publisherHandle: z.string(),
  }),
  z.object({
    eventType: z.literal(EventType.SWAP),
    inToken: z.string().optional(),
    outToken: z.string().optional(),
    inAmount: z.number().optional(),
    outAmount: z.number().optional(),
  }),
  z.object({
    eventType: z.literal(EventType.NFT_COLLECTION_TRADE),
    collectionAddress: z.string(),
    buyer: z.string(),
    seller: z.string(),
    mint: z.string(),
    price: z.number(),
  }),
  z.object({
    eventType: z.literal(EventType.HEDGEHOG_PLACE_BET),
    market: z.string(),
    usdcAmount: z.number(),
    feePayer: z.string(),
  }),
  z.object({
    eventType: z.literal(EventType.SIGN_UP),
    message: z.string(),
  }),
  z.object({
    eventType: z.literal(EventType.TENSOR_BID),
    whitelist: z.string(),
    owner: z.string(),
    amount: z.number(),
  }),
  z.object({
    eventType: z.literal(EventType.NFT_BUY_BID),
    nftMint: z.string(),
    bidder: z.string(),
    amount: z.number(),
  }),
  z.object({
    eventType: z.literal(EventType.REALMS_VOTE),
    daoPubKey: z.string(),
    proposalPubKey: z.string(),
    customProgramId: z.string().optional(),
  }),
]);

/**
 * On-chain event request type
 */
export type OnChainEventRequest = z.infer<typeof OnChainEventRequestSchema>;

/**
 * Custom event request schema used to validate the request body sent to API
 */
export const CustomEventRequestSchema = z.object({
  event_name: z.string(),
  timestamp: z.string().or(z.number()),
  user: z.intersection(
    z.object({
      pubKey: z.string(),
    }),
    z.record(z.string(), z.string().or(z.number()).or(z.boolean()))
  ),
  event_data: z.record(z.string(), z.string().or(z.number()).or(z.boolean())),
  context: z
    .record(z.string(), z.string().or(z.number()).or(z.boolean()))
    .nullish(),
});

/**
 * Custom event request type
 */
export type CustomEventRequest = z.infer<typeof CustomEventRequestSchema>;
