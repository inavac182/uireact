import { UiValidatorData, UiValidatorSchemaV2 } from "@uireact/validator";

export const generateInitialData = (schema: UiValidatorSchemaV2, initialData?: UiValidatorData) => {
  const data: UiValidatorData = {};

  Object.keys(schema).forEach(schemaField => {
    if (initialData?.[schemaField]) {
      data[schemaField] = initialData[schemaField];
    } else {
      data[schemaField] = null;
    }
  });

  return data;
};
