import { z } from "zod";

const CustomEventConfigSchemaBase = z.object({
  name: z.string(),
  label: z.string().nullish(),
  description: z.string().nullish(),
  image: z.string().nullish(),
});

export const CustomEventStringConfigSchema = CustomEventConfigSchemaBase.and(
  z.object({
    type: z.literal("string"),
    validation: z.object({
      required: z.boolean().nullish(),
      match: z.string().nullish(),
    }),
  })
);

export const CustomEventNumberConfigSchema = CustomEventConfigSchemaBase.and(
  z.object({
    type: z.literal("number"),
    validation: z.object({
      min: z.coerce.number().nullish(),
      max: z.coerce.number().nullish(),
    }),
  })
);

export const CustomEventBooleanConfigSchema = CustomEventConfigSchemaBase.and(
  z.object({
    type: z.literal("boolean"),
    validation: z.object({
      match: z.boolean().nullish(),
    }),
  })
);

export type CustomEventStringConfig = z.infer<
  typeof CustomEventStringConfigSchema
>;

export type CustomEventNumberConfig = z.infer<
  typeof CustomEventNumberConfigSchema
>;

export type CustomEventBooleanConfig = z.infer<
  typeof CustomEventBooleanConfigSchema
>;

export const CustomEventConfigSchema = z.object({
  eventName: z.string(),
  description: z.string().nullish(),
  formEnabled: z.boolean(),
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
