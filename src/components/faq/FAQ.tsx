import React from 'react';
import { AnchorLink } from '../ui/anchor-link/AnchorLink';
import styles from './FAQ.module.scss';
import { Question } from './question/Question';
import { questions } from './questions';

export const FAQ: React.FC = () => {
  return (
    <section
      className={styles.faq}
      id="faq"
    >
      <h1>Вопрос-ответ</h1>
      <div className={styles.faqBody}>
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

        <div className={styles.contactUs}>
          <p>Не нашли ответ на свой вопрос?</p>
          <p>Задайте его ниже:</p>
          <AnchorLink toElementID="feedback-form">Задать вопрос →</AnchorLink>
        </div>
      </div>
    </section>
  );
};
