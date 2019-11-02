const callback = (req, res) => {
  res.send(req.user);
};
const currentUser = (req, res) => {
  res.send(req.user);
};

const logoutUser = (req, res) => {
  req.logout();
  res.redirect('/');
};
export default {
  currentUser,
  callback,
  logoutUser
};
