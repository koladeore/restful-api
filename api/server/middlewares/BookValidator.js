import helpers from '../helpers';
import errorHandler from './errorHandler';

const { validators } = helpers;

const {
  checkAuthor, checkDescription, checkTitle, checkQuantity,
} = validators;

const { validatorError } = errorHandler;

const BookValidator = {
  bookValidator: [
    checkAuthor(),
    checkDescription('description'),
    checkTitle('title'),
    checkQuantity(),
    validatorError,
  ],
};

export default BookValidator;
