import { secureCheck } from './helper';
import {
  UiValidatorChoicesRuleOption,
  UiValidatorData,
  UiValidatorError,
  UiValidatorErrors,
  UiValidatorExpectationRule,
  UiValidatorFieldRules,
  UiValidatorFieldTypes,
  UiValidatorResult,
  UiValidatorSchema,
  UiValidatorSecureLevel,
  UiValidatorWhenValidation
} from './types';
import { UiValidatorField } from './ui-validator-field';
import { UiValidatorRules } from './ui-validator-rules';

export class UiValidator {
  private getComparableOption(option: UiValidatorChoicesRuleOption) {
    if (typeof option === 'string') {
      return option;
    } else if (typeof option === 'number') {
      return option;
    } else {
      return option.value;
    }
  }

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
      return /^[0-9.,]+$/.test(value);
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
    rule: UiValidatorExpectationRule<UiValidatorFieldTypes>,
    optional: boolean
  ): boolean {
    if (optional && (value === null || value === undefined || value === "")) {
      return true;
    }

    if (rule.expected === 'choice') {
      return true;
    }

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

  private validRequired(present: boolean, value: unknown): boolean {
    if (!present) {
      return true;
    }

    if (typeof value === 'string') {
      return value !== '';
    }

    if (typeof value === 'boolean') {
      return value === true;
    }

    return present && value !== null && value !== undefined;
  }

  private isEqualTo(compareToFieldName: string, value: unknown, data: UiValidatorData): boolean {
    if (!data || !data[compareToFieldName]) {
      console.error(`UiValidator - field ${compareToFieldName} NOT found in data.`);

      return false;
    }

    return data[compareToFieldName] === value;
  }

  private isEquals(expected: string | number, value: unknown): boolean {
    return value === expected;
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

  private validOption(options: Array<UiValidatorChoicesRuleOption>, value: unknown): boolean {
    let comparableValue: string | number | null = null;

    if (typeof value === 'string') {
      comparableValue = value;
    }

    if (typeof value === 'number') {
      comparableValue = value;
    }

    return options.filter(option => {
      return comparableValue && this.getComparableOption(option).toString() === comparableValue.toString()
    }).length > 0;
  }

  private validSchema(schema: UiValidatorSchema, data: UiValidatorData): boolean {
    let valid = true;

    Object.keys(schema).map((field) => {
      let fieldFound = false;
      Object.keys(data).map((dataField) => {
        if (field === dataField) {
          fieldFound = true;
        }
      });

      if (!fieldFound) {
        console.error(`UiValidator - ${field} from schema is NOT in data`);
        valid = false;
      }
    });

    return valid;
  }

  private validData(schema: UiValidatorSchema, data: UiValidatorData): boolean {
    let valid = true;

    Object.keys(data).map((field) => {
      let fieldFound = false;
      Object.keys(schema).map((schemField) => {
        if (field === schemField) {
          fieldFound = true;
        }
      });

      if (!fieldFound) {
        console.error(`UiValidator - ${field} from data is NOT in schema`);
        valid = false;
      }
    });

    return valid;
  }

  private validPreconditions(
    schema: UiValidatorSchema,
    field: string,
    preConditions: UiValidatorWhenValidation
  ): boolean {
    let valid = true;

    Object.keys(preConditions).forEach((observedField) => {
        if (!schema[observedField]) {
          console.error(`UiValidator - The ${field} has a precondition on ${observedField}, which does NOT exists in the schema, please verify.`);
          valid = false;

          return;
        }

        if (Object.keys(preConditions[observedField].getRules()).length === 0) {
          console.error(`UiValidator - ${field} has preconditions on ${observedField} which are EMPTY.`);

          valid = false;
          return;
        }
    });

    return valid;
  }

  private isSecure(level: UiValidatorSecureLevel, value: unknown): boolean {
    return secureCheck(level, value as string);
  }

  /**
   * 
   * @param schema - The schema with each field's rules
   * @param data - The data that user provided you to be validated
   * @returns - The result of the validations
   */
  validate(schema: UiValidatorSchema, data: UiValidatorData): UiValidatorResult {
    let errors: UiValidatorErrors = {};
    let hasError = false;

    if (!schema || Object.keys(schema).length === 0) {
      console.error('UiValidator - Schema is empty');

      return {
        passed: false,
      };
    }

    if (!this.validSchema(schema, data) || !this.validData(schema, data)) {
      return {
        passed: false
      }
    }

    Object.keys(data).map((field) => {
      const schemaField = schema[field];
      const value = data[field];

      if ("getPreConditions" in schemaField) {
        // This is a field WITH pre conditions
        const preConditions = schemaField.getPreConditions();
        const rules = schemaField.getMainRules();
        const fallbackRules = schemaField.getFallbackRules();

        if (!rules) {
          console.error(`UiValidator - Field ${field} does NOT have rules set up.`);
          hasError = true;
          return;
        }

        if (!this.validPreconditions(schema, field, preConditions)) {
          hasError = true;
          return;
        }

        const preConditionsPassed = this.runPreconditions(preConditions, data);

        let result;

        if (preConditionsPassed && rules) {
          result = this.runValidations(value, field, rules, data);
        } else if (!preConditionsPassed && fallbackRules) {
          result = this.runValidations(value, field, fallbackRules, data);
        }

        if (result?.errors && result.errors.length > 0) {
          errors[field] = result.errors;
        }
  
        if (result?.hasError) {
          hasError = true;
        }

        return;
      }

      // This is a field WITH OUT pre conditions
      const rules = schemaField.getRules();
      const result = this.runValidations(value, field, rules, data);

      if (result.errors.length > 0) {
        errors[field] = result.errors;
      }

      if (result.hasError) {
        hasError = true;
      }
    });


    return {
      passed: !hasError,
      errors,
    };
  }

  /** field() fn creates a validator field with option to set up metadata and rules */
  field(type: UiValidatorFieldTypes, message?: string): UiValidatorField {
    return new UiValidatorField(type, message);
  }

  /** is() fn used to create an object with rules to validate */
  is(): UiValidatorRules {
    return new UiValidatorRules();
  }

  private runValidations(
    value: unknown, 
    field: string,
    rules: UiValidatorFieldRules, 
    data: UiValidatorData
  ): { 
    errors: UiValidatorError[], 
    hasError: boolean 
  } {
    let hasError = false;

    const fieldErrors: UiValidatorError[] = [];
    let ruleMatched = false;
    if (rules.required) {
      ruleMatched = true;

      if (!this.validRequired(rules.required.expected, value)) {
        hasError = true;
        fieldErrors.push(rules.required.error);
      }
    }

    if (rules.type) {
      ruleMatched = true;
      const optional = rules.required?.expected === false;

      if (!this.validExpectationRule(value, rules.type, optional)) {
        hasError = true;
        fieldErrors.push(rules.type.error);
      }
    }

    if (rules.range) {
      ruleMatched = true;

      if (!this.validRangeRule(rules.range.min, rules.range.max, value)) {
        hasError = true;
        fieldErrors.push(rules.range.error);
      }
    }

    if (rules.dateRange) {
      ruleMatched = true;

      if (!this.validDateRange(rules.dateRange.min, rules.dateRange.max, value)) {
        hasError = true;
        fieldErrors.push(rules.dateRange.error);
      }
    }

    if (rules.length) {
      ruleMatched = true;

      if (!this.validLengthRule(rules.length.min, rules.length.max, value)) {
        hasError = true;
        fieldErrors.push(rules.length.error);
      }
    }

    if (rules.greaterThan) {
      ruleMatched = true;

      if (!this.validComparable(rules.greaterThan.baseline, value, 'greaterThan')) {
        hasError = true;
        fieldErrors.push(rules.greaterThan.error);
      }
    }

    if (rules.lessThan) {
      ruleMatched = true;

      if (!this.validComparable(rules.lessThan.baseline, value, 'lessThan')) {
        hasError = true;
        fieldErrors.push(rules.lessThan.error);
      }
    }

    if  (rules.oneOf) {
      ruleMatched = true;

      if (!this.validOption(rules.oneOf.options, value)) {
        hasError = true;
        fieldErrors.push(rules.oneOf.error);
      }
    }

    if (rules.equalsTo) {
      ruleMatched = true;

      if (!this.isEqualTo(rules.equalsTo.name, value, data)) {
        hasError = true;
        fieldErrors.push(rules.equalsTo.error);
      }
    }

    if (rules.equals) {
      ruleMatched = true;
      
      if (!this.isEquals(rules.equals.expected, value)) {
        hasError = true;
        fieldErrors.push(rules.equals.error);
      }
    }

    if (rules.secureLevel) {
      ruleMatched = true;

      if (!this.isSecure(rules.secureLevel.level, value)) {
        hasError = true;
        fieldErrors.push(rules.secureLevel.error);
      }
    }

    if (!ruleMatched) {
      console.error(`UiValidator - Field ${field} has NOT valid rules`);
      hasError = true;
    }

    return {
      errors: fieldErrors,
      hasError
    };
  }

  private runPreconditions(
    preConditions: UiValidatorWhenValidation, 
    data: UiValidatorData
  ): boolean {
    let passed = true;

    Object.keys(preConditions).forEach((observedField) => {
      const conditionData = preConditions[observedField];
      const value = data[observedField];
      const rules = conditionData.getRules();

      const result = this.runValidations(value, observedField, rules, data);

      if (result.hasError) {
        passed = false;
      }
    });

    return passed;
  }
}
