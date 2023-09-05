import { UiValidatorRules } from './types';

export class UiRuler {
  private rules: UiValidatorRules = {};

  isRequired(errorMessage?: string): UiRuler {
    this.rules.required = {
      expected: true,
      error: errorMessage
        ? {
            message: errorMessage,
          }
        : {
            message: 'This is required',
          },
    };

    return this;
  }

  isOptional(): UiRuler {
    return this;
  }

  type(type: 'string' | 'numeric' | 'email' | 'phone', errorMessage?: string): UiRuler {
    this.rules.type = {
      expected: type,
      error: errorMessage
        ? {
            message: errorMessage,
          }
        : {
            message: `This is not a valid ${type}`,
          },
    };

    return this;
  }

  range(min: number, max: number, errorMessage?: string): UiRuler {
    this.rules.range = {
      min,
      max,
      error: errorMessage
        ? {
            message: errorMessage,
          }
        : {
            message: `This is not in valid range of ${min} and ${max}`,
          },
    };

    return this;
  }

  length(min: number, max: number, errorMessage?: string): UiRuler {
    this.rules.length = {
      min,
      max,
      error: errorMessage
        ? {
            message: errorMessage,
          }
        : {
            message: `This does not have a valid length of min ${min} and max ${max}`,
          },
    };

    return this;
  }

  /** For validation purposes, don't use it. */
  getRules(): UiValidatorRules {
    return this.rules;
  }
}
