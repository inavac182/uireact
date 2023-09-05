import { UiRuler } from './ui-ruler';
import {
  UiValidatorData,
  UiValidatorError,
  UiValidatorErrors,
  UiValidatorExpectationRule,
  UiValidatorResult,
  UiValidatorSchema,
} from './types';

export class UiValidator {
  private schema: UiValidatorSchema;

  private isEmailValid(value: unknown): boolean {
    if (typeof value === 'string') {
      const mailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      return mailRegex.test(value);
    }

    return false;
  }

  private isNumeric(value: unknown): boolean {
    if (typeof value === 'number') {
      return true;
    }

    if (typeof value === 'string') {
      return /^[0-9]+$/.test(value);
    }

    return false;
  }

  private isString(value: unknown): boolean {
    return typeof value === 'string';
  }

  private isValidPhone(value: unknown): boolean {
    if (typeof value === 'string' && value.length >= 7 && value.length <= 17) {
      const phoneRegex = new RegExp(
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
      );

      return phoneRegex.test(value);
    }

    return false;
  }

  private validExpectationRule(
    value: unknown,
    rule: UiValidatorExpectationRule<'string' | 'numeric' | 'email' | 'phone'>
  ): boolean {
    if (rule.expected === 'email') {
      return this.isEmailValid(value);
    }

    if (rule.expected === 'numeric') {
      return this.isNumeric(value);
    }

    if (rule.expected === 'string') {
      return this.isString(value);
    }

    if (rule.expected === 'phone') {
      return this.isValidPhone(value);
    }

    return false;
  }

  private validRangeRule(min: number, max: number, value: unknown): boolean {
    if (typeof value === 'string' && this.isNumeric(value)) {
      const numericValue = parseInt(value);

      if (numericValue >= min && numericValue <= max) {
        return true;
      }
    }

    if (typeof value === 'number' && value >= min && value <= max) {
      return true;
    }

    return false;
  }

  private validLengthRule(min: number, max: number, value: unknown): boolean {
    if (typeof value === 'string' && value.length >= min && value.length <= max) {
      return true;
    }

    return false;
  }

  private validRequired(isRequired: boolean, value: unknown): boolean {
    if (typeof value === 'string') {
      return value !== '';
    }

    return isRequired && value !== null && value !== undefined;
  }

  validate(schema: UiValidatorSchema, data: UiValidatorData, strict?: boolean): UiValidatorResult {
    let errors: UiValidatorErrors = {};
    let hasError = false;

    if (!schema || Object.keys(schema).length === 0) {
      console.error('UiValidator - Schema is empty');

      return {
        passed: false,
      };
    }

    Object.keys(data).map((field) => {
      const rules = schema[field]?.getRules?.();
      const fieldErrors: UiValidatorError[] = [];
      let ruleMatched = false;

      if (!rules && strict) {
        console.error(`UiValidator - Field ${field} is NOT in schema`);
        hasError = true;
        return;
      }

      const value = data[field];

      if (rules?.required) {
        ruleMatched = true;

        if (!this.validRequired(rules.required.expected, value)) {
          hasError = true;
          fieldErrors.push(rules.required.error);
        }
      }

      if (rules?.type) {
        ruleMatched = true;

        if (!this.validExpectationRule(value, rules.type)) {
          hasError = true;
          fieldErrors.push(rules.type.error);
        }
      }

      if (rules?.range) {
        ruleMatched = true;

        if (!this.validRangeRule(rules.range.min, rules.range.max, value)) {
          hasError = true;
          fieldErrors.push(rules.range.error);
        }
      }

      if (rules?.length) {
        ruleMatched = true;

        if (!this.validLengthRule(rules.length.min, rules.length.max, value)) {
          hasError = true;
          fieldErrors.push(rules.length.error);
        }
      }

      if (!ruleMatched && strict) {
        console.error(`UiValidator - Field ${field} has NOT valid rules`);
        hasError = true;
        return;
      }

      if (fieldErrors.length > 0) {
        errors = { ...errors, [field]: fieldErrors };
      }
    });

    if (strict) {
      Object.keys(schema).map((field) => {
        let fieldFound = false;
        Object.keys(data).map((dataField) => {
          if (field === dataField) {
            fieldFound = true;
          }
        });

        if (!fieldFound) {
          console.error('UiValidator - schema has different fields than the data passed');
          hasError = true;
        }
      });
    }

    return {
      passed: !hasError,
      errors,
    };
  }

  ruler(): UiRuler {
    return new UiRuler();
  }
}
