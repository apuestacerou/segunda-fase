"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repositories/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
    }
    async getAllProducts() {
        return this.productRepository.findAll();
    }
    async getProductById(id) {
        if (!id || id <= 0) {
            throw new Error('ID de producto inválido');
        }
        return this.productRepository.findById(id);
    }
    async createProduct(productData) {
        // Validaciones de negocio
        if (!productData.nombre?.trim()) {
            throw new Error('El nombre del producto es requerido');
        }
        if (!productData.precio || productData.precio <= 0) {
            throw new Error('El precio del producto debe ser mayor a 0');
        }
        if (productData.stock < 0) {
            throw new Error('El stock del producto no puede ser negativo');
        }
        return this.productRepository.create(productData);
    }
    async updateProduct(id, productData) {
        if (!id || id <= 0) {
            throw new Error('ID de producto inválido');
        }
        // Verificar que el producto existe
        const existingProduct = await this.productRepository.findById(id);
        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }
        // Validaciones de negocio
        if (productData.precio !== undefined && productData.precio <= 0) {
            throw new Error('El precio del producto debe ser mayor a 0');
        }
        if (productData.stock !== undefined && productData.stock < 0) {
            throw new Error('El stock del producto no puede ser negativo');
        }
        return this.productRepository.update(id, productData);
    }
    async updateProductStock(id, newStock) {
        if (!id || id <= 0) {
            throw new Error('ID de producto inválido');
        }
        if (newStock < 0) {
            throw new Error('El stock del producto no puede ser negativo');
        }
        // Verificar que el producto existe
        const existingProduct = await this.productRepository.findById(id);
        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }
        return this.productRepository.updateStock(id, newStock);
    }
    async deleteProduct(id) {
        if (!id || id <= 0) {
            throw new Error('ID de producto inválido');
        }
        // Verificar que el producto existe
        const existingProduct = await this.productRepository.findById(id);
        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }
        return this.productRepository.delete(id);
    }
    async getProductsByIds(ids) {
        if (!ids || ids.length === 0) {
            return [];
        }
        // Validar que todos los IDs sean válidos
        const invalidIds = ids.filter(id => !id || id <= 0);
        if (invalidIds.length > 0) {
            throw new Error('IDs de productos inválidos');
        }
        return this.productRepository.findByIds(ids);
    }
}
exports.ProductService = ProductService;
