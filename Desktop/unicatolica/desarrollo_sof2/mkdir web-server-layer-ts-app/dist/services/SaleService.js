"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
const database_1 = __importDefault(require("../config/database"));
const SaleRepository_1 = require("../repositories/SaleRepository");
const ProductRepository_1 = require("../repositories/ProductRepository");
const ClientRepository_1 = require("../repositories/ClientRepository");
class SaleService {
    constructor() {
        this.saleRepository = new SaleRepository_1.SaleRepository();
        this.productRepository = new ProductRepository_1.ProductRepository();
        this.clientRepository = new ClientRepository_1.ClientRepository();
    }
    async getAllSales() {
        return this.saleRepository.findAll();
    }
    async getSaleById(id) {
        if (!id || id <= 0) {
            throw new Error('ID de venta inválido');
        }
        return this.saleRepository.findById(id);
    }
    async getSalesByClientId(clienteId) {
        if (!clienteId || clienteId <= 0) {
            throw new Error('ID de cliente inválido');
        }
        return this.saleRepository.findByClientId(clienteId);
    }
    async createSale(saleData) {
        // Validaciones de negocio
        if (!saleData.cliente_id || saleData.cliente_id <= 0) {
            throw new Error('ID de cliente inválido');
        }
        if (!saleData.productos || saleData.productos.length === 0) {
            throw new Error('La venta debe incluir al menos un producto');
        }
        // Verificar que el cliente existe
        const client = await this.clientRepository.findById(saleData.cliente_id);
        if (!client) {
            throw new Error('Cliente no encontrado');
        }
        // Obtener productos y verificar stock
        const productIds = saleData.productos.map(p => p.producto_id);
        const products = await this.productRepository.findByIds(productIds);
        if (products.length !== productIds.length) {
            throw new Error('Uno o más productos no existen');
        }
        // Crear mapa de productos para fácil acceso
        const productMap = new Map();
        products.forEach(product => productMap.set(product.id, product));
        // Validar stock y calcular total
        let total = 0;
        for (const saleProduct of saleData.productos) {
            const product = productMap.get(saleProduct.producto_id);
            if (!product) {
                throw new Error(`Producto con ID ${saleProduct.producto_id} no encontrado`);
            }
            if (saleProduct.cantidad <= 0) {
                throw new Error(`Cantidad inválida para producto ${product.nombre}`);
            }
            if (product.stock < saleProduct.cantidad) {
                throw new Error(`Stock insuficiente para producto ${product.nombre}. Disponible: ${product.stock}`);
            }
            total += product.precio * saleProduct.cantidad;
        }
        // Usar transacción para asegurar atomicidad
        const transaction = await database_1.default.transaction();
        try {
            // Crear la venta
            const sale = await this.saleRepository.create(saleData, transaction);
            // Actualizar precios en los productos de la venta y reducir stock
            for (const saleProduct of saleData.productos) {
                const product = productMap.get(saleProduct.producto_id);
                const newStock = product.stock - saleProduct.cantidad;
                await this.productRepository.updateStock(saleProduct.producto_id, newStock);
            }
            // Actualizar el total de la venta
            await this.saleRepository.updateTotal(sale.id, total, transaction);
            await transaction.commit();
            // Retornar la venta completa
            return this.getSaleById(sale.id);
        }
        catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
    async deleteSale(id) {
        if (!id || id <= 0) {
            throw new Error('ID de venta inválido');
        }
        // Verificar que la venta existe
        const existingSale = await this.saleRepository.findById(id);
        if (!existingSale) {
            throw new Error('Venta no encontrada');
        }
        // Nota: En un sistema real, aquí se debería restaurar el stock de los productos
        // Pero por simplicidad, solo eliminamos la venta
        return this.saleRepository.delete(id);
    }
}
exports.SaleService = SaleService;
