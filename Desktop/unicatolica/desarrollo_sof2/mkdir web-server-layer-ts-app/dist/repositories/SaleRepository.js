"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const SaleModel_1 = require("../models/SaleModel");
const SaleProductModel_1 = require("../models/SaleProductModel");
class SaleRepository {
    async findAll() {
        const sales = await SaleModel_1.SaleModel.findAll({
            include: [
                {
                    model: SaleProductModel_1.SaleProductModel,
                    as: 'productos',
                },
            ],
            order: [['fecha_venta', 'DESC']],
        });
        return sales.map(sale => ({
            id: sale.id,
            cliente_id: sale.cliente_id,
            total: sale.total,
            fecha_venta: sale.fecha_venta,
            productos: sale.productos?.map(sp => ({
                producto_id: sp.producto_id,
                cantidad: sp.cantidad,
                precio_unitario: sp.precio_unitario,
            })) || [],
        }));
    }
    async findById(id) {
        const sale = await SaleModel_1.SaleModel.findByPk(id, {
            include: [
                {
                    model: SaleProductModel_1.SaleProductModel,
                    as: 'productos',
                },
            ],
        });
        if (!sale)
            return null;
        return {
            id: sale.id,
            cliente_id: sale.cliente_id,
            total: sale.total,
            fecha_venta: sale.fecha_venta,
            productos: sale.productos?.map(sp => ({
                producto_id: sp.producto_id,
                cantidad: sp.cantidad,
                precio_unitario: sp.precio_unitario,
            })) || [],
        };
    }
    async create(saleData, transaction) {
        const t = transaction || (await database_1.default.transaction());
        try {
            // Crear la venta
            const sale = await SaleModel_1.SaleModel.create({
                cliente_id: saleData.cliente_id,
                total: 0, // Se calculará después
            }, { transaction: t });
            // Crear los productos de la venta
            const saleProducts = saleData.productos.map(producto => ({
                venta_id: sale.id,
                producto_id: producto.producto_id,
                cantidad: producto.cantidad,
                precio_unitario: 0, // Se obtendrá del producto
            }));
            await SaleProductModel_1.SaleProductModel.bulkCreate(saleProducts, { transaction: t });
            if (!transaction) {
                await t.commit();
            }
            // Retornar la venta completa
            return this.findById(sale.id);
        }
        catch (error) {
            if (!transaction) {
                await t.rollback();
            }
            throw error;
        }
    }
    async updateTotal(id, total, transaction) {
        const [affectedRows] = await SaleModel_1.SaleModel.update({ total }, { where: { id }, transaction });
        return affectedRows > 0;
    }
    async delete(id) {
        const deletedRows = await SaleModel_1.SaleModel.destroy({
            where: { id },
        });
        return deletedRows > 0;
    }
    async findByClientId(clienteId) {
        const sales = await SaleModel_1.SaleModel.findAll({
            where: { cliente_id: clienteId },
            include: [
                {
                    model: SaleProductModel_1.SaleProductModel,
                    as: 'productos',
                },
            ],
            order: [['fecha_venta', 'DESC']],
        });
        return sales.map(sale => ({
            id: sale.id,
            cliente_id: sale.cliente_id,
            total: sale.total,
            fecha_venta: sale.fecha_venta,
            productos: sale.productos?.map(sp => ({
                producto_id: sp.producto_id,
                cantidad: sp.cantidad,
                precio_unitario: sp.precio_unitario,
            })) || [],
        }));
    }
}
exports.SaleRepository = SaleRepository;
