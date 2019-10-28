import passport from 'passport';

const authenticateUser = () => {
    passport.authenticate('google',{
    scope: ['profile', 'email']
})}
const callback = () => {
    passport.authenticate('google'),(req,res)=>{
        res.send(req.user);
    }
}
const logoutUser = (req,res) => {
    req.logout();
    res.redirect('/');
}
export default {
    authenticateUser,
    callback,
    logoutUser
}