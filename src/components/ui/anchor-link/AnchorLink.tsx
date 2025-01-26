import React, { ReactNode } from 'react';
import styles from './AnchorLink.module.scss';

interface AnchorLinkProps {
  children: ReactNode;
  toElementID?: string;
}

export const AnchorLink: React.FC<AnchorLinkProps> = ({
  children,
  toElementID = '',
}) => {
  return (
    <a
      href={`#${toElementID}`}
      className={styles.anchorLink}
    >
      {children}
    </a>
  );
};
