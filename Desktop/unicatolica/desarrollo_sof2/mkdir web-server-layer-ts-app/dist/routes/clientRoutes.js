"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRoutes = void 0;
const express_1 = require("express");
const ClientController_1 = require("../controllers/ClientController");
const router = (0, express_1.Router)();
exports.clientRoutes = router;
const clientController = new ClientController_1.ClientController();
// GET /clients - Obtener todos los clientes
router.get('/', (req, res) => clientController.getAllClients(req, res));
// GET /clients/:id - Obtener cliente por ID
router.get('/:id', (req, res) => clientController.getClientById(req, res));
// POST /clients - Crear nuevo cliente
router.post('/', (req, res) => clientController.createClient(req, res));
// PUT /clients/:id - Actualizar cliente
router.put('/:id', (req, res) => clientController.updateClient(req, res));
// DELETE /clients/:id - Eliminar cliente
router.delete('/:id', (req, res) => clientController.deleteClient(req, res));
