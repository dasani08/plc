import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Create new user',
  })
  async create(@Body() createOrderDto) {
    console.log(createOrderDto);
    await this.orderService.create(createOrderDto);
  }
}
