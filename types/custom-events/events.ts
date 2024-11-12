import { z } from "zod";

/**
 * Base schema for a single custom event field
 * This is used for validation during campaign/offer creation
 *
 * NOTE: The custom event config schema is for setting requirements for custom events
 */
const CustomEventFieldSchemaBase = z.object({
  /**
   * The name of the custom field
   */
  name: z.string(),
  /**
   * The label for the custom field that will displayed in the UI
   */
  label: z.string().nullish(),
  /**
   * A short description to the user of the custom event field
   */
  description: z.string().nullish(),
  /**
   * An image to display with the custom event field in the UI (eg. screenshots)
   */
  image: z.string().nullish(),
});

/**
 * Custom event field config schema for string properties
 */
export const CustomEventStringConfigSchema = CustomEventFieldSchemaBase.and(
  z.object({
    /**
     * String custom event field type
     */
    type: z.literal("string"),
    /**
     * Validation for this custom event string property
     */
    validation: z.object({
      /**
       * Whether the field is required or not
       */
      required: z.boolean().nullish(),
      /**
       * A specific string value to match against (eg. Video_ID)
       */
      match: z.string().nullish(),
    }),
  })
);

/**
 * Custom event field config schema for number properties
 */
export const CustomEventNumberConfigSchema = CustomEventFieldSchemaBase.and(
  z.object({
    /**
     * Number custom event field type
     */
    type: z.literal("number"),
    /**
     * Validation for this custom event number property
     */
    validation: z.object({
      /**
       * Minimum value for this number field
       */
      min: z.coerce.number().nullish(),
      /**
       * Maximum value for this number field
       */
      max: z.coerce.number().nullish(),
    }),
  })
);

/**
 * Custom event field config schema for boolean properties
 */
export const CustomEventBooleanConfigSchema = CustomEventFieldSchemaBase.and(
  z.object({
    /**
     * Boolean custom event field type
     */
    type: z.literal("boolean"),
    /**
     * Validation for this custom event boolean property
     */
    validation: z.object({
      /**
       * A specific boolean value to match against (eg. true)
       */
      match: z.boolean().nullish(),
    }),
  })
);

/**
 * Custom event config type for string properties
 */
export type CustomEventStringConfig = z.infer<
  typeof CustomEventStringConfigSchema
>;

/**
 * Custom event config type for number properties
 */
export type CustomEventNumberConfig = z.infer<
  typeof CustomEventNumberConfigSchema
>;

/**
 * Custom event config type for boolean properties
 */
export type CustomEventBooleanConfig = z.infer<
  typeof CustomEventBooleanConfigSchema
>;

/**
 * Full custom event config schema
 */
export const CustomEventConfigSchema = z.object({
  /**
   * The name of the custom event that will be used in the POST request to the API
   */
  eventName: z.string(),
  /**
   * A short description to the user of the custom event
   */
  description: z.string().nullish(),
  /**
   * Depreceated: Whether it's enabled as a form directly in the UI
   *
   * NOTE: This is depreceated. Use `FORM_SUBMISSION` instead
   */
  formEnabled: z.boolean(),
  /**
   * The target URL for more information, or where the requirement can be completed
   */
  targetUrl: z.string().url().nullish().or(z.literal("")),
  /**
   * Array of custom event property fields and the validation
   */
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
 * The types of custom event field properties allowed
 */
export enum CustomEventFieldType {
  STRING = "string",
  BOOLEAN = "boolean",
  NUMBER = "number",
}

/**
 * Custom event definition for database
 * This is used to save the custom event definition in the database (config JSON field)
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
  /**
   * The internal ID of the custom event
   */
  id: z.string(),
  /**
   * The name of the custom event
   */
  name: z.string(),
  /**
   * The custom event defintion as a JSON object.
   *
   * The object should be formatted as follows:
   * ```json
   * {
   *   "<event property name>": "boolean" | "string" | "number"
   * }
   * ```
   */
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
  /**
   * The name of the custom event to create
   */
  name: z.string(),
  /**
   * The custom event defintion as a JSON object.
   *
   * The object should be formatted as follows:
   * ```json
   * {
   *   "<event property name>": "boolean" | "string" | "number"
   * }
   * ```
   */
  config: CustomEventDefinitionSchema,
});

/**
 * Create custom event input type
 */
export type CreateCustomEventInput = z.infer<
  typeof CreateCustomEventInputSchema
>;
