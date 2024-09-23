import { UiValidatorWhenValidation } from "types";
import { UiValidatorField } from "./ui-validator-field";
import { UiValidatorRules } from "ui-validator-rules";

export class UiValidatorWhen {
  private fieldData: UiValidatorField;
  private preValidations: Array<UiValidatorWhenValidation>;
  private rules?: UiValidatorRules;

  constructor(field: UiValidatorField, fieldName: string, validation: UiValidatorRules) {
    this.fieldData = field;
    this.preValidations = [{
      [fieldName]: validation
    }];
  }

  and(fieldName: string, validation: UiValidatorRules) {
    this.preValidations = [{
      [fieldName]: validation
    }];

    return this;
  }

  run(rules: UiValidatorRules): UiValidatorWhen {
    this.rules = rules;

    return this;
  }

  else(rules: UiValidatorRules): UiValidatorWhen {
    this.rules = rules;

    return this;
  }
}