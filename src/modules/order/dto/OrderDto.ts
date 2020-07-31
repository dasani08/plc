import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'common/dto/abstract.dto';
import { ValidateNested, IsNotEmpty, IsIn } from 'class-validator';

import { Order, OceanOrder } from '../schema/order.schema';
import {
  ROAD_WEIGHT_BREAK_LTL_RATE_TYPE,
  ROAD_PALLET_BREAK_LTL_RATE_TYPE,
  ROAD_LTL_REEFER_RATE_TYPE,
  ROAD_LTL_HEAT_RATE_TYPE,
  ROAD_TL_RATE_TYPE,
  ROAD_REEFER_TL_RATE_TYPE,
  ROAD_REEFER_TL_P_2_P_RATE_TYPE,
  ROAD_HEATER_TL_RATE_TYPE,
  ROAD_TL_PER_MILE_RATE_TYPE,
  ROAD_LTL_PER_MILE_RATE_TYPE,
} from '../order.contant';

export class Company {
  _id: string;
  legalName: string;
}

export class Contract {
  _id: string;
  contractType: string;
  contractNumber: string;
}

export class Country {
  _id: string;
  name: string;
  code2: string;
}

export class Location {}

export class OrderDto extends BaseDto<Order> {
  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  contract: Contract;

  @IsNotEmpty()
  @ApiProperty()
  shippingMode: string;

  @IsNotEmpty()
  @ApiProperty()
  shippingType: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  originCountry: Country;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  carrier: Company;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  shipper: Company;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  shipperLocation: Location;

  @IsNotEmpty()
  @ApiProperty()
  shipperPhone: string;

  @ValidateNested()
  @ApiProperty()
  customBroker: Company;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  destinationCountry: Country;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  consignee: Company;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  consigneeLocation: string;

  @ApiProperty()
  consigneePhone: string;

  @ValidateNested()
  @ApiProperty()
  notifyParty1: Company;

  @ValidateNested()
  @ApiProperty()
  notifyParty2: Company;

  @IsNotEmpty()
  @ApiProperty()
  orderDate: Date;

  @ApiProperty()
  productType: string;

  @IsNotEmpty()
  @ApiProperty()
  rateIds: any[];

  @IsNotEmpty()
  @ApiProperty()
  moveType: string;

  @IsNotEmpty()
  @ApiProperty()
  equipmentType: string;

  @IsNotEmpty()
  @IsIn([
    ROAD_WEIGHT_BREAK_LTL_RATE_TYPE,
    ROAD_PALLET_BREAK_LTL_RATE_TYPE,
    ROAD_LTL_REEFER_RATE_TYPE,
    ROAD_LTL_HEAT_RATE_TYPE,
    ROAD_TL_RATE_TYPE,
    ROAD_REEFER_TL_RATE_TYPE,
    ROAD_REEFER_TL_P_2_P_RATE_TYPE,
    ROAD_HEATER_TL_RATE_TYPE,
    ROAD_TL_PER_MILE_RATE_TYPE,
    ROAD_LTL_PER_MILE_RATE_TYPE,
  ])
  @ApiProperty()
  uom: string;

  @ApiProperty()
  weight: number;

  @IsIn(['LBS', 'KG'])
  @ApiProperty()
  weightUnit: string;

  @ApiProperty()
  cube: number;

  @IsIn(['CBM', 'CBF'])
  @ApiProperty()
  cubeUnit: string;

  @IsNotEmpty()
  @ApiProperty()
  purchaseOrder: any[];

  @ApiProperty()
  plannedPickupDate: Date;

  @ApiProperty()
  plannedDeliveryDate: Date;

  @ApiProperty()
  transitTime: number;

  @ApiProperty()
  bol: string;

  @ApiProperty()
  bookingType: string;
}
