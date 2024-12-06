import { z } from "zod";
import { EventType } from "./eventConfig";

/**
 * Marginfi lend transaction ingest schema
 */
export const MarginfiLendIngestSchema = z.object({
    bankAddress: z.string(),
    amount: z.coerce.number(),
});

/**
 * Marginfi lend transaction ingest type
 */
export type MarginfiLendIngest = z.infer<typeof MarginfiLendIngestSchema>;

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
        eventType: z.literal(EventType.MEMO),
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
    z
        .object({
            eventType: z.literal(EventType.MARGINFI_LEND),
        })
        .merge(MarginfiLendIngestSchema),
    z.object({
        eventType: z.literal(EventType.KAMINO_LEND),
        tokenAddress: z.string(),
        amount: z.number(),
    }),
    z.object({
        eventType: z.literal(EventType.DRIFT_BET),
        marketIndex: z.number(),
        better: z.string(),
        shares: z.number(),
        depositAmount: z.number(),
    }),
    z.object({
        eventType: z.literal(EventType.STAKE_SOL),
        stakeAuthority: z.string(),
        validator: z.string(),
        amount: z.number(),
        stakeAccount: z.string(),
    }),
    z.object({
        eventType: z.literal(EventType.BURN_TOKEN),
        tokenAddress: z.string(),
        amount: z.coerce.number(),
        wallet: z.string(),
    }),
    z.object({
        eventType: z.literal(EventType.LOCK_TOKEN),
        tokenAddress: z.string(),
        amount: z.coerce.number(),
        wallet: z.string(),
    }),
    z.object({
        eventType: z.literal(EventType.BUY_AND_LOCK_TOKEN),
        tokenAddress: z.string(),
        amount: z.coerce.number(),
        wallet: z.coerce.number(),
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
        z.record(z.string(), z.string().or(z.number()).or(z.boolean())),
    ),
    event_data: z.record(z.string(), z.string().or(z.number()).or(z.boolean())),
    context: z.record(z.string(), z.string().or(z.number()).or(z.boolean())).nullish(),
});

/**
 * Custom event request type
 */
export type CustomEventRequest = z.infer<typeof CustomEventRequestSchema>;
