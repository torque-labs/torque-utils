import { z } from "zod";

/**
 * The input schema for creating a loot box treasury
 */
export const CreateTreasuryInputSchema = z.object({
  /**
   * The offer ID of the campaign/offer to create the loot box treasury for
   */
  offerId: z.string(),
  imageUrl: z.string().nullish(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  payouts: z.array(z.number()),
  payoutsAvailable: z.array(z.number()),
  tokenAddress: z.string().nullish(),
});

/**
 * Create treasury input type
 */
export type CreateTreasuryInput = z.infer<typeof CreateTreasuryInputSchema>;

/**
 * The schema for deleting a loot box treasury
 */
export const DeleteTreasuryInputSchema = z.object({
  treasuryId: z.string(),
});

/**
 * Delete treasury input type
 */
export type DeleteTreasuryInput = z.infer<typeof DeleteTreasuryInputSchema>;
