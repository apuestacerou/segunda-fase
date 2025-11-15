import { Sale, CreateSaleRequest } from '../types';
export declare class SaleService {
    private saleRepository;
    private productRepository;
    private clientRepository;
    constructor();
    getAllSales(): Promise<Sale[]>;
    getSaleById(id: number): Promise<Sale | null>;
    getSalesByClientId(clienteId: number): Promise<Sale[]>;
    createSale(saleData: CreateSaleRequest): Promise<Sale>;
    deleteSale(id: number): Promise<boolean>;
}
