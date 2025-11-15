"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
class ProductController {
    constructor() {
        this.productService = new ProductService_1.ProductService();
    }
    async getAllProducts(req, res) {
        try {
            const products = await this.productService.getAllProducts();
            const response = {
                success: true,
                data: products,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener productos',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async getProductById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const product = await this.productService.getProductById(id);
            if (!product) {
                const response = {
                    success: false,
                    message: 'Producto no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                data: product,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener producto',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async createProduct(req, res) {
        try {
            const productData = req.body;
            const product = await this.productService.createProduct(productData);
            const response = {
                success: true,
                data: product,
                message: 'Producto creado exitosamente',
            };
            res.status(201).json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al crear producto',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(400).json(response);
        }
    }
    async updateProduct(req, res) {
        try {
            const id = parseInt(req.params.id);
            const productData = req.body;
            const product = await this.productService.updateProduct(id, productData);
            if (!product) {
                const response = {
                    success: false,
                    message: 'Producto no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                data: product,
                message: 'Producto actualizado exitosamente',
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al actualizar producto',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(400).json(response);
        }
    }
    async updateProductStock(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { stock } = req.body;
            if (stock === undefined || stock < 0) {
                const response = {
                    success: false,
                    message: 'Stock inválido',
                };
                res.status(400).json(response);
                return;
            }
            const product = await this.productService.updateProductStock(id, stock);
            if (!product) {
                const response = {
                    success: false,
                    message: 'Producto no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                data: product,
                message: 'Stock actualizado exitosamente',
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al actualizar stock',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async deleteProduct(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await this.productService.deleteProduct(id);
            if (!deleted) {
                const response = {
                    success: false,
                    message: 'Producto no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                message: 'Producto eliminado exitosamente',
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al eliminar producto',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
}
exports.ProductController = ProductController;
