import express from 'express';
import Users from '../controller/user';
import middlewares from '../middlewares';

const BASE_URL = '/api/users'
const { signUp, signIn, verifyUser} = Users;
const { UserValidator: {signUpValidator, signInValidator}, verifyToken } = middlewares;

const user = express.Router();

user.post(`${BASE_URL}/signup`,  signUpValidator, signUp);
user.post(`${BASE_URL}/signin`,  signInValidator, signIn);

// Route to verify a user
user.get(`${BASE_URL}/verify`, verifyToken, verifyUser);

export default user;
