import React from 'react';
import { ReactComponent as Python } from '../../styles/icons/python.svg';
import { ReactComponent as Qt } from '../../styles/icons/qt.svg';
import { ReactComponent as Windows } from '../../styles/icons/windows.svg';
import { Button } from '../ui/button/Button';
import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <section
      className={styles.about}
      id="about"
    >
      <div className={styles.info}>
        <h1>О проекте</h1>
        <div className={styles.infoText}>
          <div className={styles.purpose}>
            <p>
              <b>Sort Files</b> был создан с одной целью — сделать сортировку
              ваших файлов по дате создания лёгкой и доступной
            </p>
            <Button>Скачать</Button>
          </div>
          <div className={styles.stack}>
            <p>
              Приложение разработано для всех, кто ценит порядок и время.
              Основанное на Python и PyQt, наше ПО предоставляет интуитивно
              понятный интерфейс и передовые функции.
            </p>
            <div className={styles.icons}>
              <Python />
              <Windows />
              <Qt />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.demo}>
        <img
          src="/photos/demo.png"
          alt="demo"
        />
      </div>
    </section>
  );
};
