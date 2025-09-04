import { UiValidator, UiValidatorData, UiValidatorField, UiValidatorFieldTypes, UiValidatorWhen } from "@uireact/validator";

const validator = new UiValidator();

export const getFieldType = (field: UiValidatorField | UiValidatorWhen, data?: UiValidatorData) => {
  debugger;
  if (!field) {
    return null;
  }

  const isFieldType = "getEzMetadata" in field;
  if (isFieldType) {
    // istanbul ignore next
    return field.getRules().type?.expected;
  }

  const hasFallback = "getFallbackRules" in field;

  if (!hasFallback) {
    console.error('EzForms - Fallback rules are missing in schema field');

    return null;
  }

  // istanbul ignore next
  const mainRules = field.getMainRules()?.type?.expected;
  const fallbackRules = field.getFallbackRules();

  if (!fallbackRules || !fallbackRules.type || !data) {
    return mainRules;
  }

  const preConditions = field.getPreConditions();

  let isEmptyData = true;
  Object.keys(preConditions).map((observedField) => {
    if(data[observedField]) {
      isEmptyData = false;
    }
  });

  if (isEmptyData) {
    return mainRules;
  }

  const useMainType = validator.verifyPreconditions(preConditions, data);
  
  if (useMainType) {
    return mainRules;
  }

  return fallbackRules.type.expected;
};
