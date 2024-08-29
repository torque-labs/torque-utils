import { z } from "zod";

import { CustomEventConfig } from "../types/custom-events/events";

export function eventConfigToValidationSchema(config: CustomEventConfig) {
  const fields = config.fields.map((field) => {
    let validation: z.ZodSchema;

    if (field.type === "string") {
      validation = field.validation.match
        ? z.literal(field.validation.match)
        : z.string();

      if (!field.validation.match) {
        validation = validation.nullish();
      }

      return {
        name: field.name,
        type: validation,
      };
    }

    if (field.type === "number") {
      validation = z.coerce.number();

      if (field.validation.min && field.validation.max) {
        validation = z.coerce
          .number()
          .min(field.validation.min)
          .max(field.validation.max);
      } else if (field.validation.min && !field.validation.max) {
        validation = z.coerce.number().min(field.validation.min);
      } else if (field.validation.max && !field.validation.min) {
        validation = z.coerce.number().max(field.validation.max);
      } else {
      }

      if (!field.validation.min && !field.validation.max) {
        validation = validation.nullish();
      }

      return {
        name: field.name,
        type: validation,
      };
    }

    if (field.type === "boolean") {
      validation = z.coerce.boolean();

      if (field.validation.match) {
        validation = z.coerce
          .boolean()
          .refine((value) => value === field.validation.match);
      } else {
        validation = validation.nullish();
      }

      return {
        name: field.name,
        type: validation,
      };
    }
  });

  const filteredFields = fields.filter((field) => !!field);

  const schema = z.object(
    Object.fromEntries(filteredFields.map((field) => [field.name, field.type]))
  );

  return schema;
}
