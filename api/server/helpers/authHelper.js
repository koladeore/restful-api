import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

const secret = process.env.SECRET_KEY;

config();

const generateToken = (payload) => {
  const token = jwt.sign({ ...payload }, secret, { expiresIn: '7 days' });
  return token;
};

export default generateToken;
