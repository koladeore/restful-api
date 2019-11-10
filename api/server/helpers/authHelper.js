import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const generateToken = (payload) => {
    const token = jwt.sign({...payload}, secret, { expiresIn: '7 days' });
    return token;
};

export default generateToken;
