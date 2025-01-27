import fetch from 'node-fetch';

const botToken = process.env.BOT_TOKEN;
const chatId = '5120801744';
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

export default async function handler(
  request: { method: string; body: { email: any; name: any; message: any } },
  result: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { error?: string; success?: boolean }): void;
        new (): any;
      };
    };
  }
) {
  if (request.method !== 'POST') {
    return result.status(405).json({ error: 'Метод не разрешён' });
  }

  const { email, name, message } = request.body;

  if (!email || !message) {
    return result.status(400).json({ error: 'Email и сообщение обязательны.' });
  }

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

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ params }),
    });

    if (!response.ok) {
      throw new Error('Ошибка отправки сообщения');
    }

    result.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    result.status(500).json({ error: 'Ошибка работы сервера - сообщение не отправлено. Попробуйте повторить отправку позже' });
  }
}
