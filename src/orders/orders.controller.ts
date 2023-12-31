import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() body: any) {
    console.log(body);
    return this.ordersService.createOrder(body);
  }

  @Get()
  getOrder(@Body() body: any) {
    console.log(body.orderId);
    return this.ordersService.getOrder(body);
  }
}
