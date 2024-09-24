import { UiValidatorRules } from "../ui-validator-rules";

export type UiValidatorWhenValidation = {
  [x in string]: UiValidatorRules;
};
