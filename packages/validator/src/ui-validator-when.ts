import { UiValidatorFieldRules, UiValidatorWhenValidation } from "types";
import { UiValidatorField } from "./ui-validator-field";
import { UiValidatorRules } from "./ui-validator-rules";

export class UiValidatorWhen {
  private fieldData: UiValidatorField;
  private preConditions: UiValidatorWhenValidation;
  private rules?: UiValidatorFieldRules;
  private fallBackRules?: UiValidatorFieldRules;

  constructor(field: UiValidatorField, fieldName: string, validation: UiValidatorRules) {
    this.fieldData = field;
    this.preConditions = {
      [fieldName]: validation
    };
  }

  and(fieldName: string, validation: UiValidatorRules) {
    this.preConditions = {
      [fieldName]: validation
    };

    return this;
  }

  run(rules: UiValidatorRules): UiValidatorWhen {
    const fieldDataRules = this.fieldData.getRules();

    this.rules = rules.getRules();
    this.rules.type = fieldDataRules.type;

    return this;
  }

  else(rules: UiValidatorRules): UiValidatorWhen {
    const fieldDataRules = this.fieldData.getRules();
    this.fallBackRules = rules.getRules();
    this.fallBackRules.type = fieldDataRules.type;

    return this;
  }

  /** @private Retrieve field data */
  getFieldData(): UiValidatorField {
    return this.fieldData;
  }

  /** @private Retrieve field data */
  getPreConditions(): UiValidatorWhenValidation {
    return this.preConditions;
  }

  /** @private Retrieve field main rules when pre conditions are met */
  getMainRules(): UiValidatorFieldRules | undefined {
    return this.rules;
  }

  /** @private Retrieve field fallback rules when pre conditions are NOT met */
  getFallbackRules(): UiValidatorFieldRules | undefined {
    return this.fallBackRules;
  }
}