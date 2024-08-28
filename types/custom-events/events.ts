import { z } from "zod";

export const CustomEventStringConfigSchema = z.object({
  name: z.string(),
  type: z.literal("string"),
  validation: z.object({
    match: z.string().nullish(),
  }),
});

export type CustomEventStringConfig = z.infer<
  typeof CustomEventStringConfigSchema
>;

export const CustomEventNumberConfigSchema = z.object({
  name: z.string(),
  type: z.literal("number"),
  validation: z.object({
    min: z.number().nullish(),
    max: z.number().nullish(),
  }),
});

export type CustomEventNumberConfig = z.infer<
  typeof CustomEventNumberConfigSchema
>;

export const CustomEventBooleanConfigSchema = z.object({
  name: z.string(),
  type: z.literal("boolean"),
  validation: z.object({
    match: z.boolean().nullish(),
  }),
});

export type CustomEventBooleanConfig = z.infer<
  typeof CustomEventBooleanConfigSchema
>;

export const CustomEventConfigSchema = z.object({
  eventName: z.string(),
  fields: z.array(
    z.union([
      CustomEventStringConfigSchema,
      CustomEventNumberConfigSchema,
      CustomEventBooleanConfigSchema,
    ])
  ),
});

export type CustomEventConfig = z.infer<typeof CustomEventConfigSchema>;

export const CustomEventDefinitionSchema = z.record(
  z.string(),
  z.literal("string").or(z.literal("number").or(z.literal("boolean")))
);

export type CustomEventDefinition = z.infer<typeof CustomEventDefinitionSchema>;
