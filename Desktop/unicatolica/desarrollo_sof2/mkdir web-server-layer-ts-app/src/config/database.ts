import { Sequelize } from 'sequelize-typescript';
import { ClientModel } from '../models/ClientModel';
import { ProductModel } from '../models/ProductModel';
import { SaleModel } from '../models/SaleModel';
import { SaleProductModel } from '../models/SaleProductModel';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
  pool: {
    max: 1,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  models: [ClientModel, ProductModel, SaleModel, SaleProductModel],
});

export default sequelize;