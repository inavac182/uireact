/** The error object to be retrieved when a validation fails */
export type UiValidatorError = {
  /** A message to be provided in the error */
  message?: string;
  /** A code to be provided in the error */
  code?: string | number;
};

/** Errors per each field */
export type UiValidatorErrors = {
  /** The list of errors for each field */
  [key in string]: UiValidatorError[];
};

/** The result of the validation */
export type UiValidatorResult = {
  /** If validation was success or not */
  passed: boolean;
  /** The list of errors found in the data passed */
  errors?: UiValidatorErrors;
};
