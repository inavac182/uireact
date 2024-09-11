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
  category,
  value,
  onChange,
  required,
}: UiTextAreaProps) => (
  <div className={`${className} ${styles.textareaWrapper} ${labelOnTop ? styles.textAreaWrapperColumn : ''}`} data-testid={testId}>
    {label && (
      <div>
        <UiLabel htmlFor={name} category={category === 'primary' ? 'fonts' : category}>
          {label}
        </UiLabel>
      </div>
    )}
    <div className={styles.textareaDiv}>
      <div className={styles.textareInputWrapper}>
        <textarea
          className={`${styles.textarea} bg-primary-10 border-${category ? category : 'primary'}-100 focus-border-${category ? category : 'tertiary'}-100 ${!resize ? styles.noResize : ''}`}
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
