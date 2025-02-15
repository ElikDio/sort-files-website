import React from 'react';
import styles from './DownloadButton.module.scss';

export const DownloadButton: React.FC = () => {
  return (
    <a
      href="/SortFiles.exe"
      download
      className={styles.downloadButton}
    >
      Скачать
    </a>
  );
};
