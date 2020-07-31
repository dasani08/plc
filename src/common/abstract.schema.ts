import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UtilsService } from 'providers/utils.service';
import { BaseDto } from './dto/abstract.dto';

export abstract class AbstractDocument extends Document {
  toDto: <T extends Document, B extends BaseDto<T>>(
    document: T,
    options?: any,
  ) => B;
}

@Schema()
export class BaseDocument extends AbstractDocument {
  @Prop({
    default: new Date(),
  })
  createdAt: Date;

  @Prop({
    default: new Date(),
  })
  updatedAt: Date;
}

export const BaseSchema = SchemaFactory.createForClass(BaseDocument);
BaseSchema.methods.toDto = (self, options) => {
  return UtilsService.toDto(self.dtoClass, self, options);
};
