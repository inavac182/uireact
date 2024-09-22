import { UiValidatorWhenValidation } from "types";
import { UiValidatorField } from "./ui-validator-field";
import { UiValidatorIs } from "./ui-validator-is";

export class UiValidatorWhen {
  private fieldData: UiValidatorField;
  private preValidations: Array<UiValidatorWhenValidation>;

  constructor(field: UiValidatorField, fieldName: string, validation: UiValidatorIs) {
    this.fieldData = field;
    this.preValidations = [{
      [fieldName]: validation
    }];
  }

  and(fieldName: string, validation: UiValidatorIs) {
    this.preValidations = [{
      [fieldName]: validation
    }];

    return this;
  }

  run(): UiValidatorField {
    const fieldData = this.fieldData.getRules();

    if (!fieldData.type) {
      throw new Error("The validator.field has NOT being initialized for this field");
    }

    const field = new UiValidatorField(fieldData.type.expected, fieldData.type.error.message);
    field.setPreset(this.preValidations);
    return field;
  }
}