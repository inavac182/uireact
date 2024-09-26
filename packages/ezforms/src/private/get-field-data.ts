import { UiValidatorField, UiValidatorWhen } from "@uireact/validator";

export const getFieldData = (field: UiValidatorField | UiValidatorWhen): UiValidatorField => {
  if ("getEzMetadata" in field) {
    return field;
  }

  return field.getFieldData();
};
