import { Request, Response } from 'express';
export declare class SaleController {
    private saleService;
    constructor();
    getAllSales(req: Request, res: Response): Promise<void>;
    getSaleById(req: Request, res: Response): Promise<void>;
    getSalesByClientId(req: Request, res: Response): Promise<void>;
    createSale(req: Request, res: Response): Promise<void>;
    deleteSale(req: Request, res: Response): Promise<void>;
}
