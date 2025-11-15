import { Product, CreateProductRequest, UpdateProductRequest } from '../types';
export declare class ProductService {
    private productRepository;
    constructor();
    getAllProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product | null>;
    createProduct(productData: CreateProductRequest): Promise<Product>;
    updateProduct(id: number, productData: UpdateProductRequest): Promise<Product | null>;
    updateProductStock(id: number, newStock: number): Promise<Product | null>;
    deleteProduct(id: number): Promise<boolean>;
    getProductsByIds(ids: number[]): Promise<Product[]>;
}
