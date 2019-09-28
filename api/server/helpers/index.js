import emptyBody from './emptyBody';
import responseMessage from './responseMessage';
import sendMail from './sendMail';
import * as message from './message';
import validators from './validator';
import createToken from './createToken';
import findUser from './findUser';

const { signupMessage } = message;

export default { 
    emptyBody,
    responseMessage,
    validators,
    sendMail,
    createToken,
    signupMessage,
    findUser
}