/* eslint-disable prettier/prettier */
import { Resolver, Query } from '@nestjs/graphql';
import { Customer } from 'src/common/modelsGQL/customer.model';
import { CustomerService } from './customer.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(readonly customerService: CustomerService) {}

  @Query(() => [Customer])
  async getAllCustomers(): Promise<Customer[]> {
    return await this.customerService.getCustomers();
  }
}
