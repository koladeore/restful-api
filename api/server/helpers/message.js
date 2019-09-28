const messageHeader = "<div style='width:600px;font-family: Arial,Helvetica,sans-serif; text-decoration: none; margin:auto; font-size: 14px;'><div style='background-color:rgba(23, 117, 147); color:#fff; padding:20px;text-align: center;font-size: 18px;'><span style='margin-right: 10px'>RESTFUL API</span></div><div style='padding:15px'>";
const messageFooter = "<p style='margin-top:20px; margin-bottom:0px; color: rgb(106, 108, 111); line-height: 1.35em;'>Thank you,</p><p style='margin-top:0px; margin-bottom:5px; color: rgb(106, 108, 111); line-height: 1.35em;'>KOLADE</p></div><div style='background-color:rgba(23, 117, 147); color:#fff; padding:7px'></div></div>";

const signupMessage = (name, token) => {
    const message = {
        html: `${messageHeader}
            <p>Dear <span style='text-transform: capitalize;'>${name}</span>,</p>
            <p>We are happy to have you with us, you are receiving this mail as a confirmation that your signUp is successful.
            Verify your account by clicking the button below</p>
            <p style='margin-top:20px;text-align:center'><a style='text-decoration:none;padding:10px;background:#33922f;color:#ffffff;border-radius:5px;' href='${process.env.SERVER_URL}/api/v1/api/users/verify?token=${token}'>Verify Account</a></p>
            ${messageFooter}
        `
    }
    return message;
};

export {
    signupMessage,
};
