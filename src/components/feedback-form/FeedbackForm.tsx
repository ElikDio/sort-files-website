import React from 'react';
import { Button } from '../ui/button/Button';
import { CheckBox } from '../ui/checkbox/CheckBox';
import { Input } from '../ui/input/Input';
import styles from './FeedbackForm.module.scss';

export const FeedbackForm: React.FC = () => {
  return (
    <section
      className={styles.feedbackForm}
      id="feedback-form"
    >
      <img
        src="/photos/background-ff.png"
        alt=""
      />
      <div className={styles.feebackInfo}>
        <h1>Мы всегда рады вашему мнению!</h1>
        <p>
          Поделитесь своими идеями или вопросами, чтобы мы могли сделать Sort
          Files ещё лучше
        </p>
      </div>

      <form
        action="#"
        className={styles.callbackForm}
      >
        <div className={styles.box}>
          <Input placeholder="Ваше имя" />
          <Input
            type="email"
            errorText='Некорректный email'
            placeholder="Ваш e-mail для ответа"
          />
          <Input
            required={true}
            // errorText='Обязательное поле'
            successText='Получили ваш ответ!'
            placeholder="Ваше сообщение"
            type="textarea"
          />
          <CheckBox name={'consent'}>
            Даю согласие на обработку моих персональных данных в соответствии с
            <a href="#polytics">политикой конфиденциальности</a>
          </CheckBox>
        </div>
        <Button>Отправьте нам сообщение</Button>
      </form>
    </section>
  );
};
