import { UiValidatorData, UiValidatorSchema } from "@uireact/validator";

export const generateInitialData = (schema: UiValidatorSchema, initialData?: UiValidatorData) => {
  const data: UiValidatorData = {};

  Object.keys(schema).forEach(schemaField => {
    if (initialData?.[schemaField]) {
      data[schemaField] = initialData[schemaField];
    } else {
      data[schemaField] = '';
    }
  });

  return data;
};
