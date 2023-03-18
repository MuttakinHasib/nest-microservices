import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {
  ConfigurationModule,
  DatabaseModule,
} from '@nest-microservices/common';
import { OrdersRepository } from './orders.repository';

import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersController, OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
