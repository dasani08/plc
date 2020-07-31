import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Order } from './schema/order.schema';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(orderDto: any): Promise<any> {
    const createdOrder = new this.orderModel(orderDto);
    return await createdOrder.save();
  }
}
