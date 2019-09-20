import { check, param } from 'express-validator';

const isValidEmail = (field = 'email') => check(field)
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('the email address you supplied is invalid')
    .not()
    .isEmpty()
    .withMessage('email is required field');

const isValidName = field => check(field)
    .trim()
    .custom((value) => {
        if (!/^[a-z]{1,}[\s]{0,1}[-']{0,1}[a-z]+$/i.test(value)){
            return false;
        }
        return true;
    })
    .escape()
    .withMessage(`the ${field} can only contain alphabets, a space, apostrophe(') and a dash(-)`)
    .not()
    .isEmpty()
    .withMessage(`${field} is a required field`);

const isValidUserName = field => check(field)
.trim()
.custom((value) => {
    if (!/^[a-z]{1,}[\s]{0,1}[-']{0,1}[a-z]+$/i.test(value)){
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
    .isAlphanumeric()
    .withMessage(`${field} should contain only numbers and a alphabets`);

export default {
    isValidName,
    isValidEmail,
    isValidUserName,
    isValidPassword
}
    