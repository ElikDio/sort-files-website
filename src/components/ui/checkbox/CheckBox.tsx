import { ReactNode } from 'react';
import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  children?: ReactNode;
  name: string;
  onChange?: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  name,
  onChange,
}) => {
  return (
    <label className={styles.checkBox}>
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
      />
      <span>{children}</span>
    </label>
  );
};
