export interface Client {
  id?: number;
  name: string;
  email: string;
  phone: string;
  created_at?: Date;
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  created_at?: Date;
}

export interface Sale {
  id?: number;
  cliente_id: number;
  total: number;
  fecha_venta?: Date;
  productos: SaleProduct[];
}

export interface SaleProduct {
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
}

export interface CreateClientRequest {
  name: string;
  email: string;
  phone: string;
}

export interface UpdateClientRequest {
  name?: string;
  email?: string;
  phone?: string;
}

export interface CreateProductRequest {
  name: string;
  price: number;
  stock: number;
}

export interface UpdateProductRequest {
  name?: string;
  price?: number;
  stock?: number;
}

export interface CreateSaleRequest {
  client_id: number;
  products: {
    product_id: number;
    quantity: number;
  }[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}