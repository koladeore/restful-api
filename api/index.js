import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './server/routes/index';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const app = express();

dotenv.config();
app.use(logger('dev'));
const { PORT } = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
const API_VERSION = '/api/v1';
app.use(`${API_VERSION}`, router);


app.get('/', (req,res) => {
    res.status(200).send('The api is working');
});

const documentation = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));
documentation.servers[0].url = process.env.SERVER_URL;

// setup swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

export default app;
