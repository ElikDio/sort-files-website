import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={styles.button}
    >
      {children}
    </button>
  );
};
