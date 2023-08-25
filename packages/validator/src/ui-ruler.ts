import { UiValidatorRules } from './types';

export class UiRuler {
  private rules: UiValidatorRules = {};

  isRequired(errorMessage?: string, errorCode?: string | number): UiRuler {
    this.rules.required = {
      expected: true,
      error:
        errorMessage || errorCode
          ? {
              message: errorMessage,
              code: errorCode,
            }
          : undefined,
    };

    return this;
  }

  type(type: 'string' | 'numeric' | 'email' | 'phone', errorMessage?: string, errorCode?: string | number): UiRuler {
    this.rules.type = {
      expected: type,
      error:
        errorMessage || errorCode
          ? {
              message: errorMessage,
              code: errorCode,
            }
          : undefined,
    };

    return this;
  }

  range(min: number, max: number, errorMessage?: string, errorCode?: string | number): UiRuler {
    this.rules.range = {
      min,
      max,
      error:
        errorMessage || errorCode
          ? {
              message: errorMessage,
              code: errorCode,
            }
          : undefined,
    };

    return this;
  }

  length(min: number, max: number, errorMessage?: string, errorCode?: string | number): UiRuler {
    this.rules.length = {
      min,
      max,
      error:
        errorMessage || errorCode
          ? {
              message: errorMessage,
              code: errorCode,
            }
          : undefined,
    };

    return this;
  }

  /** For validation purposes, don't use it. */
  getRules(): UiValidatorRules {
    return this.rules;
  }
}
