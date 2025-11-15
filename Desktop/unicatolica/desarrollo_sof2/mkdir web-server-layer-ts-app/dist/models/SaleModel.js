"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ClientModel_1 = require("./ClientModel");
const SaleProductModel_1 = require("./SaleProductModel");
let SaleModel = class SaleModel extends sequelize_typescript_1.Model {
};
exports.SaleModel = SaleModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], SaleModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ClientModel_1.ClientModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SaleModel.prototype, "cliente_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SaleModel.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    __metadata("design:type", Date)
], SaleModel.prototype, "fecha_venta", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ClientModel_1.ClientModel),
    __metadata("design:type", ClientModel_1.ClientModel)
], SaleModel.prototype, "cliente", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => SaleProductModel_1.SaleProductModel),
    __metadata("design:type", Array)
], SaleModel.prototype, "productos", void 0);
exports.SaleModel = SaleModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'ventas',
        timestamps: true,
        createdAt: 'fecha_venta',
        updatedAt: false,
    })
], SaleModel);
