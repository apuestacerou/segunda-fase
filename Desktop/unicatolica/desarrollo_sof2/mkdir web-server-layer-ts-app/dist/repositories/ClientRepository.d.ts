import { Client, CreateClientRequest, UpdateClientRequest } from '../types';
export declare class ClientRepository {
    findAll(): Promise<Client[]>;
    findById(id: number): Promise<Client | null>;
    findByEmail(email: string): Promise<Client | null>;
    create(clientData: CreateClientRequest): Promise<Client>;
    update(id: number, clientData: UpdateClientRequest): Promise<Client | null>;
    delete(id: number): Promise<boolean>;
}
