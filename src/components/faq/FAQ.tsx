import React from 'react';
import styles from './FAQ.module.scss';
import { questions } from './questions';
import { Question } from './question/Question';

export const FAQ: React.FC = () => {
  return (
    <section className={styles.faq} id="faq">
      <h1>Вопрос-ответ</h1>

      <div className={styles.questions}>
        {questions &&
          questions.length > 0 &&
          questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
      </div>

      <div className={styles.contactUs}></div>
    </section>
  );
};
