import { z } from "zod";
import {
  OpenPositionTimeConfigSchema,
  TokenHoldingTimeConfigSchema,
} from "./requirements";

export enum TimeConfigType {
  TOKEN_HOLDING = "TOKEN_HOLDING",
  OPEN_POSITION = "OPEN_POSITION",
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
]);

export const TimeConfigSchema = TimeConfigUnionSchema.and(
  z.object({ duration: z.number() })
).optional();

export type TimeConfig = z.infer<typeof TimeConfigSchema>;
