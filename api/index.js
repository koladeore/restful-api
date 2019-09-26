import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './server/routes/index';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const API_VERSION = '/api/v1';
app.use(`${API_VERSION}`, router);
app.use(cors());


app.get('/', (req,res) => {
    res.status(200).send('The api is working');
})

dotenv.config();
app.use(logger('dev'));
const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

export default app;
