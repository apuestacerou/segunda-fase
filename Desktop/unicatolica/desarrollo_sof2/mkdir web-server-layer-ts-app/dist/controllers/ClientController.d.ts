import { Request, Response } from 'express';
export declare class ClientController {
    private clientService;
    constructor();
    getAllClients(req: Request, res: Response): Promise<void>;
    getClientById(req: Request, res: Response): Promise<void>;
    createClient(req: Request, res: Response): Promise<void>;
    updateClient(req: Request, res: Response): Promise<void>;
    deleteClient(req: Request, res: Response): Promise<void>;
}
