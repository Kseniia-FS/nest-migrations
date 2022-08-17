/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ) {}

  async getCustomers():Promise<Customer[]>{
    return await this.customerModel.findAll()
  }

  async createCustomer(customer:Customer):Promise<Customer>{
    return await this.customerModel.create({
        firstName: customer.firstName,
        lastName:customer.lastName,
        id: customer.id
    })
  }
}
