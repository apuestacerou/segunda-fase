import { Product, CreateProductRequest, UpdateProductRequest } from '../types';
export declare class ProductRepository {
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product | null>;
    create(productData: CreateProductRequest): Promise<Product>;
    update(id: number, productData: UpdateProductRequest): Promise<Product | null>;
    updateStock(id: number, newStock: number): Promise<Product | null>;
    delete(id: number): Promise<boolean>;
    findByIds(ids: number[]): Promise<Product[]>;
}
