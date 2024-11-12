import { z } from "zod";

export const TokenHoldingTimeConfigSchema = z.object({
  /**
   * The token to hold
   */
  token: z.string(),
  /**
   * The minimum amount to hold
   */
  amount: z.number(),
  /**
   * The token standard of the token
   */
  tokenStandard: z.string().optional(),
});

/**
 * Token holding time config type
 */
export type TokenHoldingTimeConfig = z.infer<
  typeof TokenHoldingTimeConfigSchema
>;

/**
 * Open position time config schema
 */
export const OpenPositionTimeConfigSchema = z.object({
  /**
   * The token to have an open position form
   */
  token: z.string(),
  /**
   * The minimum amount to have
   */
  amount: z.number(),
  /**
   * The protocol address
   */
  protocol: z.string().optional(),
  /**
   * The pool address
   */
  pool: z.string().optional(),
});

/**
 * Open position time config type
 */
export type OpenPositionTimeConfig = z.infer<
  typeof OpenPositionTimeConfigSchema
>;

/**
 * Stake solana time config schema
 */
export const StakeSolTimeConfigSchema = z.object({
  /**
   * The number of epochs to stake for
   */
  epochs: z.number(),
});

/**
 * Stake solana time config type
 */
export type StakeSolTimeConfig = z.infer<typeof StakeSolTimeConfigSchema>;
