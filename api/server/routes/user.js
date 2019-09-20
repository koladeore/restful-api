import express from 'express';
import Users from '../controller/user';
import middlewares from '../middlewares';

const BASE_URL = '/api/users'
const { signUp } = Users;
const { UserValidator: {signUpValidator} } = middlewares;

const user = express.Router();

user.post(`${BASE_URL}`,  signUpValidator, signUp);

export default user;
