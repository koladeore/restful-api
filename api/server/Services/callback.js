const callback = (accessToken, refreshToken, profile, done) => {
  const { id, provider } = profile;
  const user = { socialId: id, type: provider };

  if (provider === 'google') {
    const {
      name, given_name: username, email, email_verified: verified
    } = profile._json;
    user.name = name;
    user.username = username;
    user.email = email;
    user.verified = verified;
  }
  return done(null, user);
};

export default callback;
