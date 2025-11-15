import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { SaleProductModel } from './SaleProductModel';

@Table({
  tableName: 'productos',
  timestamps: true,
  createdAt: 'created_at',
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
  name!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

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
  created_at!: Date;

  @HasMany(() => SaleProductModel)
  ventas_productos!: SaleProductModel[];
}