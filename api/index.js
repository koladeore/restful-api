import express from 'express';
import passport from 'passport';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import cookiesSession from 'cookie-session';
import dotenv from 'dotenv';
import debug from 'debug';
import router from './server/routes/index';
import passportService from './server/Services/passport';

const log = debug('dev');
const app = express();

passportService();
dotenv.config();
app.use(cookiesSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [process.env.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router);
app.use(logger('dev'));
const { PORT } = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
const API_VERSION = '/api/v1';
app.use(`${API_VERSION}`, router);


app.get('/', (req, res) => {
  res.status(200).send('The api is working');
});

const documentation = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));
documentation.servers[0].url = process.env.SERVER_URL;

// setup swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));

app.listen(PORT, () => log(`App listening on port ${PORT}!`));

export default app;
