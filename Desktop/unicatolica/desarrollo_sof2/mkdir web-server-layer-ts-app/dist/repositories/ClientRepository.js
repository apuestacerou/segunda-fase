"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const ClientModel_1 = require("../models/ClientModel");
class ClientRepository {
    async findAll() {
        const clients = await ClientModel_1.ClientModel.findAll({
            order: [['fecha_creacion', 'DESC']],
        });
        return clients.map(client => client.toJSON());
    }
    async findById(id) {
        const client = await ClientModel_1.ClientModel.findByPk(id);
        return client ? client.toJSON() : null;
    }
    async findByEmail(email) {
        const client = await ClientModel_1.ClientModel.findOne({
            where: { email },
        });
        return client ? client.toJSON() : null;
    }
    async create(clientData) {
        const client = await ClientModel_1.ClientModel.create(clientData);
        return client.toJSON();
    }
    async update(id, clientData) {
        const [affectedRows] = await ClientModel_1.ClientModel.update(clientData, {
            where: { id },
        });
        if (affectedRows === 0) {
            return null;
        }
        return this.findById(id);
    }
    async delete(id) {
        const deletedRows = await ClientModel_1.ClientModel.destroy({
            where: { id },
        });
        return deletedRows > 0;
    }
}
exports.ClientRepository = ClientRepository;
