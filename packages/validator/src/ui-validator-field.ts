import { UiValidatorFieldTypes, UiValidatorFieldRules, UiValidatorFieldData } from './types';

export class UiValidatorField {
  private data: UiValidatorFieldData;

  constructor(type: UiValidatorFieldTypes, message?: string) {
    this.data = {
      rules: {
        type: {
          expected: type,
          error: message ? { message } : { message: `This is not a valid ${type}` }
        }
      }
    };

    return this;
  }

  isRequired(errorMessage?: string): UiValidatorField {
    this.data.rules.required = {
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

  isOptional(): UiValidatorField {
    return this;
  }

  range(min: number, max: number, errorMessage?: string): UiValidatorField {
    this.data.rules.range = {
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

  dateRange(min: Date, max: Date, errorMessage?: string): UiValidatorField {
    this.data.rules.dateRange = {
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

  length(min: number, max: number, errorMessage?: string): UiValidatorField {
    this.data.rules.length = {
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

  greaterThan(baseline: number | Date, errorMessage?: string): UiValidatorField {
    const defaultMessage =
      typeof baseline === 'number'
        ? `The value is less than ${baseline}`
        : `The date is earlier ${baseline.getFullYear()}/${(baseline.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${baseline.getDate().toString().padStart(2, '0')}`;

    this.data.rules.greaterThan = {
      baseline,
      error: {
        message: errorMessage ?? defaultMessage,
      },
    };

    return this;
  }

  lessThan(baseline: number | Date, errorMessage?: string): UiValidatorField {
    const defaultMessage =
      typeof baseline === 'number'
        ? `The value is greater than ${baseline}`
        : `The date is after ${baseline.getFullYear()}/${(baseline.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${baseline.getDate().toString().padStart(2, '0')}`;

    this.data.rules.lessThan = {
      baseline,
      error: {
        message: errorMessage ?? defaultMessage,
      },
    };

    return this;
  }

  label(label: string): UiValidatorField {
    this.data.label = label;

    return this;
  }

  icon(name: string): UiValidatorField {
    this.data.icon = name;
    return this;
  }

  /** @private To retrieve the field label */
  getLabel() {
    return this.data.label;
  }

  /** @private To retrieve the field icon */
  getIcon() {
    return this.data.icon;
  }

  /** @private For validation purposes, don't use it. */
  getRules(): UiValidatorFieldRules {
    return this.data.rules;
  }
}