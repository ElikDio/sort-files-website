import React, { useState } from 'react';
import { Button } from '../ui/button/Button';
import { CheckBox } from '../ui/checkbox/CheckBox';
import { Input } from '../ui/input/Input';
import styles from './FeedbackForm.module.scss';

export const FeedbackForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(false);
  const [errorText, setErrorText] = useState<string>('');
  const [successText, setSuccessText] = useState<string>('');

  const botToken = 'TOKEN';
  const chatId = '789975135';
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;


  /** TODO: 
   * 1) Настроить безопасность: вызывать api метод с сервера, а не напрямую, чтобы скрыть токен бота. Настроить на сервере паузу между запросами с одного ip. 
   * 2) Вынести логику вызаимодействия в utils
   * */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!consent) {
      setErrorText('Вы должны дать согласие на обработку данных:');
      return;
    }

    try {
      const messageToSend = `
      <b>Новое сообщение с формы обратной связи</b> 📩
  ${name ? `<b>Имя:</b> ${name}` : '<i>Имя не указано</i>'}
  ${email ? `<b>Email:</b> ${email}` : '<i>Email не указан</i>'}
      
<b>Сообщение:</b>
  ${message}`;

      const params = {
        chat_id: chatId,
        text: messageToSend,
        parse_mode: 'HTML',
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessText('Сообщение успешно отправлено!');
      } else {
        setErrorText(`Ошибка отправки сообщения: ${data.error}`);
      }
    } catch (error) {
      setErrorText(`Ошибка отправки сообщения: ${error}`);
    }

    setTimeout(() => {
      setErrorText('');
      setSuccessText('');
    }, 7000);
  };

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
        onSubmit={handleSubmit}
        className={styles.callbackForm}
      >
        <div className={styles.box}>
          <Input
            placeholder="Ваше имя"
            onChange={setName}
          />
          <Input
            type="email"
            onChange={setEmail}
            placeholder="Ваш e-mail для ответа"
          />
          <Input
            required={true}
            errorText={errorText}
            successText={successText}
            onChange={setMessage}
            placeholder="Ваше сообщение"
            type="textarea"
          />
          <CheckBox
            name={'consent'}
            onChange={() => setConsent(!consent)}
          >
            Даю согласие на обработку моих персональных данных в соответствии с{' '}
            <a
              href="https://sort-files.ru/confidential.html"
              target="_blank"
              rel="noreferrer"
            >
              политикой конфиденциальности
            </a>
          </CheckBox>
        </div>
        <Button type="submit">Отправьте нам сообщение</Button>
      </form>
    </section>
  );
};
