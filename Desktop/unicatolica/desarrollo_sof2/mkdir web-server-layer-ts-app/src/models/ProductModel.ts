import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { SaleProductModel } from './SaleProductModel';

@Table({
  tableName: 'productos',
  timestamps: true,
  createdAt: 'fecha_creacion',
  updatedAt: false,
})
export class ProductModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  precio!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  stock!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  fecha_creacion!: Date;

  @HasMany(() => SaleProductModel)
  ventas_productos!: SaleProductModel[];
}