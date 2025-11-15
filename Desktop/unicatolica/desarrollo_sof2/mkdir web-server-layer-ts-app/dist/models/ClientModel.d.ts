import { Model } from 'sequelize-typescript';
import { SaleModel } from './SaleModel';
export declare class ClientModel extends Model {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    fecha_creacion: Date;
    ventas: SaleModel[];
}
