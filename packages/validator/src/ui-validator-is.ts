import { UiValidatorRules } from "./ui-validator-rules";

export class UiValidatorIs extends UiValidatorRules {
  present() {
    this.rules.required = {
      expected: true,
      error: {
        message: ""
      }
    };

    return this;
  }
}
