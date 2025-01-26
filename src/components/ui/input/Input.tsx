// import Cross from '@/public/icons/cross.svg';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder?: string;
  type?: 'text' | 'textarea' | 'email';
  required?: boolean;
  initialValue?: string;
  onChange?: (value: string) => void;
  errorText?: string;
  successText?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type = 'text',
  required = false,
  initialValue = '',
  onChange,
  errorText,
  successText,
}) => {
  const [value, setValue] = useState(initialValue);

  const clearValue = () => setValue('');

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  const placeholderText = `${placeholder ?? 'Введите текст'}${required ? '' : ' (необязательное поле)'}`;

  return (
    <div className={styles.inputWrapper}>
      {type === 'textarea' ? (
        <textarea
          className={clsx(
            styles.textarea,
            { [styles.error]: errorText },
            { [styles.success]: successText }
          )}
          placeholder={placeholderText}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      ) : (
        <div
          className={clsx(
            styles.inputContainer,
            { [styles.error]: errorText },
            { [styles.success]: successText }
          )}
        >
          <input
            type={type}
            className={styles.input}
            required={required}
            placeholder={placeholderText}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={styles.controlButtons}>
            {value && (
              <button
                className={styles.controlButton}
                onClick={clearValue}
                type="button"
                aria-label="Очистить поле"
              >
                x{/* <Cross /> */}
              </button>
            )}
          </div>
        </div>
      )}
      {errorText && <span className={styles.errorText}>{errorText}</span>}
      {errorText === undefined && successText && (
        <span className={styles.successText}>{successText}</span>
      )}
    </div>
  );
};
