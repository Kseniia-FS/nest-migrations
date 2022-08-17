/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}
  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return await this.customerService.getCustomers();
  }

  @Post()
  async createCustomer(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.createCustomer(customer);
  }
}
