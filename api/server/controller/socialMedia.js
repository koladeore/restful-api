import dotenv from 'dotenv';
import models from '../database/models';
import authHelper from '../helpers/authHelper';
const SocialPassword = process.env.SocialPassword;

dotenv.config();

const { User } = models;
const socialController = async (req,res) => {
    console.log(req);
    // const { user } = req;
    // const userData = {
    //     socialId: user.socialId,
    //     name: user.name,
    //     username: user.username,
    //     email: user.email,
    //     verified: user.verified,
    //     password: SocialPassword
    // };
    // try {
    //     let dbUser = await User.findOne ({
    //         where: { socialId: user.socialId }
    //     });
    //     if (!dbUser) {
    //         dbUser = await User.create(userData);
    //     }
    //     const payload = {
    //         socialId: dbUser.socialId,
    //         name: dbUser.name,
    //         username: dbUser.username,
    //         email: dbUser.email,
    //         verified: dbUser.verified,
    //         token: authHelper.generateToken({socialId: dbUser.socialId})
    //     }
    //     const token = authHelper.generateToken(payload);
    //     return res.send(`${req.user}?token=${token}`);
    // } catch (e) {
    //     return res.redirect('/');
    // }
};

export default socialController;
