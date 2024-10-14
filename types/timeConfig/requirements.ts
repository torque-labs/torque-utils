import { z } from "zod";

export const TokenHoldingTimeConfigSchema = z.object({
  token: z.string(),
  amount: z.number(),
  tokenStandard: z.string().optional(),
});

export type TokenHoldingTimeConfig = z.infer<
  typeof TokenHoldingTimeConfigSchema
>;

export const OpenPositionTimeConfigSchema = z.object({
  token: z.string(),
  amount: z.number(),
  protocol: z.string().optional(),
  pool: z.string().optional(),
});

export type OpenPositionTimeConfig = z.infer<
  typeof OpenPositionTimeConfigSchema
>;

export const StakeSolTimeConfigSchema = z.object({
  epochs: z.number(),
});
export type StakeSolTimeConfig = z.infer<typeof StakeSolTimeConfigSchema>;
