import React from 'react';
import { Button } from '../ui/button/Button';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_header}>
        <div className={styles.logo}>
          <h1>SortFiles</h1>
          <div className={styles.sublogo}>ПО для сортировки файлов</div>
          <Button>Скачать</Button>
        </div>

        <div className={styles.footer_columns}>
          <div className={styles.footer_column}>
            <div className={styles.footer_title}>SortFiles</div>
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

      <div className={styles.footer_info}>
        <div className={styles.upper_info}>
          <div className={styles.copyright}>
            Made by: <a href="#elikdio.ru">ElikDio</a>
          </div>
          <div className={styles.socials}>
            <a
              href="#vk"
              className={styles.social}
            >
              {/* <Vk/> */}
            </a>
            <a
              href="#tg"
              className={styles.social}
            >
              {/* <TG/> */}
            </a>
          </div>
        </div>

        <div className={styles.lower_info}>
          <div className={styles.copy}>
            © 2025 Все права защищены
          </div>
          <div className={styles.links}>
            <a href="#agreement">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
