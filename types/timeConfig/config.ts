import { z } from "zod";
import {
  OpenPositionTimeConfigSchema,
  StakeSolTimeConfigSchema,
  TokenHoldingTimeConfigSchema,
} from "./requirements";

/**
 * The types of time configs allowed
 */
export enum TimeConfigType {
  TOKEN_HOLDING = "TOKEN_HOLDING",
  OPEN_POSITION = "OPEN_POSITION",
  STAKE_SOL = "STAKE_SOL",
}

/**
 * Base schema for time config
 */
const TimeConfigBaseSchema = z.object({
  /**
   * The duration of the requirement in seconds
   */
  duration: z.coerce.number(),
});

/**
 * Token holding time config schema
 */
export const TimeConfigTokenHoldingSchema = z
  .object({
    type: z.literal(TimeConfigType.TOKEN_HOLDING),
    requirement: TokenHoldingTimeConfigSchema,
  })
  .merge(TimeConfigBaseSchema);

/**
 * The token holding time config type
 */
export type TimeConfigTokenHolding = z.infer<
  typeof TimeConfigTokenHoldingSchema
>;

/**
 * Open position time config schema
 */
export const TimeConfigOpenPositionSchema = z
  .object({
    type: z.literal(TimeConfigType.OPEN_POSITION),
    requirement: OpenPositionTimeConfigSchema,
  })
  .merge(TimeConfigBaseSchema);

/**
 * Open position time config type
 */
export type TimeConfigOpenPosition = z.infer<
  typeof TimeConfigOpenPositionSchema
>;

/**
 * Stake solana time config schema
 */
export const TimeConfigStakeSolSchema = z
  .object({
    type: z.literal(TimeConfigType.STAKE_SOL),
    requirement: StakeSolTimeConfigSchema,
  })
  .merge(TimeConfigBaseSchema);

/**
 * Stake solana time config type
 */
export type TimeConfigStakeSol = z.infer<typeof TimeConfigStakeSolSchema>;

/**
 * The union schema for all time config types
 */
export const TimeConfigSchema = z.discriminatedUnion("type", [
  TimeConfigTokenHoldingSchema,
  TimeConfigOpenPositionSchema,
  TimeConfigStakeSolSchema,
]);

/**
 * The time config type
 */
export type TimeConfig = z.infer<typeof TimeConfigSchema>;
