import React from 'react';

import { UiText, UiLabel } from '@uireact/text';

import { UiTextAreaProps } from './types';
import styles from './ui-textarea.scss';

export const UiTextArea: React.FC<UiTextAreaProps> = ({
  cols,
  disabled,
  error,
  label,
  labelOnTop,
  maxlength,
  className = '',
  testId,
  name = 'textarea-name',
  placeholder,
  resize = true,
  ref,
  rows,
  category = 'fonts',
  value,
  onChange,
  required,
}: UiTextAreaProps) => (
  <div className={`${className} ${styles.textareaWrapper}`} data-testid={testId}>
    {label && labelOnTop && (
      <div>
        <UiLabel htmlFor={name} category={category}>
          {label}
        </UiLabel>
      </div>
    )}
    <div>
      {label && !labelOnTop && (
        <div>
          <UiLabel htmlFor={name} category={category}>
            {label} &nbsp;
          </UiLabel>
        </div>
      )}
      <div className={styles.textareInputWrapper}>
        <textarea
          className={`${styles.textarea} bg-primary-10 focus-border-tertiary-100 ${!resize ? styles.noResize : ''}`}
          cols={cols}
          disabled={disabled}
          id={name}
          maxLength={maxlength}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          rows={rows}
          value={value}
          required={required}
        />
        {error && <UiText category={category}>{error}</UiText>}
      </div>
    </div>
  </div>
);

UiTextArea.displayName = 'UiTextArea';
