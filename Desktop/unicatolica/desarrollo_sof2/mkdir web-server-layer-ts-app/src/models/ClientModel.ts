import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { SaleModel } from './SaleModel';

@Table({
  tableName: 'clientes',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
})
export class ClientModel extends Model {
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
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  phone!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date;

  @HasMany(() => SaleModel)
  ventas!: SaleModel[];
}