import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import models from '../database/models';

const { User } = models;

dotenv.config();
const passportService = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      });
  });

  const Googlekey = { clientID: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET, callbackURL: '/auth/google/callback' };
  passport.use(new Strategy(Googlekey, (accessToken, refreshToken, profile, done) => {
    User.findOne({ where: { socialId: profile.id } })
      .then((existingUser) => {
        console.log(existingUser);
        if (existingUser) {
          // we already have ur record
          done(null, existingUser);
        } else {
          // we don't have your record make another one
          const {
            id, displayName, name: { givenName }, emails: [googleEmail]
          } = profile;
          User.create({
            socialId: id, name: displayName, username: givenName, email: googleEmail.value, verified: googleEmail.verified, password: ''
          })
            .then((user) => done(null, user));
        }
      });
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
  }));
};

export default passportService;
