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

  validate(schema: UiValidatorSchema, data: UiValidatorData): UiValidatorResult {
    let errors: UiValidatorErrors = {};
    let hasError = false;

    if (!schema || Object.keys(schema).length === 0) {
      console.error('UiValidator - Schema is not valid');

      return {
        passed: false,
      };
    }

    Object.keys(data).map((field) => {
      const rules = schema[field]?.getRules();
      const fieldErrors: UiValidatorError[] = [];

      if (!rules) {
        hasError = true;
        console.error(`UiValidator - No rule for field ${field}`);
        return;
      }

      const value = data[field];

      if (rules.required && !this.validRequired(rules.required.expected, value)) {
        hasError = true;
        if (rules.required.error) {
          fieldErrors.push(rules.required.error);
        }
      }

      if (rules.type && !this.validExpectationRule(value, rules.type)) {
        hasError = true;
        if (rules.type.error) {
          fieldErrors.push(rules.type.error);
        }
      }

      if (rules.range && !this.validRangeRule(rules.range.min, rules.range.max, value)) {
        hasError = true;
        if (rules.range.error) {
          fieldErrors.push(rules.range.error);
        }
      }

      if (rules.length && !this.validLengthRule(rules.length.min, rules.length.max, value)) {
        hasError = true;
        if (rules.length.error) {
          fieldErrors.push(rules.length.error);
        }
      }

      if (fieldErrors.length > 0) {
        errors = { ...errors, [field]: fieldErrors };
      }
    });

    return {
      passed: !hasError,
      errors,
    };
  }

  ruler(): UiRuler {
    return new UiRuler();
  }
}
