import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { ClientModel } from './ClientModel';
import { SaleProductModel } from './SaleProductModel';

@Table({
  tableName: 'ventas',
  timestamps: true,
  createdAt: 'fecha_venta',
  updatedAt: false,
})
export class SaleModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => ClientModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cliente_id!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  total!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  fecha_venta!: Date;

  @BelongsTo(() => ClientModel)
  cliente!: ClientModel;

  @HasMany(() => SaleProductModel)
  productos!: SaleProductModel[];
}