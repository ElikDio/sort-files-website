import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
