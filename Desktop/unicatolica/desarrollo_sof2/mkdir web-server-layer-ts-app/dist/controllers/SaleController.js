"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleController = void 0;
const SaleService_1 = require("../services/SaleService");
class SaleController {
    constructor() {
        this.saleService = new SaleService_1.SaleService();
    }
    async getAllSales(req, res) {
        try {
            const sales = await this.saleService.getAllSales();
            const response = {
                success: true,
                data: sales,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener ventas',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async getSaleById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const sale = await this.saleService.getSaleById(id);
            if (!sale) {
                const response = {
                    success: false,
                    message: 'Venta no encontrada',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                data: sale,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener venta',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async getSalesByClientId(req, res) {
        try {
            const clienteId = parseInt(req.params.clienteId);
            const sales = await this.saleService.getSalesByClientId(clienteId);
            const response = {
                success: true,
                data: sales,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener ventas del cliente',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async createSale(req, res) {
        try {
            const saleData = req.body;
            const sale = await this.saleService.createSale(saleData);
            const response = {
                success: true,
                data: sale,
                message: 'Venta creada exitosamente',
            };
            res.status(201).json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al crear venta',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(400).json(response);
        }
    }
    async deleteSale(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await this.saleService.deleteSale(id);
            if (!deleted) {
                const response = {
                    success: false,
                    message: 'Venta no encontrada',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                message: 'Venta eliminada exitosamente',
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al eliminar venta',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
}
exports.SaleController = SaleController;
