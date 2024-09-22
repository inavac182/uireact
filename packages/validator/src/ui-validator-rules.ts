import { UiValidatorFieldRules, UiValidatorFieldTypes } from "types";

export class UiValidatorRules {
  protected rules:  UiValidatorFieldRules;

  constructor(type?: UiValidatorFieldTypes, message?: string) {
    if (type) {
      this.rules = {
        type: {
          expected: type,
          error: message ? { message } : { message: `This is not a valid ${type}` }
        }
      };
    } else {
      this.rules = {};
    }
  };

  range(min: number, max: number, errorMessage?: string): UiValidatorRules {
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

  dateRange(min: Date, max: Date, errorMessage?: string): UiValidatorRules {
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

  length(min: number, max: number, errorMessage?: string): UiValidatorRules {
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

  greaterThan(baseline: number | Date, errorMessage?: string): UiValidatorRules {
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

  lessThan(baseline: number | Date, errorMessage?: string): UiValidatorRules {
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

  isOneOf(options: Array<string | number>, errorMessage?: string): UiValidatorRules {
    this.rules.oneOf = {
      options,
      error: errorMessage
        ? {
            message: errorMessage,
          }
        : {
            message: `This is not valid, only possible values are: ${options.map(option => option)}`,
          },
    };

    return this;
  }

  /** @private For validation purposes, don't use it. */
  getRules(): UiValidatorFieldRules {
    return this.rules;
  }
}