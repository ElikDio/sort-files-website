import React from 'react';
import { ReactComponent as GitHub } from '../../styles/icons/github.svg';
import { ReactComponent as Telegram } from '../../styles/icons/tg.svg';
import { Button } from '../ui/button/Button';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <div className={styles.logo}>
          <h1>SortFiles</h1>
          <div className={styles.sublogo}>ПО для сортировки файлов</div>
          <Button>Скачать</Button>
        </div>

        <div className={styles.footerNavigation}>
          <div className={styles.footerNav}>
            <div className={styles.title}>SortFiles</div>
            <ul>
              <li>
                <a href="#hero">Главная</a>
              </li>
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
          </div>
        </div>
      </div>

      <div className={styles.footerInfo}>
        <div className={styles.footerLinks}>
          <div className={styles.copyright}>
            Made by:{' '}
            <a
              href="https://elikdio.ru"
              target="_blank"
              rel="noreferrer"
            >
              ElikDio
            </a>
          </div>
          <div className={styles.socials}>
            <a
              href="https://t.me/elik_id"
              target="_blank"
              className={styles.social}
              rel="noreferrer"
            >
              <Telegram />
            </a>
            <a
              href="https://github.com/ElikDio"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              <GitHub />
            </a>
          </div>
        </div>

        <div className={styles.footerLaws}>
          <div className={styles.copy}>© 2025 Все права защищены</div>
          <div className={styles.links}>
            <a
              href="https://sort-files.ru/agreement.html"
              target="_blank"
              rel="noreferrer"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
