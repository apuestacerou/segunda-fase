import { Router } from 'express';
import { clientRoutes } from './clientRoutes';
import { productRoutes } from './productRoutes';
import { saleRoutes } from './saleRoutes';

const router = Router();

// Rutas de la API
router.use('/clients', clientRoutes);
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);

// Ruta de health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Sales Management API',
  });
});

export default router;