import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { ReactComponent as Python } from '../../styles/icons/python.svg';
import { ReactComponent as Qt } from '../../styles/icons/qt.svg';
import { ReactComponent as Windows } from '../../styles/icons/windows.svg';
import { DownloadButton } from '../ui/download-button/DownloadButton';
import styles from './About.module.scss';

export const About: React.FC = () => {
  const [showDemo, setShowDemo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleDemo = () => {
    if (showDemo) {
      videoRef.current?.pause();
      if (videoRef.current?.currentTime) {
        videoRef.current.currentTime = 0;
      }
    } else {
      videoRef.current?.play();
    }
    setShowDemo(!showDemo);
  };

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
            <DownloadButton />
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
      <div
        className={clsx(styles.demo, { [styles.show]: !showDemo })}
        onClick={toggleDemo}
      >
        <img
          src="/photos/demo.png"
          alt="demo"
        />
      </div>

      <div
        className={clsx(
          styles.demoHuge,
          { [styles.showHuge]: showDemo },
          styles.backdrop
        )}
        onClick={toggleDemo}
      >
        <div className={styles.demoVideo}>
          <video
            className={styles.video}
            src={'/demo.mp4'}
            loop
            muted
            controls={false}
            playsInline
            ref={videoRef}
          >
            Your browser does not support the video tag.
          </video>
          <img
            src="/photos/demo.png"
            alt="demo"
          />
        </div>
      </div>
    </section>
  );
};
