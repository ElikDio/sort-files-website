import React from 'react';
import { DownloadButton } from '../ui/download-button/DownloadButton';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section
      className={styles.hero}
      id="hero"
    >
      <div className={styles.texts}>
        <h1>Sort Files</h1>
        <h3>Приложение, которое организует ваши файлы за несколько кликов.</h3>
      </div>
      <div className={styles.background}>
        <img
          src="/photos/background-1.png"
          alt="Background 1"
          className={styles.bg1}
        />
        <img
          src="/photos/background-2.png"
          alt="Background 2"
          className={styles.bg2}
        />
        <img
          src="/photos/background-3.png"
          alt="Background 3"
          className={styles.bg3}
        />
        <img
          src="/photos/background-4.png"
          alt="Background 4"
          className={styles.bg4}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img
            src="/photos/logo.png"
            alt="SortFiles"
          />
        </div>
        <h1 className={styles.slogan}>Сортируй. Организуй. Экономь время.</h1>
        <a
          href="#about"
          className={styles.mobileButton}
        >
          Узнать больше
        </a>
        <DownloadButton />
      </div>
    </section>
  );
};
