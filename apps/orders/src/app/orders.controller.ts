import { Body, Controller, Get, Post } from '@nestjs/common';

import { OrdersService } from './orders.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Order } from './schemas/order.schema';
import { CreateOrderRequest } from './dto/create-order.request';

@ApiTags(Order.name)
@Controller({ path: 'orders', version: '1' })
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Create order' })
  @Post()
  async createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    return await this.ordersService.createOrder(createOrderRequest);
  }

  @ApiOperation({ summary: 'Get all orders' })
  @Get()
  async getOrders() {
    return await this.ordersService.getOrders();
  }
}
