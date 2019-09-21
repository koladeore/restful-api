import helpers from '../helpers';
import errorHandler from './errorHandler';

const { validators, emptyBody } = helpers;

const  { checkAuthor, checkDescription, checkTitle, checkQuantity } = validators;

const { validatorError } = errorHandler;

const BookValidator = {
    bookValidator: [
        checkAuthor(),
        checkDescription('name'),
        checkTitle('username'), 
        checkQuantity(),
        validatorError
    ]
};

export default BookValidator;
