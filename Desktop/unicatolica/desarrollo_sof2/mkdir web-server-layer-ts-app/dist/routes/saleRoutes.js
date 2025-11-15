"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleRoutes = void 0;
const express_1 = require("express");
const SaleController_1 = require("../controllers/SaleController");
const router = (0, express_1.Router)();
exports.saleRoutes = router;
const saleController = new SaleController_1.SaleController();
// GET /sales - Obtener todas las ventas
router.get('/', (req, res) => saleController.getAllSales(req, res));
// GET /sales/:id - Obtener venta por ID
router.get('/:id', (req, res) => saleController.getSaleById(req, res));
// GET /sales/client/:clienteId - Obtener ventas por cliente
router.get('/client/:clienteId', (req, res) => saleController.getSalesByClientId(req, res));
// POST /sales - Crear nueva venta
router.post('/', (req, res) => saleController.createSale(req, res));
// DELETE /sales/:id - Eliminar venta
router.delete('/:id', (req, res) => saleController.deleteSale(req, res));
