"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const ClientModel_1 = require("../models/ClientModel");
const ProductModel_1 = require("../models/ProductModel");
const SaleModel_1 = require("../models/SaleModel");
const SaleProductModel_1 = require("../models/SaleProductModel");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
    models: [ClientModel_1.ClientModel, ProductModel_1.ProductModel, SaleModel_1.SaleModel, SaleProductModel_1.SaleProductModel],
});
exports.default = sequelize;
