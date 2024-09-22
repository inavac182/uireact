import { UiValidatorIs } from "../ui-validator-is";

export type UiValidatorWhenValidation = {
  [x in string]: UiValidatorIs;
};
