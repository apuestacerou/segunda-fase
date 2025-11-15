"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const ClientService_1 = require("../services/ClientService");
class ClientController {
    constructor() {
        this.clientService = new ClientService_1.ClientService();
    }
    async getAllClients(req, res) {
        try {
            const clients = await this.clientService.getAllClients();
            const response = {
                success: true,
                data: clients,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener clientes',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async getClientById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const client = await this.clientService.getClientById(id);
            if (!client) {
                const response = {
                    success: false,
                    message: 'Cliente no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                data: client,
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al obtener cliente',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
    async createClient(req, res) {
        try {
            const clientData = req.body;
            const client = await this.clientService.createClient(clientData);
            const response = {
                success: true,
                data: client,
                message: 'Cliente creado exitosamente',
            };
            res.status(201).json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al crear cliente',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(400).json(response);
        }
    }
    async updateClient(req, res) {
        try {
            const id = parseInt(req.params.id);
            const clientData = req.body;
            const client = await this.clientService.updateClient(id, clientData);
            if (!client) {
                const response = {
                    success: false,
                    message: 'Cliente no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                data: client,
                message: 'Cliente actualizado exitosamente',
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al actualizar cliente',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(400).json(response);
        }
    }
    async deleteClient(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await this.clientService.deleteClient(id);
            if (!deleted) {
                const response = {
                    success: false,
                    message: 'Cliente no encontrado',
                };
                res.status(404).json(response);
                return;
            }
            const response = {
                success: true,
                message: 'Cliente eliminado exitosamente',
            };
            res.json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: 'Error al eliminar cliente',
                error: error instanceof Error ? error.message : 'Error desconocido',
            };
            res.status(500).json(response);
        }
    }
}
exports.ClientController = ClientController;
