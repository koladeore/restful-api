import express from 'express';
import passport from 'passport';
import userController from '../controller/user';
import middlewares from '../middlewares';
// import socialController from '../controller/social';
import socialController from '../controller/socialMedia';

const BASE_URL = '/api/users';
const { signUp, signIn, verifyUser } = userController;
// const { callback, logoutUser, currentUser } = socialController;
const { UserValidator: { signUpValidator, signInValidator }, verifyToken } = middlewares;
const user = express.Router();

user.post(`${BASE_URL}/signup`, signUpValidator, signUp);
user.post(`${BASE_URL}/signin`, signInValidator, signIn);
// user.get('/api/logout', logoutUser);

user.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));
// user.get('/auth/google/callback', passport.authenticate('google'), callback);
user.get('/auth/google/callback', passport.authenticate('google', { session: false }), socialController);
// user.get('/api/current_user', currentUser);

// Route to verify a user
user.get(`${BASE_URL}/verify`, verifyToken, verifyUser);

export default user;
