import { Sequelize } from 'sequelize-typescript';
import { ClientModel } from '../models/ClientModel';
import { ProductModel } from '../models/ProductModel';
import { SaleModel } from '../models/SaleModel';
import { SaleProductModel } from '../models/SaleProductModel';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
  models: [ClientModel, ProductModel, SaleModel, SaleProductModel],
});

export default sequelize;