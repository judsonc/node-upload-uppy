import Sequelize from 'sequelize';
import * as enviroments from './constants';

const {
  NODE_ENV, POSTGRES_LOG,
} = process.env;

const env = enviroments[NODE_ENV];
if (!env) throw new Error('File .env not found.');

export const sequelize = new Sequelize(env.database, env.username, env.password, {
  dialect: env.dialect,
  host: env.host,
  port: env.port,
  // eslint-disable-next-line no-console
  logging: !!POSTGRES_LOG && console.log,
  pool: {
    max: 5, min: 0, acquire: 30000, idle: 10000,
  },
});

function initDB() {
  return sequelize.authenticate();
}

export default initDB;
