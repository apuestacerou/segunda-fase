"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const ProductModel_1 = require("../models/ProductModel");
class ProductRepository {
    async findAll() {
        const products = await ProductModel_1.ProductModel.findAll({
            order: [['fecha_creacion', 'DESC']],
        });
        return products.map(product => product.toJSON());
    }
    async findById(id) {
        const product = await ProductModel_1.ProductModel.findByPk(id);
        return product ? product.toJSON() : null;
    }
    async create(productData) {
        const product = await ProductModel_1.ProductModel.create(productData);
        return product.toJSON();
    }
    async update(id, productData) {
        const [affectedRows] = await ProductModel_1.ProductModel.update(productData, {
            where: { id },
        });
        if (affectedRows === 0) {
            return null;
        }
        return this.findById(id);
    }
    async updateStock(id, newStock) {
        const [affectedRows] = await ProductModel_1.ProductModel.update({ stock: newStock }, { where: { id } });
        if (affectedRows === 0) {
            return null;
        }
        return this.findById(id);
    }
    async delete(id) {
        const deletedRows = await ProductModel_1.ProductModel.destroy({
            where: { id },
        });
        return deletedRows > 0;
    }
    async findByIds(ids) {
        const products = await ProductModel_1.ProductModel.findAll({
            where: {
                id: ids,
            },
        });
        return products.map(product => product.toJSON());
    }
}
exports.ProductRepository = ProductRepository;
