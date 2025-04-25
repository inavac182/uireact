import { UiValidatorError } from './validator-result';
import { UiValidatorRules } from '../ui-validator-rules';
import { UiValidatorWhen } from '../ui-validator-when';
import { UiValidatorField } from '../ui-validator-field';

/** The value for each rule */
export type UiValidatorExpectationRule<T> = {
  /** The expected value for this rule */
  expected: T;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

/** Rule that holds a value to compare with a baseline */
export type UiValidatorComparisonRule = {
  /** The expected value for this rule */
  baseline: number | Date;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

/** Rule that compares a value with another field in the same schema */
export type UiValidatorEqualsToRule = {
  /** The name of the field to be compared with */
  name: string;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

/** Rule that holds a value to compare with a baseline */
export type UiValidatorChoicesRule = {
  /** The expected value for this rule */
  options: Array<string | number>;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

/** The value for each rule */
export type UiValidatorLengthRule = {
  /** The expected min length for this rule */
  min: number;
  /** The expected max length for this rule */
  max: number;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

/** The value for each rule */
export type UiValidatorRangeRule = {
  /** The expected min range for this rule */
  min: number;
  /** The expected max range for this rule */
  max: number;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

/** The value for each rule */
export type UiValidatorDateRangeRule = {
  /** The expected min range for this rule */
  min: Date;
  /** The expected max range for this rule */
  max: Date;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
};

export type UiValidatorSecureLevel = 'weak' | 'mid' | 'strong';

export type UiValidatorSecureRule = {
  /** The level of secureness that we want to validate */
  level: UiValidatorSecureLevel;
  /** The error message to provide in the response if this check doesn't pass */
  error: UiValidatorError;
}

/** The possible field types for each rule */
export type UiValidatorFieldTypes = 'text' | 'numeric' | 'email' | 'phone' | 'date' | 'boolean' | 'choice';

/** Set of possible rules for each field */
export type UiValidatorFieldRules = {
  /** Validates the type of the value */
  type?: UiValidatorExpectationRule<UiValidatorFieldTypes>;
  /** Validates the nullability of the value */
  required?: UiValidatorExpectationRule<boolean>;
  /** Validates the length of characters of the value */
  dateRange?: UiValidatorDateRangeRule;
  /** Validates the length of characters of the value */
  range?: UiValidatorRangeRule;
  /** Validates the length of characters of the value */
  length?: UiValidatorLengthRule;
  /** Validates a value is greater than a baseline */
  greaterThan?: UiValidatorComparisonRule;
  /** Validates a value is less than a baseline */
  lessThan?: UiValidatorComparisonRule;
  /** Validates that a choice field is one of a given set of values */
  oneOf?: UiValidatorChoicesRule;
  /** Validates value matches another with another field by its name. */
  equalsTo?: UiValidatorEqualsToRule;
  /** Validates the value matches a specific secure level */
  secureLevel?: UiValidatorSecureRule;
};

/** Metadata information used from EzForms */
export type UiValidatorFieldMetadata = {
  /** The input label to use */
  label?: string;
  /** The icon name to use in the text input */
  icon?: string;
  /** Tells UiDatepickerInput the date format to use */
  dateFormat?: 'yyyy/mm/dd' | 'yyyy-mm-dd' | 'mm/dd/yyyy' | 'dd/mm/yyyy';
  /** Tells EzForms to display a textarea rather than a text input */
  paragraph?: boolean;
  /** Tells EzForms to display field as password */
  protected?: boolean;
  /** Tells EzForms to display as a UiDigitsInputs */
  code?: boolean;
  /** Tells EzForms to display input as hidden */
  hidden?: boolean;
  /** Tells EzForms to display a prefix on a range input */
  prefix?: string;
}

/** Set of possible rules for each field */
export type UiValidatorFieldData = {
  rules: UiValidatorFieldRules;
  metadata: UiValidatorFieldMetadata;
};

/** The schema needed for the UiValidator */
export type UiValidatorSchema = {
  [key in string]: UiValidatorField | UiValidatorWhen;
};
