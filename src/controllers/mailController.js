const nodemailer = require('nodemailer');
const mailConfig = require('../../config.json').mailConfig;

module.exports.sendMail = async (req, res) => {
    const transporter = nodemailer.createTransport(mailConfig);

    const mailData = {
        subject: req.body.subject,
        from: mailConfig.auth.user,
        to: 'indigitalprogcontato@gmail.com',
        text: `Remetente: ${req.body.from} --- ${req.body.message}`
    }

    try {
        const mail = await transporter.sendMail(mailData);
        res.status(200).json({ info: mail, message: 'Email enviado com sucesso!' });
        console.log('Email enviado com sucesso');
    } catch (err) {
        res.status(500).json({ err, message: 'Não foi possível enviar o email!'});
        console.log(err);
    }
}