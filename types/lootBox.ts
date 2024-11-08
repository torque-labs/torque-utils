import { z } from "zod";

export const CreateTreasuryInputSchema = z.object({
    offerId: z.string(),
    imageUrl: z.string().nullish(),
    title: z.string().nullish(),
    description: z.string().nullish(),
    payouts: z.array(z.number()),
    payoutsAvailable: z.array(z.number()),
    tokenAddress: z.string().nullish(),
});
export type CreateTreasuryInput = z.infer<typeof CreateTreasuryInputSchema>;

export const DeleteTreasuryInputSchema = z.object({
    treasuryId: z.string(),
});
export type DeleteTreasuryInput = z.infer<typeof DeleteTreasuryInputSchema>;

