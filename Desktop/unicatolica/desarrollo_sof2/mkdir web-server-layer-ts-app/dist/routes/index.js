"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientRoutes_1 = require("./clientRoutes");
const productRoutes_1 = require("./productRoutes");
const saleRoutes_1 = require("./saleRoutes");
const router = (0, express_1.Router)();
// Rutas de la API
router.use('/clients', clientRoutes_1.clientRoutes);
router.use('/products', productRoutes_1.productRoutes);
router.use('/sales', saleRoutes_1.saleRoutes);
// Ruta de health check
router.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'Sales Management API',
    });
});
exports.default = router;
