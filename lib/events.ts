import { z } from "zod";

import { CustomEventConfig } from "../types/custom-events/events";
import { MemoAction } from "../types/eventConfig/requirements";

export function eventConfigToValidationSchema(
  config: CustomEventConfig | MemoAction
) {
  const fields = config.fields.map((field) => {
    let validation: z.ZodSchema;

    if (field.type === "string") {
      if (field.validation.match) {
        validation = z.literal(field.validation.match);
      } else {
        validation = z.string();

        if (field.name === "email") {
          validation = (validation as z.ZodString).email();
        }

        if (field.validation.required) {
          validation = (validation as z.ZodString).min(1);
        }

        if (!field.validation.required) {
          validation = validation.nullish();
        }
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
