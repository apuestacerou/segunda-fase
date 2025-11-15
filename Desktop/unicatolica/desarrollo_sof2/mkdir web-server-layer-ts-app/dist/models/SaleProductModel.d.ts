import { Model } from 'sequelize-typescript';
import { SaleModel } from './SaleModel';
import { ProductModel } from './ProductModel';
export declare class SaleProductModel extends Model {
    venta_id: number;
    producto_id: number;
    cantidad: number;
    precio_unitario: number;
    venta: SaleModel;
    producto: ProductModel;
}
