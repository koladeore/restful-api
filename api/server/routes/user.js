import express from 'express';
import Users from '../controller/user';

const BASE_URL = '/api/users'

const user = express.Router();

user.post(`${BASE_URL}`, Users.signUp);

export default user;
