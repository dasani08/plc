import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema, BaseDocument } from 'common/abstract.schema';
import { UserDto } from '../dto/UserDto';

@Schema()
export class User extends BaseDocument {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  phone: string;

  @Prop({
    get: () => UserDto,
  })
  dtoClass: UserDto;
}

export const UserSchema = SchemaFactory.createForClass(User).add(BaseSchema);
