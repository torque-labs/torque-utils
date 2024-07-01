import { z } from "zod";

export const SwapActionSchema = z.union([
    z.object({
        inToken: z.string(),
        inAmount: z.coerce.number(),
        usdcValue: z.coerce.number().optional(),
    }),
    z.object({
        outToken: z.string(),
        outAmount: z.coerce.number(),
        usdcValue: z.coerce.number().optional(),
    }),
    z.object({
        inToken: z.string(),
        outToken: z.string(),
        inAmount: z.coerce.number(),
        usdcValue: z.coerce.number().optional(),
    }),
    z.object({
        inToken: z.string(),
        outToken: z.string(),
        outAmount: z.coerce.number(),
        usdcValue: z.coerce.number().optional(),
    }),
]);
export type SwapAction = z.infer<typeof SwapActionSchema>;

export enum NftCollectionTradeType {
    BUY = "BUY",
    SELL = "SELL",
    TRADE = "TRADE",
}
export const NftCollectionTradeSchema = z.object({
    collectionAddress: z.string(),
    tradeType: z.nativeEnum(NftCollectionTradeType)
});
export type NftCollectionTradeAction = z.infer<typeof NftCollectionTradeSchema>;

// export interface RealmsVoteAction {
//     daoName: string;
//     proposalId: string;
//     choice: "Yes" | "No" | "Abstain";
// }
// export interface SniperRaffleAction {
//     raffleKey: string;
// }

// export interface HedgehogBetAction {
//     marketKey: string;
// }