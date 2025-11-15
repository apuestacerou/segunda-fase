import { Model } from 'sequelize-typescript';
import { SaleProductModel } from './SaleProductModel';
export declare class ProductModel extends Model {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    fecha_creacion: Date;
    ventas_productos: SaleProductModel[];
}
