import { Transaction } from 'sequelize';
import { Sale, CreateSaleRequest } from '../types';
export declare class SaleRepository {
    findAll(): Promise<Sale[]>;
    findById(id: number): Promise<Sale | null>;
    create(saleData: CreateSaleRequest, transaction?: Transaction): Promise<Sale>;
    updateTotal(id: number, total: number, transaction?: Transaction): Promise<boolean>;
    delete(id: number): Promise<boolean>;
    findByClientId(clienteId: number): Promise<Sale[]>;
}
