import { UiValidatorWhen } from './ui-validator-when';
import { 
  UiValidatorFieldTypes,
  UiValidatorFieldMetadata, 
  UiValidatorWhenValidation
} from './types';
import { UiValidatorRules } from './ui-validator-rules';

export class UiValidatorField extends UiValidatorRules {
  private metadata?: UiValidatorFieldMetadata;
  private preValidations?: Array<UiValidatorWhenValidation>;

  constructor(type: UiValidatorFieldTypes, message?: string) {
    super(type, message);
  }

  when(fieldName: string, validation: UiValidatorRules): UiValidatorWhen {
    const when = new UiValidatorWhen(this, fieldName, validation);

    return when;
  }

  /** Used to set up EzForms field metadata */
  ezMetada(options: UiValidatorFieldMetadata) {
    this.metadata = { ...options };
    return this;
  }

  /** @private To retrieve the field metadata */
  getEzMetadata() {
    return this.metadata;
  }

  /** @private To retrieve the field metadata */
  setPreset(preValidations: Array<UiValidatorWhenValidation>) {
    this.preValidations = preValidations;
  }

  /** @private To retrieve presets */
  getPreset() {
    this.preValidations;
  }
}
