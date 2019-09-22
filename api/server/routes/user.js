import express from 'express';
import Users from '../controller/user';
import middlewares from '../middlewares';

const BASE_URL = '/api/users'
const { signUp, signIn } = Users;
const { UserValidator: {signUpValidator, signInValidator} } = middlewares;

const user = express.Router();

user.post(`${BASE_URL}/signup`,  signUpValidator, signUp);
user.post(`${BASE_URL}/signin`,  signInValidator, signIn);

export default user;
