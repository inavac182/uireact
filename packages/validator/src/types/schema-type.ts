import { UiRuler } from '../ui-ruler';
import { UiValidatorError } from './validator-result';

/** The value for each rule */
export type UiValidatorExpectationRule<T> = {
  /** The expected value for this rule */
  expected: T;
  /** The error message to provide in the response if this check doesn't pass */
  error?: UiValidatorError;
};

/** The value for each rule */
export type UiValidatorLengthRule = {
  /** The expected min length for this rule */
  min: number;
  /** The expected max length for this rule */
  max: number;
  /** The error message to provide in the response if this check doesn't pass */
  error?: UiValidatorError;
};

/** The value for each rule */
export type UiValidatorRangeRule = {
  /** The expected min range for this rule */
  min: number;
  /** The expected max range for this rule */
  max: number;
  /** The error message to provide in the response if this check doesn't pass */
  error?: UiValidatorError;
};

/** Set of possible rules for each field */
export type UiValidatorRules = {
  /** Validates the type of the value */
  type?: UiValidatorExpectationRule<'string' | 'numeric' | 'email' | 'phone'>;
  /** Validates the nullability of the value */
  required?: UiValidatorExpectationRule<boolean>;
  /** Validates the length of characters of the value */
  range?: UiValidatorRangeRule;
  /** Validates the length of characters of the value */
  length?: UiValidatorLengthRule;
};

/** The schema needed for the UiValidator */
export type UiValidatorSchema = {
  [key in string]: UiRuler;
};
