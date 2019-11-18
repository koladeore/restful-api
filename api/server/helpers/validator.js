import { check } from 'express-validator';

const isValidEmail = (field = 'email') => check(field)
  .trim()
  .normalizeEmail()
  .isEmail()
  .withMessage('the email address you supplied is invalid')
  .not()
  .isEmpty()
  .withMessage('email is required field');

const isValidName = (field) => check(field)
  .trim()
  .custom((value) => {
    if (!/^[a-z]{1,}[\s]{0,1}[-']{0,1}[a-z]+$/i.test(value)) {
      return false;
    }
    return true;
  })
  .escape()
  .withMessage(`the ${field} can only contain alphabets, a space, apostrophe(') and a dash(-)`)
  .not()
  .isEmpty()
  .withMessage(`${field} is a required field`);

const isValidUserName = (field) => check(field)
  .trim()
  .custom((value) => {
    if (!/^[a-z]{1,}[\s]{0,1}[-']{0,1}[a-z]+$/i.test(value)) {
      return false;
    }
    return true;
  })
  .escape()
  .withMessage(`the ${field} can only contain alphabets, a space, apostrophe(') and a dash(-)`)
  .not()
  .isEmpty()
  .withMessage(`${field} is a required field`);


const isValidPassword = (field = 'password') => check(field).isLength({ min: 8, max: 20 })
  .withMessage(`${field} must be at least 8 characters long`).not()
  .isEmpty()
  .withMessage(`${field} is a required field`)
  .trim()
  .isAlphanumeric()
  .withMessage(`${field} should contain only numbers and a alphabets`);

const checkTitle = (field = 'title') => check(field)
  .exists()
  .withMessage(`${field} is a required field`)
  .trim()
  .isLength({ min: 2, max: 50 })
  .withMessage(`${field} must be at least 2 characters, and maximum 50`)
  .not()
  .matches(/^[0-9]+([,.][0-9]+)?$/, 'g')
  .withMessage(`${field} must contain alphabets`)
  .not()
  .matches(/^[^a-zA-Z0-9]+$/, 'g')
  .withMessage(`${field} must contain alphabets`);

const checkDescription = (field = 'description') => check(field)
  .optional()
  .isLength({ min: 10 })
  .withMessage(`${field} must be at least 10 characters`)
  .not()
  .matches(/^[0-9]+([,.][0-9]+)?$/, 'g')
  .withMessage(`${field} must contain alphabets`)
  .not()
  .matches(/^[^a-zA-Z0-9]+$/, 'g')
  .withMessage(`${field} must contain alphabets`);

const checkAuthor = (field = 'author') => check(field)
  .exists()
  .withMessage(`${field} is a required field`)
  .trim()
  .isLength({ min: 2, max: 50 })
  .withMessage(`${field} must be at least 2 characters, and maximum 50`)
  .not()
  .matches(/^[0-9]+([,.][0-9]+)?$/, 'g')
  .withMessage(`${field} must contain alphabets`)
  .not()
  .matches(/^[^a-zA-Z0-9]+$/, 'g')
  .withMessage(`${field} must contain alphabets`);

const checkQuantity = (field = 'quantity') => check(field)
  .exists()
  .withMessage(`${field} is a required field`)
  .trim()
  .not()
  .isEmpty()
  .withMessage(`${field} cannot be empty`)
  .isInt()
  .withMessage(`${field} must be an integer`);
export default {
  isValidName,
  isValidEmail,
  isValidUserName,
  isValidPassword,
  checkTitle,
  checkAuthor,
  checkDescription,
  checkQuantity,
};
