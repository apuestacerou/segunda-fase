import { Client, CreateClientRequest, UpdateClientRequest } from '../types';
export declare class ClientService {
    private clientRepository;
    constructor();
    getAllClients(): Promise<Client[]>;
    getClientById(id: number): Promise<Client | null>;
    createClient(clientData: CreateClientRequest): Promise<Client>;
    updateClient(id: number, clientData: UpdateClientRequest): Promise<Client | null>;
    deleteClient(id: number): Promise<boolean>;
}
