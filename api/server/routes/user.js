import express from 'express';
import passport from 'passport';
import Users from '../controller/user';
import middlewares from '../middlewares';
// import strategy from '../services/strategy';


const BASE_URL = '/api/users';
const { signUp, signIn, verifyUser } = Users;
const { UserValidator: { signUpValidator, signInValidator }, verifyToken } = middlewares;
// const { authenticateUser, callback, logoutUser } = strategy;
const user = express.Router();

user.post(`${BASE_URL}/signup`, signUpValidator, signUp);
user.post(`${BASE_URL}/signin`, signInValidator, signIn);
// user.get('/auth/google', authenticateUser);
// user.get('/auth/google/callback', callback);
// user.get('/api/logout', logoutUser);

user.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
user.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
});
user.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
user.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

// Route to verify a user
user.get(`${BASE_URL}/verify`, verifyToken, verifyUser);

export default user;
