import { z } from "zod";
import { EventConfigSchema } from "./eventConfig";
import { TimeConfigSchema } from "./timeConfig";
import { ConversionAudienceSchema } from "./campaigns";

export enum TokenStandard {
  Sol = "Sol",
  Token = "Token",
  Token22 = "Token22",
  Nft = "Nft",
  CompressedNft = "CompressedNft",
  ProgrammableNft = "ProgrammableNft",
  CoreNft = "CoreNft",
}
export enum TarpStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  UPCOMING = "UPCOMING",
  CANCELLED = "CANCELLED",
  PENDING_PAYMENT = "PENDING_PAYMENT",
  COMPLETED = "COMPLETED",
}
export enum TarpParticipants {
  USER = "USER",
  PUBLISHER = "PUBLISHER",
  BOTH = "BOTH",
}

export const CreateTarpInputSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  imageUrl: z.string().nullish(),
  content: z.string().nullish(),
  targetLink: z.string().nullish(),

  startTime: z.number(),
  endTime: z.number(),

  maxEntries: z.number().nullish(),

  audience: z.string().nullish(),
  conversionAudience: ConversionAudienceSchema.optional(),
  eventConfig: EventConfigSchema,
  timeConfig: TimeConfigSchema.optional(),
  blinkOnly: z.boolean().nullish(),

  participants: z.nativeEnum(TarpParticipants),
  tokenMint: z.string(),
  tokenStandard: z.nativeEnum(TokenStandard),
  amount: z.number(),
});
export type CreateTarpInput = z.infer<typeof CreateTarpInputSchema>;
