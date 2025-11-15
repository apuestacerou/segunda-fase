import { Model } from 'sequelize-typescript';
import { ClientModel } from './ClientModel';
import { SaleProductModel } from './SaleProductModel';
export declare class SaleModel extends Model {
    id: number;
    cliente_id: number;
    total: number;
    fecha_venta: Date;
    cliente: ClientModel;
    productos: SaleProductModel[];
}
