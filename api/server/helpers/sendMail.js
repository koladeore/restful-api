import sendgridMail from '@sendgrid/mail';

const sendMail = (senderMail, receiverMail, message) => {
    sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: receiverMail,
        from: senderMail,
        subject: 'Welcome to book restful-api',
        text: 'RESTFUL API',
        ...message
    };
    return sendgridMail.send(msg);
};

export default sendMail;
