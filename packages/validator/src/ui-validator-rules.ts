import { UiValidatorFieldRules, UiValidatorFieldTypes } from "./types";

export class UiValidatorRules {
  private rules:  UiValidatorFieldRules;

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

  optional() {
    this.rules.required = {
      expected: false,
      error: {}
    };

    return this;
  }

  present(errorMessage?: string) {
    this.rules.required = {
      expected: true,
      error: {
        message: errorMessage ?? "This is required"
      }
    };

    return this;
  }

  range(min: number, max: number, errorMessage?: string) {
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

  dateRange(min: Date, max: Date, errorMessage?: string) {
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

  length(min: number, max: number, errorMessage?: string) {
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

  greaterThan(baseline: number | Date, errorMessage?: string) {
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

  lessThan(baseline: number | Date, errorMessage?: string) {
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

  oneOf(options: Array<string | number>, errorMessage?: string) {
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