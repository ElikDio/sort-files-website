import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Logo
        {/* <Logo /> */}
      </div>

      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#one">О нас</a>
            </li>
            <li>
              <a href="#two">Инструкция</a>
            </li>
            <li>
              <a href="#three">Вопрос-ответ</a>
            </li>
            <li>
              <a href="#four">Предложения</a>
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
