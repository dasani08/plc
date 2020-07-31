import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { BaseSchema, BaseDocument } from 'common/abstract.schema';

import { Contract, Country, Company, Location } from '../dto/OrderDto';

@Schema()
export class Order extends BaseDocument {
  @Prop({ required: true })
  contract: Contract;

  @Prop({ required: true })
  shippingMode: string;

  @Prop({ required: true })
  shippingType: string;

  @Prop({ required: true })
  originCountry: Country;

  @Prop({ required: true })
  carrier: Company;

  @Prop({ required: true })
  shipper: Company;

  @Prop({ required: true })
  shipperLocation: Location;

  @Prop({ required: true })
  customBroker: Company;

  @Prop({ required: true })
  destinationCountry: Country;

  @Prop({ required: true })
  consignee: Company;

  @Prop({ required: true })
  consigneeLocation: Location;

  @Prop({ required: true })
  consigneePhone: string;

  @Prop()
  notifyParty1: Company;

  @Prop()
  notifyParty2: Company;

  @Prop({ required: true })
  orderDate: Date;

  @Prop({ required: true })
  productType: string;

  @Prop({ required: true })
  rateIds: any[];

  @Prop({ required: true })
  moveType: string;

  @Prop({ required: true })
  equipmentType: string;

  @Prop({ required: true })
  uom: string;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  weightUnit: string;

  @Prop({ required: true })
  cube: number;

  @Prop({ required: true })
  cubeUnit: string;

  @Prop({ required: true })
  purchaseOrder: any[];

  @Prop({ required: true })
  orderStatus: string;

  @Prop({ required: true })
  plannedPickupDate: Date;

  @Prop({ required: true })
  plannedDeliveryDate: Date;

  @Prop({ required: true })
  transitTime: number;

  @Prop()
  bol: string;

  @Prop()
  bookingType: string;
}

@Schema()
export class OceanOrder extends Order {
  @Prop({ required: true })
  originPort: Location;

  @Prop({ required: true })
  destinationPort: Location;

  @Prop()
  brokerType: string;

  @Prop({ required: true })
  vendorPenaltySetup: number;

  @Prop({ required: true })
  ssl: boolean;

  @Prop()
  vgm: any;

  @Prop()
  validateShippingData: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order).add(BaseSchema);
export const OceanOrderSchema = SchemaFactory.createForClass(OceanOrder).add(
  BaseSchema,
);
