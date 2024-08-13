import { z } from "zod";
import {
  OpenPositionTimeConfigSchema,
  TokenHoldingTimeConfigSchema,
} from "./requirements";

export enum TimeConfigType {
  TOKEN_HOLDING = "TOKEN_HOLDING",
  OPEN_POSITION = "OPEN_POSITION",
}
export const TimeConfigRequirementSchema = z.union([
  TokenHoldingTimeConfigSchema,
  OpenPositionTimeConfigSchema,
]);

export const TimeConfigSchema = z.object({
  duration: z.number(),
  type: z.nativeEnum(TimeConfigType),
  requirement: TimeConfigRequirementSchema,
});
export type TimeConfig = z.infer<typeof TimeConfigSchema>;
