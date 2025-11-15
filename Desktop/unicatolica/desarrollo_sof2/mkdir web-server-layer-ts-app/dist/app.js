"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Rutas
app.use('/api', routes_1.default);
// Middleware de error
app.use(errorHandler_1.notFoundHandler);
app.use(errorHandler_1.errorHandler);
// Inicializar base de datos y servidor
const startServer = async () => {
    try {
        // Sincronizar modelos con la base de datos
        await database_1.default.sync({ force: false });
        console.log('Base de datos sincronizada correctamente');
        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
            console.log(`API disponible en http://localhost:${PORT}/api`);
        });
    }
    catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};
startServer();
exports.default = app;
