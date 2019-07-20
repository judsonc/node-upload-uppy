import { readdirSync } from 'fs';
import Sequelize from 'sequelize';
import { basename, join } from 'path';
import { sequelize } from '../config/database';

const models = { Sequelize };

readdirSync(__dirname)
  .filter(file => file !== basename(__filename) && file.endsWith('.js'))
  .forEach((file) => {
    const model = sequelize.import(join(__dirname, file));
    Object.assign(models, { [model.name]: model });
  });

Object.keys(models).forEach(name => models[name].associate && models[name].associate(models));

export default models;
