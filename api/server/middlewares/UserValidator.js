import helpers from '../helpers';
import errorHandler from './errorHandler';

const { validators, emptyBody } = helpers;

const  { isValidEmail, isValidName, isValidUserName, isValidPassword } = validators;

const { validatorError } = errorHandler;

const userValidator = {
    signUpValidator: [
        isValidEmail(),
        isValidName('name'),
        isValidUserName('username'), 
        isValidPassword(),
        validatorError
    ]
};

export default userValidator;
