import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      </div>

      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#instructions">Инструкция</a>
            </li>
            <li>
              <a href="#faq">Вопрос-ответ</a>
            </li>
            <li>
              <a href="#feedback-form">Предложения</a>
            </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <a href="#five">{/* <GitHub /> */}</a>
        </div>
      </div>
    </header>
  );
};
