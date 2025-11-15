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
exports.SaleProductModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const SaleModel_1 = require("./SaleModel");
const ProductModel_1 = require("./ProductModel");
let SaleProductModel = class SaleProductModel extends sequelize_typescript_1.Model {
};
exports.SaleProductModel = SaleProductModel;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SaleModel_1.SaleModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SaleProductModel.prototype, "venta_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => ProductModel_1.ProductModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SaleProductModel.prototype, "producto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SaleProductModel.prototype, "cantidad", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 2),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SaleProductModel.prototype, "precio_unitario", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SaleModel_1.SaleModel),
    __metadata("design:type", SaleModel_1.SaleModel)
], SaleProductModel.prototype, "venta", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ProductModel_1.ProductModel),
    __metadata("design:type", ProductModel_1.ProductModel)
], SaleProductModel.prototype, "producto", void 0);
exports.SaleProductModel = SaleProductModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'venta_productos',
        timestamps: false,
    })
], SaleProductModel);
