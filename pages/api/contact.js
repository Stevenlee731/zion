const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.firstName} ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phoneNumber}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'SENDER-EMAIL',
    from: 'zion.inquiries@gmail.com',
    subject: `New message from ${body.firstName} ${body.lastName}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};