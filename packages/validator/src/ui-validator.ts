import { UiValidatorField } from './ui-validator-field';
import {
  UiValidatorData,
  UiValidatorError,
  UiValidatorErrors,
  UiValidatorExpectationRule,
  UiValidatorResult,
  UiValidatorSchema,
  UiValidatorFieldTypes
} from './types';

export class UiValidator {
  private isEmailValid(value: unknown): boolean {
    if (typeof value === 'string') {
      const mailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      return mailRegex.test(value);
    }

    return false;
  }

  private isNumeric(value: unknown): boolean {
    if (typeof value === 'number' || value === null || value === undefined) {
      return true;
    }

    if (typeof value === 'string') {
      return /^[0-9.,]+$/.test(value);
    }

    return false;
  }

  private isString(value: unknown): boolean {
    return typeof value === 'string' || value === null || value === undefined;
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

  private isValidDate(value: unknown): boolean {
    if (value instanceof Date) {
      return true;
    }

    if (typeof value === 'string') {
      const date = new Date(value);
      return date.toString() !== 'Invalid Date';
    }

    return false;
  }

  private isValidBoolean(value: unknown): boolean {
    if (typeof value === 'boolean') {
      return true;
    }

    return false;
  }

  private validExpectationRule(
    value: unknown,
    rule: UiValidatorExpectationRule<UiValidatorFieldTypes>
  ): boolean {
    if (rule.expected === 'email') {
      return this.isEmailValid(value);
    }

    if (rule.expected === 'numeric') {
      return this.isNumeric(value);
    }

    if (rule.expected === 'text') {
      return this.isString(value);
    }

    if (rule.expected === 'phone') {
      return this.isValidPhone(value);
    }

    if (rule.expected === 'date') {
      return this.isValidDate(value);
    }

    if (rule.expected === 'boolean') {
      return this.isValidBoolean(value);
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

  private validDateRange(min: Date, max: Date, value: unknown): boolean {
    if (min instanceof Date && max instanceof Date) {
      if (value instanceof Date) {
        return value > min && value < max;
      } else if (typeof value === 'string') {
        const date = new Date(value);
        return date > min && date < max;
      }
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

    if (typeof value === 'boolean') {
      return value === true;
    }

    return isRequired && value !== null && value !== undefined;
  }

  /**
   * @param baseline The value used as baseline for the comparisson
   * @param action The action taken for comparisson
   * @param value The value that will be compared
   * */
  private validComparable(baseline: number | Date, value: unknown, action: 'greaterThan' | 'lessThan'): boolean {
    if (typeof baseline === 'number' && (typeof value === 'number' || typeof value === 'string')) {
      /** Numeric comparisson */
      const parsedValued = parseInt(value as string);

      if (action === 'greaterThan') {
        return parsedValued > baseline;
      } else {
        return parsedValued < baseline;
      }
    } else if (baseline instanceof Date) {
      /** Date comparisson */

      if (typeof value === 'string') {
        const date = new Date(value);

        if (date.toString() === 'Invalid Date') {
          return false;
        }

        if (action === 'greaterThan') {
          return date > baseline;
        } else {
          return date < baseline;
        }
      }

      if (value instanceof Date) {
        if (action === 'greaterThan') {
          return value > baseline;
        } else {
          return value < baseline;
        }
      }
    }

    return false;
  }

  private validOption(options: Array<string | number>, value: unknown): boolean {
    let comparableValue: string | number | null = null;

    if (typeof value === 'string') {
      comparableValue = value.toLowerCase();
    }

    if (typeof value === 'number') {
      comparableValue = value;
    }

    return options.filter(option => this.getComparableOption(option) === comparableValue).length > 0;
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

      if (rules?.dateRange) {
        ruleMatched = true;

        if (!this.validDateRange(rules.dateRange.min, rules.dateRange.max, value)) {
          hasError = true;
          fieldErrors.push(rules.dateRange.error);
        }
      }

      if (rules?.length) {
        ruleMatched = true;

        if (!this.validLengthRule(rules.length.min, rules.length.max, value)) {
          hasError = true;
          fieldErrors.push(rules.length.error);
        }
      }

      if (rules?.greaterThan) {
        ruleMatched = true;

        if (!this.validComparable(rules.greaterThan.baseline, value, 'greaterThan')) {
          hasError = true;
          fieldErrors.push(rules.greaterThan.error);
        }
      }

      if (rules?.lessThan) {
        ruleMatched = true;

        if (!this.validComparable(rules.lessThan.baseline, value, 'lessThan')) {
          hasError = true;
          fieldErrors.push(rules.lessThan.error);
        }
      }

      if  (rules?.oneOf) {
        ruleMatched = true;

        if (!this.validOption(rules.oneOf.options, value)) {
          hasError = true;
          fieldErrors.push(rules.oneOf.error);
        }
      }

      // istanbul ignore next
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

  field(type: UiValidatorFieldTypes, message?: string): UiValidatorField {
    return new UiValidatorField(type, message);
  }

  private getComparableOption(option: string | number) {
    if (typeof option === 'string') {
      return option.toLowerCase();
    } else {
      return option;
    }
  }
}
