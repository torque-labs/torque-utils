import { z } from "zod";

/**
 * Custom event requirement config schema base
 *
 * NOTE: The custom event config schema is for setting requirements for custom events
 */
const CustomEventConfigSchemaBase = z.object({
  name: z.string(),
  label: z.string().nullish(),
  description: z.string().nullish(),
  image: z.string().nullish(),
});

/**
 * Custom event config schema for string type requirements
 */
export const CustomEventStringConfigSchema = CustomEventConfigSchemaBase.and(
  z.object({
    type: z.literal("string"),
    validation: z.object({
      required: z.boolean().nullish(),
      match: z.string().nullish(),
    }),
  })
);

/**
 * Custom event config schema for number type requirements
 */
export const CustomEventNumberConfigSchema = CustomEventConfigSchemaBase.and(
  z.object({
    type: z.literal("number"),
    validation: z.object({
      min: z.coerce.number().nullish(),
      max: z.coerce.number().nullish(),
    }),
  })
);

/**
 * Custom event config schema for boolean type requirements
 */
export const CustomEventBooleanConfigSchema = CustomEventConfigSchemaBase.and(
  z.object({
    type: z.literal("boolean"),
    validation: z.object({
      match: z.boolean().nullish(),
    }),
  })
);

/**
 * Custom event config type for string type requirements
 */
export type CustomEventStringConfig = z.infer<
  typeof CustomEventStringConfigSchema
>;

/**
 * Custom event config type for number type requirements
 */
export type CustomEventNumberConfig = z.infer<
  typeof CustomEventNumberConfigSchema
>;

/**
 * Custom event config type for boolean type requirements
 */
export type CustomEventBooleanConfig = z.infer<
  typeof CustomEventBooleanConfigSchema
>;

/**
 * Full custom event requirement schema
 */
export const CustomEventConfigSchema = z.object({
  eventName: z.string(),
  description: z.string().nullish(),
  formEnabled: z.boolean(),
  targetUrl: z.string().url().nullish().or(z.literal("")),
  fields: z.array(
    z.union([
      CustomEventStringConfigSchema,
      CustomEventNumberConfigSchema,
      CustomEventBooleanConfigSchema,
    ])
  ),
});

/**
 * Custom event requirement type
 */
export type CustomEventConfig = z.infer<typeof CustomEventConfigSchema>;

/**
 *
 */
export enum CustomEventFieldType {
  STRING = "string",
  BOOLEAN = "boolean",
  NUMBER = "number",
}

/**
 * Custom event definition for database
 *
 * NOTE: This is used to save the custom event definition in the database (config JSON field)
 */
export const CustomEventDefinitionSchema = z.record(
  z.string(),
  z.nativeEnum(CustomEventFieldType)
);

/**
 * Custom event definition type
 */
export type CustomEventDefinition = z.infer<typeof CustomEventDefinitionSchema>;

/**
 * Custom event model schema (as saved in DB)
 */
export const CustomEventModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  config: CustomEventDefinitionSchema,
});

/**
 * Custom event model type
 */
export type CustomEventModel = z.infer<typeof CustomEventModelSchema>;

/**
 * Create custom event input schema
 */
export const CreateCustomEventInputSchema = z.object({
  name: z.string(),
  config: CustomEventDefinitionSchema,
});

/**
 * Create custom event input type
 */
export type CreateCustomEventInput = z.infer<
  typeof CreateCustomEventInputSchema
>;
