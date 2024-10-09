import { z } from "zod";
import {
  OpenPositionTimeConfigSchema,
  StakeSolTimeConfigSchema,
  TokenHoldingTimeConfigSchema,
} from "./requirements";

export enum TimeConfigType {
  TOKEN_HOLDING = "TOKEN_HOLDING",
  OPEN_POSITION = "OPEN_POSITION",
  STAKE_SOL = "STAKE_SOL",
}

const TimeConfigUnionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal(TimeConfigType.TOKEN_HOLDING),
    requirement: TokenHoldingTimeConfigSchema,
  }),
  z.object({
    type: z.literal(TimeConfigType.OPEN_POSITION),
    requirement: OpenPositionTimeConfigSchema,
  }),
  z.object({
    type: z.literal(TimeConfigType.STAKE_SOL),
    requirement: StakeSolTimeConfigSchema,
  }),
]);

export const TimeConfigSchema = TimeConfigUnionSchema.and(
  z.object({ duration: z.number() })
);

export type TimeConfig = z.infer<typeof TimeConfigSchema>;
