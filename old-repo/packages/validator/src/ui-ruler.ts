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

  type(type: 'string' | 'numeric' | 'email' | 'phone' | 'date', errorMessage?: string): UiRuler {
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

  dateRange(min: Date, max: Date, errorMessage?: string): UiRuler {
    this.rules.dateRange = {
      min,
      max,
      error: errorMessage
        ? {
            message: errorMessage,
          }
        : {
            message: `This date is not in valid range`,
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

  greaterThan(baseline: number | Date, errorMessage?: string): UiRuler {
    const defaultMessage =
      typeof baseline === 'number'
        ? `The value is less than ${baseline}`
        : `The date is earlier ${baseline.getFullYear()}/${(baseline.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${baseline.getDate().toString().padStart(2, '0')}`;
    this.rules.greaterThan = {
      baseline,
      error: {
        message: errorMessage ?? defaultMessage,
      },
    };

    return this;
  }

  lessThan(baseline: number | Date, errorMessage?: string): UiRuler {
    const defaultMessage =
      typeof baseline === 'number'
        ? `The value is greater than ${baseline}`
        : `The date is after ${baseline.getFullYear()}/${(baseline.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${baseline.getDate().toString().padStart(2, '0')}`;
    this.rules.lessThan = {
      baseline,
      error: {
        message: errorMessage ?? defaultMessage,
      },
    };

    return this;
  }

  /** @private For validation purposes, don't use it. */
  getRules(): UiValidatorRules {
    return this.rules;
  }
}
