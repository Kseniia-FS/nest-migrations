/* eslint-disable prettier/prettier */
import { Column, PrimaryKey, Model, Table } from 'sequelize-typescript';

@Table
export class Customer extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;
}
