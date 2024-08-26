import { z } from "zod";

export const CustomEventStringConfigSchema = z.object({
  name: z.string(),
  type: z.literal("string"),
  validation: z.object({
    required: z.boolean().optional(),
    match: z.string().optional(),
  }),
});

export type CustomEventStringConfig = z.infer<
  typeof CustomEventStringConfigSchema
>;

export const CustomEventNumberConfigSchema = z.object({
  name: z.string(),
  type: z.literal("number"),
  validation: z.object({
    required: z.boolean().optional(),
    min: z.number().optional(),
    max: z.number().optional(),
  }),
});

export type CustomEventNumberConfig = z.infer<
  typeof CustomEventNumberConfigSchema
>;

export const CustomEventBooleanConfigSchema = z.object({
  name: z.string(),
  type: z.literal("boolean"),
  validation: z.object({
    required: z.boolean().optional(),
    match: z.boolean().optional(),
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
