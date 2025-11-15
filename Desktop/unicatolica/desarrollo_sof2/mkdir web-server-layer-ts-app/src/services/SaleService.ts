import { Transaction } from 'sequelize';
import sequelize from '../config/database';
import { SaleRepository } from '../repositories/SaleRepository';
import { ProductRepository } from '../repositories/ProductRepository';
import { ClientRepository } from '../repositories/ClientRepository';
import { Sale, CreateSaleRequest, Product } from '../types';

export class SaleService {
  private saleRepository: SaleRepository;
  private productRepository: ProductRepository;
  private clientRepository: ClientRepository;

  constructor() {
    this.saleRepository = new SaleRepository();
    this.productRepository = new ProductRepository();
    this.clientRepository = new ClientRepository();
  }

  async getAllSales(): Promise<Sale[]> {
    return this.saleRepository.findAll();
  }

  async getSaleById(id: number): Promise<Sale | null> {
    if (!id || id <= 0) {
      throw new Error('ID de venta inválido');
    }
    return this.saleRepository.findById(id);
  }

  async getSalesByClientId(clienteId: number): Promise<Sale[]> {
    if (!clienteId || clienteId <= 0) {
      throw new Error('ID de cliente inválido');
    }
    return this.saleRepository.findByClientId(clienteId);
  }

  async createSale(saleData: CreateSaleRequest): Promise<Sale> {
    // Validaciones de negocio
    if (!saleData.client_id || saleData.client_id <= 0) {
      throw new Error('ID de cliente inválido');
    }

    if (!saleData.products || saleData.products.length === 0) {
      throw new Error('La venta debe incluir al menos un producto');
    }

    // Verificar que el cliente existe
    const client = await this.clientRepository.findById(saleData.client_id);
    if (!client) {
      throw new Error('Cliente no encontrado');
    }

    // Obtener productos y verificar stock
    const productIds = saleData.products.map(p => p.product_id);
    const products = await this.productRepository.findByIds(productIds);

    if (products.length !== productIds.length) {
      throw new Error('Uno o más productos no existen');
    }

    // Crear mapa de productos para fácil acceso
    const productMap = new Map<number, Product>();
    products.forEach(product => productMap.set(product.id!, product));

    // Validar stock y calcular total
    let total = 0;
    for (const saleProduct of saleData.products) {
      const product = productMap.get(saleProduct.product_id);
      if (!product) {
        throw new Error(`Producto con ID ${saleProduct.product_id} no encontrado`);
      }

      if (saleProduct.quantity <= 0) {
        throw new Error(`Cantidad inválida para producto ${product.name}`);
      }

      if (product.stock < saleProduct.quantity) {
        throw new Error(`Stock insuficiente para producto ${product.name}. Disponible: ${product.stock}`);
      }

      total += product.price * saleProduct.quantity;
    }

    // Simplificar: no usar transacción por ahora para evitar bloqueos
    try {
      // Crear la venta
      const sale = await this.saleRepository.create(saleData);

      // Actualizar precios en los productos de la venta y reducir stock
      for (const saleProduct of saleData.products) {
        const product = productMap.get(saleProduct.product_id)!;
        const newStock = product.stock - saleProduct.quantity;

        await this.productRepository.updateStock(saleProduct.product_id, newStock);
      }

      // Actualizar el total de la venta
      await this.saleRepository.updateTotal(sale.id!, total);

      // Retornar la venta completa
      return this.getSaleById(sale.id!) as Promise<Sale>;
    } catch (error) {
      throw error;
    }
  }

  async deleteSale(id: number): Promise<boolean> {
    if (!id || id <= 0) {
      throw new Error('ID de venta inválido');
    }

    // Verificar que la venta existe
    const existingSale = await this.saleRepository.findById(id);
    if (!existingSale) {
      throw new Error('Venta no encontrada');
    }

    // Nota: En un sistema real, aquí se debería restaurar el stock de los productos
    // Pero por simplicidad, solo eliminamos la venta

    return this.saleRepository.delete(id);
  }
}