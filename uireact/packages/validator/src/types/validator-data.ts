/** The data object with each field and value to be validated */
export type UiValidatorData = {
  /** The key should match the key in the rules schema */
  [key in string]: unknown;
};
