
import initDB from './config/database';
import logger from './config/logger';
import app from './app';

const { PORT } = process.env;

initDB().then(() => app.listen(PORT, () => logger.info(`Listening on port: ${PORT}!`)));
