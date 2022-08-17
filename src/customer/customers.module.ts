/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { CustomerResolver } from './customer.resolver';


@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  controllers:[CustomerController],
  providers:[CustomerService, CustomerResolver]
})
export class CustomersModule {}
