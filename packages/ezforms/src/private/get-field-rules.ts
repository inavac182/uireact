import { UiValidatorField, UiValidatorWhen } from "@uireact/validator";

export const getFieldRules = (field: UiValidatorField | UiValidatorWhen) => {
  if ("getEzMetadata" in field) {
    return field.getRules();
  }

  return field.getMainRules();
};
