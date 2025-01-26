import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './Question.module.scss';

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpened] = useState(false);

  return (
    <div
      className={styles.question}
      onClick={() => setIsOpened(!isOpen)}
    >
      <div className={styles.questionHeader}>
        <h3>{question}</h3>
        <button className={clsx({ [styles.openButton]: isOpen })}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <p className={clsx({ [styles.open]: isOpen })}>{answer}</p>
    </div>
  );
};
