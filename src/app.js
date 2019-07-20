import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import routers from './routers';
import { expressWinston } from './config/logger';

const { APP_NAME } = process.env;

const app = express();

app.use(cors(), expressWinston(), helmet(), compression(), bodyParser.json());

app.get('/', (_, res) => res.json({ message: `Welcome to the ${APP_NAME} API` }));

app.use('/denuncias', routers);

export default app;
