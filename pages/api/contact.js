export default function (req, res) {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'zion.inquiries@gmail.com',
      pass: "7^Jy*Ve4%99@",
    },
    secure: true,
  })

  console.log({transporter})
  const mailData = {
    from: 'zion.inquiries@gmail.com',
    to: 'stevenlee731@gmail.com',
    subject: `Message From ${req.body.firstName} ${req.body.lastName} | ${req.body.phoneNumber}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        res.status(500).end();
        return resolve();
      }

      else {
        console.log(info);
      }

    })
    res.status(200).end();
    resolve();
  });
}